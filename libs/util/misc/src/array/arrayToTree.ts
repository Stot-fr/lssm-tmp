export type TreeReadyShape = { id: bigint | string };

export type TreeNode<T extends TreeReadyShape> = T & {
  children: TreeNode<T>[];
};
export type TreeIdGetter<T> = {
  getParentId: (item: T) => string | undefined | null;
  getItemId: (item: T) => string;
};

export const arrayToTree = <T extends TreeReadyShape>(
  array: Array<T>,
  idGetter: TreeIdGetter<T>,
): Array<TreeNode<T>> => {
  const formatMapped = array.reduce((acc, curr) => {
    const itemId = idGetter.getItemId(curr);
    acc.set(itemId, { ...curr, id: itemId, children: [] });
    return acc;
  }, new Map<string, TreeNode<T>>());

  return [...formatMapped.values()].reduce((acc, entry) => {
    const parentId = idGetter.getParentId(entry);
    if (!parentId) {
      acc.push(entry);
      return acc;
    }

    const parent = formatMapped.get(parentId);
    if (!parent) {
      console.error(
        `arrayToTree: cant find parent ${parentId} of ${idGetter.getItemId(entry)}`,
        entry,
      );
      return acc;
    }

    parent.children.push(entry);
    return acc;
  }, new Array<TreeNode<T>>());
};
