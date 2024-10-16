'use client';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { Svg } from 'react-native-svg';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { withStyleContext, useStyleContext, } from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from 'nativewind';
const SCOPE = 'BADGE';
const badgeStyle = tva({
    base: 'flex-row items-center rounded-sm data-[disabled=true]:opacity-50 px-2 py-1',
    variants: {
        action: {
            error: 'bg-background-error border-error-300',
            warning: 'bg-background-warning border-warning-300',
            success: 'bg-background-success border-success-300',
            info: 'bg-background-info border-info-300',
            muted: 'bg-background-muted border-background-300',
        },
        variant: {
            solid: '',
            outline: 'border',
        },
        size: {
            sm: '',
            md: '',
            lg: '',
        },
    },
});
const badgeTextStyle = tva({
    base: 'text-typography-700 font-body font-normal tracking-normal uppercase',
    parentVariants: {
        action: {
            error: 'text-error-600',
            warning: 'text-warning-600',
            success: 'text-success-600',
            info: 'text-info-600',
            muted: 'text-secondary-600',
        },
        size: {
            sm: 'text-2xs',
            md: 'text-xs',
            lg: 'text-sm',
        },
    },
    variants: {
        isTruncated: {
            true: 'web:truncate',
        },
        bold: {
            true: 'font-bold',
        },
        underline: {
            true: 'underline',
        },
        strikeThrough: {
            true: 'line-through',
        },
        sub: {
            true: 'text-xs',
        },
        italic: {
            true: 'italic',
        },
        highlight: {
            true: 'bg-yellow-500',
        },
    },
});
const badgeIconStyle = tva({
    base: 'fill-none',
    parentVariants: {
        action: {
            error: 'text-error-600',
            warning: 'text-warning-600',
            success: 'text-success-600',
            info: 'text-info-600',
            muted: 'text-secondary-600',
        },
        size: {
            sm: 'h-3 w-3',
            md: 'h-3.5 w-3.5',
            lg: 'h-4 w-4',
        },
    },
});
const PrimitiveIcon = React.forwardRef(({ height, width, fill, color, classNameColor, size, stroke, as: AsComp, ...props }, ref) => {
    color = color ?? classNameColor;
    const sizeProps = useMemo(() => {
        if (size)
            return { size };
        if (height && width)
            return { height, width };
        if (height)
            return { height };
        if (width)
            return { width };
        return {};
    }, [size, height, width]);
    let colorProps = {};
    if (fill) {
        colorProps = { ...colorProps, fill: fill };
    }
    if (stroke !== 'currentColor') {
        colorProps = { ...colorProps, stroke: stroke };
    }
    else if (stroke === 'currentColor' && color !== undefined) {
        colorProps = { ...colorProps, stroke: color };
    }
    if (AsComp) {
        return <AsComp ref={ref} {...props} {...sizeProps} {...colorProps}/>;
    }
    return (<Svg ref={ref} height={height} width={width} {...colorProps} {...props}/>);
});
const ContextView = withStyleContext(View, SCOPE);
cssInterop(ContextView, { className: 'style' });
//@ts-ignore
cssInterop(PrimitiveIcon, {
    className: {
        target: 'style',
        nativeStyleToProp: {
            height: true,
            width: true,
            //@ts-ignore
            fill: true,
            color: 'classNameColor',
            stroke: true,
        },
    },
});
const Badge = ({ children, action = 'info', variant = 'solid', size = 'md', className, ...props }) => {
    return (<ContextView className={badgeStyle({ action, variant, class: className })} {...props} context={{
            action,
            variant,
            size,
        }}>
      {children}
    </ContextView>);
};
const BadgeText = React.forwardRef(({ children, className, size, ...props }, ref) => {
    const { size: parentSize, action: parentAction } = useStyleContext(SCOPE);
    return (<Text ref={ref} className={badgeTextStyle({
            parentVariants: {
                size: parentSize,
                action: parentAction,
            },
            size,
            class: className,
        })} {...props}>
      {children}
    </Text>);
});
const BadgeIcon = React.forwardRef(({ className, size, ...props }, ref) => {
    const { size: parentSize, action: parentAction } = useStyleContext(SCOPE);
    if (typeof size === 'number') {
        return (<PrimitiveIcon ref={ref} {...props} className={badgeIconStyle({ class: className })} size={size}/>);
    }
    else if ((props.height !== undefined || props.width !== undefined) &&
        size === undefined) {
        return (<PrimitiveIcon ref={ref} {...props} className={badgeIconStyle({ class: className })}/>);
    }
    return (<PrimitiveIcon className={badgeIconStyle({
            parentVariants: {
                size: parentSize,
                action: parentAction,
            },
            size,
            class: className,
        })} {...props} ref={ref}/>);
});
Badge.displayName = 'Badge';
BadgeText.displayName = 'BadgeText';
BadgeIcon.displayName = 'BadgeIcon';
export { Badge, BadgeIcon, BadgeText };
