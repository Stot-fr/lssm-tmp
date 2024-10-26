import { icons } from "lucide-react";
const Icon = (props) => {
    const { name } = props;
    const LucideIcon = icons[name];
    return <LucideIcon {...props} size={props?.size ?? 16}/>;
};
export default Icon;
