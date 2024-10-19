import { Checkbox as UiCheckbox } from "@/ui-kit/ui/checkbox";

import type { ComponentProps } from "react";

interface CheckboxProps extends ComponentProps<typeof UiCheckbox> {}

export const Checkbox = (props: CheckboxProps) => {
  return <UiCheckbox {...props} />;
};
