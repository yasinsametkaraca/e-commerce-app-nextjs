import React from "react";

interface HeadingProps {
    center?: boolean
    text: string
}
const Heading: React.FC<HeadingProps> = ({center, text}) => {
    return (
        <div className={`text-slate-500 px-3 my-3 md:my-6 font-medium md:px-10 text-xl md:text-3xl ${center ? "text-center" : "text-start"}`}>{text}</div>
    )
}
export default Heading
