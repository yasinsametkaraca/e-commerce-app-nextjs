import React from 'react'

const WarningText = ({text} : {text: string}) => {
    return (
        <div className="text-lg h-screen w-full flex items-center justify-center text-slate-500">{text}</div>
    )
}
export default WarningText
