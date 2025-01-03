import React from 'react';
import { View } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
declare const UITextarea: import("@gluestack-ui/textarea/lib/typescript/types").ITextareaComponentType<Omit<import("react-native").ViewProps & React.RefAttributes<View> & {
    context?: any;
}, "ref"> & React.RefAttributes<unknown>, import("react-native").TextInputProps>;
declare const textareaStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    variant: {
        default: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
} | ({
    variant: {
        default: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
} & {
    variant: {
        default: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    size: {
        sm: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        md: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        lg: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        xl: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "w-full h-[100px] border border-background-300 rounded data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:data-[hover=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:bg-background-50 data-[disabled=true]:data-[hover=true]:border-background-300", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, {
    variant: {
        default: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}>, {
    variant: {
        default: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    variant: {
        default: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "w-full h-[100px] border border-background-300 rounded data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:data-[hover=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:bg-background-50 data-[disabled=true]:data-[hover=true]:border-background-300", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, {
    variant: {
        default: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}>, unknown, unknown, undefined>>;
declare const textareaInputStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "p-2 web:outline-0 web:outline-none flex-1 color-typography-900 align-text-top placeholder:text-typography-500 web:cursor-text web:data-[disabled=true]:cursor-not-allowed", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "p-2 web:outline-0 web:outline-none flex-1 color-typography-900 align-text-top placeholder:text-typography-500 web:cursor-text web:data-[disabled=true]:cursor-not-allowed", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type ITextareaProps = React.ComponentProps<typeof UITextarea> & VariantProps<typeof textareaStyle>;
declare const Textarea: React.ForwardRefExoticComponent<Omit<ITextareaProps, "ref"> & React.RefAttributes<unknown>>;
type ITextareaInputProps = React.ComponentProps<typeof UITextarea.Input> & VariantProps<typeof textareaInputStyle>;
declare const TextareaInput: React.ForwardRefExoticComponent<Omit<ITextareaInputProps, "ref"> & React.RefAttributes<import("react-native").TextInputProps>>;
export { Textarea, TextareaInput };
