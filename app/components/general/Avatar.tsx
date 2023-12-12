import React from 'react'
import { RxAvatar } from "react-icons/rx";

interface AvatarProps {
    image?: string
    size?: "small" | "medium" | "large",
    alt?: string
}
const Avatar:React.FC<AvatarProps> = ({image,size="small", alt}) => {
    if (image) {
        return (
            <img
                src={image}
                alt={alt}
                className={`rounded-full ${size === "small" ? "w-8 h-8" : size === "medium" ? "w-12 h-12" : "w-16 h-16"}`}
            />
        )
    }
    return (
        <RxAvatar className={`rounded-full ${size === "small" ? "w-8 h-8" : size === "medium" ? "w-12 h-12" : "w-16 h-16"}`} />
    )
}
export default Avatar
