"use client";

import React from 'react'
import AdminSidebarItem from "@/app/components/admin/AdminSidebarItem";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import {usePathname} from "next/navigation";

const AdminSidebar = () => {
    const pathname = usePathname()

    const adminPanel = [
        {
            name: "Dashboard",
            url: "/admin",
            icon: MdDashboard
        },
        {
            name: "Create Product",
            url: "/admin/create",
            icon: MdProductionQuantityLimits
        },
        {
            name: "Manage Product",
            url: "/admin/manage",
            icon: MdProductionQuantityLimits
        },
        {
            name: "Orders",
            url: "/admin/orders",
            icon: BiPurchaseTag
        },
    ]

    return (
        <div className="sm:w-1/5 border-r h-screen p-4 bg-orange-50">
            <div className="space-y-4">
                {
                    adminPanel.map((admin, index) => (
                        <AdminSidebarItem key={index} name={admin.name} icon={admin.icon} url={admin.url} selected={pathname == admin.url} />
                    ))
                }
            </div>
        </div>
    )
}
export default AdminSidebar
