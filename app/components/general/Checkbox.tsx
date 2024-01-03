import React from 'react'
import {FieldValues, UseFormRegister} from "react-hook-form";

interface CheckboxProps {
    id: string
    register: UseFormRegister<FieldValues>
    label: string
}
const Checkbox: React.FC<CheckboxProps> = ({id, register, label}) => {
    return (
        <div className="flex items-center gap-2 my-2">
            <input
                type="checkbox"
                className="focus:ring-slate-500 h-4 w-4 text-slate-600 border-gray-300 rounded"
                {...register(id)}
            />
            <label htmlFor={id} className="ml-1 block text-sm font-medium text-slate-600">
                {label}
            </label>
        </div>
    )
}
export default Checkbox
