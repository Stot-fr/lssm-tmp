import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { Animated, View } from 'react-native';
declare const Skeleton: React.ForwardRefExoticComponent<import("react-native").ViewProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    variant: {
        sharp: string;
        circular: string;
        rounded: string;
    };
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
} | ({
    variant: {
        sharp: string;
        circular: string;
        rounded: string;
    };
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
} & {
    variant: {
        sharp: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        circular: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        rounded: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    speed: {
        1: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        2: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        3: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        4: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "w-full h-full", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        sharp: string;
        circular: string;
        rounded: string;
    };
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}, {
    variant: {
        sharp: string;
        circular: string;
        rounded: string;
    };
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}>, {
    variant: {
        sharp: string;
        circular: string;
        rounded: string;
    };
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    variant: {
        sharp: string;
        circular: string;
        rounded: string;
    };
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}, undefined, "w-full h-full", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        sharp: string;
        circular: string;
        rounded: string;
    };
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}, {
    variant: {
        sharp: string;
        circular: string;
        rounded: string;
    };
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}>, unknown, unknown, undefined>>> & {
    isLoaded?: boolean | undefined;
    startColor?: string | undefined;
} & React.RefAttributes<View | Animated.LegacyRef<View>>>;
declare const SkeletonText: React.ForwardRefExoticComponent<import("react-native").ViewProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    gap: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
} | ({
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    gap: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
} & {
    speed: {
        1: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        2: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        3: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        4: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    gap: {
        1: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        2: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        3: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        4: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "rounded-sm w-full", import("tailwind-variants/dist/config").TVConfig<{
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    gap: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}, {
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    gap: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}>, {
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    gap: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    gap: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}, undefined, "rounded-sm w-full", import("tailwind-variants/dist/config").TVConfig<{
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    gap: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}, {
    speed: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    gap: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}>, unknown, unknown, undefined>>> & {
    _lines?: number | undefined;
    isLoaded?: boolean | undefined;
    startColor?: string | undefined;
} & React.RefAttributes<View>>;
export { Skeleton, SkeletonText };
