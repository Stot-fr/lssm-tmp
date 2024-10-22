import { Link, LinkText } from "@/ui-kit/ui/link";
import { View } from "@/ui-kit/ui/view";

const Page = () => {
  return (
    <View className="h-screen v-screen">
      <Link href="/layouts/topbar">
        <LinkText>Topbar</LinkText>
      </Link>
      <Link href="/layouts/sidebar">
        <LinkText>Sidebar</LinkText>
      </Link>
    </View>
  );
};

export default Page;
