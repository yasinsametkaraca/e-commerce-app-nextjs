"use client";

import React from "react";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

interface Props {
    id: string
    placeholder: string
    type: string
    disabled?: boolean
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}
const Input: React.FC<Props> = ({id,placeholder,type,disabled,required,register,errors}) => {

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...register (id, {required})}
            className={`${errors[id] ? "border-red-500 outline-red-500" : "border-slate-200"} my-4 outline-1 hover:outline h-12 block w-full px-3 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
    )
}
export default Input
