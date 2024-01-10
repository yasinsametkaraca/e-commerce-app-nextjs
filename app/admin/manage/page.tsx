import React from 'react'
import {getCurrentUser} from "@/app/actions/getCurrentUser";
import WarningText from "@/app/components/warning/WarningText";
import AuthContainer from "@/app/components/containers/AuthContainer";
import CreateForm from "@/app/components/admin/CreateForm";
import ManageProduct from "@/app/components/admin/ManageProduct";
import getProducts from "@/app/actions/getProducts";

const Manage = async () => {
    const products = await getProducts({category: null})

    const currentUser = await getCurrentUser()
    if (!currentUser || currentUser.role !== "ADMIN") {
        return (
            <WarningText text="You are not authorized to view this page."/>
        )
    }
    return (
        <div className="w-full m-2">
            <ManageProduct products={products}/>
        </div>
    )
}
export default Manage
