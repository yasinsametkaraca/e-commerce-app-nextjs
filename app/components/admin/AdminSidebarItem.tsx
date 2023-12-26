import React from 'react'
import {IconType} from "react-icons";
import Link from "next/link";

type AdminSidebarItemProps = {
    name: string,
    url: string
    icon: IconType
    selected?: boolean,
}

const AdminSidebarItem: React.FC<AdminSidebarItemProps> = ({name, url, selected, icon:Icon}) => {
    return (
        <>
            <Link href={url} className={`cursor-pointer ${selected ? "text-black font-bold": "text-slate-600 font-medium"}`}>
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-slate-100">
                    <Icon size={25}/>
                    <div>
                        {name}
                    </div>
                </div>
            </Link>
        </>
    )
}
export default AdminSidebarItem
