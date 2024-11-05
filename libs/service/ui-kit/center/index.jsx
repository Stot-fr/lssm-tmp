import React from 'react';
import { View } from 'react-native';
import { centerStyle } from './styles';
const Center = React.forwardRef(({ className, ...props }, ref) => {
    return (<View className={centerStyle({ class: className })} {...props} ref={ref}/>);
});
Center.displayName = 'Center';
export { Center };
