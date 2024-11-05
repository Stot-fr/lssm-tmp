'use client';
import { Overlay } from '@gluestack-ui/overlay';
import { cssInterop } from 'nativewind';
import React from 'react';
cssInterop(Overlay, { className: 'style' });
export const Portal = React.forwardRef(({ ...props }, ref) => {
    return <Overlay {...props} ref={ref}/>;
});
