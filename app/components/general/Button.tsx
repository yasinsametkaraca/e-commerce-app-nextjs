import React from "react";
import {IconType} from "react-icons";

interface ButtonProps {
    text: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    style?: string,
    small?: boolean,
    outline?: boolean,
    type?: "button" | "submit" | "reset" | undefined,
    disabled?: boolean,
    icon?: IconType | undefined
}

const Button: React.FC<ButtonProps> = ({text, onClick, style, small=false, outline=false, type, disabled, icon: Icon}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${style} ${small ? "w-max-content" : "w-full"} ${outline ? "border text-black border-gray-300" : "bg-orange-500 text-white"} flex items-center justify-center gap-2 hover:bg-orange-500 rounded-md px-4 py-2 ` }
        >
            {Icon && <Icon />}
            {text}
        </button>
    )
}
export default Button
