'use client';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import React from 'react';
import { ImageBackground as RNImageBackground } from 'react-native';
const imageBackgroundStyle = tva({});
export const ImageBackground = React.forwardRef(({ className, ...props }, ref) => {
    return (<RNImageBackground className={imageBackgroundStyle({
            class: className,
        })} {...props} ref={ref}/>);
});