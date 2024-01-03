import React from 'react'
import {IconType} from "react-icons";

interface Props {
    icon: IconType
    selected?: boolean
    onClick: (value: String) => void
    value: String
}
const ChoiceInput:React.FC<Props> = ({icon:Icon,selected,onClick,value}) => {
    return (
        <div
            onClick={() => onClick(value)}
            className={`flex items-center gap-2 my-2 p-2 cursor-pointer border h-16 rounded-md ${selected ? "bg-slate-100 border-black" : "border-gray-300"}`}>
            <Icon className="h-5 w-5 text-slate-600" />
            <span className="ml-1 block text-sm font-medium text-slate-600">
                {value}
            </span>
        </div>
    )
}
export default ChoiceInput
