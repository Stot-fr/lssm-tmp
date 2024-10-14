import { createIcon } from "@gluestack-ui/icon";
import { Path, G, Svg } from "react-native-svg";
export const InboxIcon = createIcon({
    Root: Svg,
    viewBox: "0 0 25 24",
    path: (<G>
      <Path d="M5.75 4H19.25C20.983 4 22.3992 5.35645 22.4949 7.06558L22.5 7.25V16.75C22.5 18.483 21.1435 19.8992 19.4344 19.9949L19.25 20H5.75C4.01697 20 2.60075 18.6435 2.50514 16.9344L2.5 16.75V7.25C2.5 5.51697 3.85645 4.10075 5.56558 4.00514L5.75 4H19.25H5.75ZM21 9.373L12.8493 13.6637C12.6619 13.7623 12.4431 13.7764 12.2468 13.706L12.1507 13.6637L4 9.374V16.75C4 17.6682 4.70711 18.4212 5.60647 18.4942L5.75 18.5H19.25C20.1682 18.5 20.9212 17.7929 20.9942 16.8935L21 16.75V9.373ZM19.25 5.5H5.75C4.83183 5.5 4.07881 6.20711 4.0058 7.10647L4 7.25V7.679L12.5 12.1525L21 7.678V7.25C21 6.33183 20.2929 5.57881 19.3935 5.5058L19.25 5.5Z" fill="#747474"/>
    </G>),
});