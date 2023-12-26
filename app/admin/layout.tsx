import React from 'react'
import AdminSidebar from "@/app/components/admin/AdminSidebar";

const Layout = ({children}: {children:React.ReactNode}) => {
    return (
        <div className='flex gap-3'>
            <AdminSidebar />
            {children}
        </div>
    )
}
export default Layout
