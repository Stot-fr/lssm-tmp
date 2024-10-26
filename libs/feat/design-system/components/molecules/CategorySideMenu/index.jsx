import { View } from "@/ui-kit/ui/view";
import { Text } from "@/ui-kit/ui/text";
import { Link } from "@/ui-kit/ui/link";
import Icon from "@/icons-kit/icons";
export const CategorySideMenu = ({ category, items, }) => {
    return (<View className="space-y-2 mb-4 border-gray-500 border-t">
      <Text className="text-lg font-semibold text-white px-3 py-4">
        {category}
      </Text>

      {items.map((item) => (<Link key={item.id} href={item.target} className="flex items-center space-x-2 py-3 px-3 hover:bg-gray-900 hover:bg-opacity-50 flex-row">
          {item.IconElement && (<Icon {...item.IconElement} className="text-gray-400"/>)}
          <Text className="text-gray-400">{item.title}</Text>
        </Link>))}
    </View>);
};
