import React from "react";

interface HeadingProps {
    center?: boolean
    text: string
}
const Heading: React.FC<HeadingProps> = ({center, text}) => {
    return (
        <div className={`text-slate-500 px-3 my-3 md:my-6 md:px-10 md:text-2xl ${center ? "text-center" : "text-start"}`}>{text}</div>
    )
}
export default Heading
