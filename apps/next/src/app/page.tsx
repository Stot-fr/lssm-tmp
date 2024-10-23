import { Link, LinkText } from "@lssm/ui-kit/ui/link";
import { View } from "@lssm/ui-kit/ui/view";

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
