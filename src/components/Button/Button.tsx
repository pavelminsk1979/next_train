'use client'

import {ButtonHTMLAttributes, memo} from "react";
import cls from './Button.module.css';

type ButtonVariant = 'save' | 'cancel' | 'default'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export const Button = memo(function Button({
                                               className,
                                               children,
                                               variant = 'default',
                                               disabled,
                                               ...otherProps
                                           }: ButtonProps) {
    return (
        <button
            className={className ? className : cls[variant]}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});