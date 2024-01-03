import React from 'react'
import {getCurrentUser} from "@/app/actions/getCurrentUser";
import WarningText from "@/app/components/warning/WarningText";
import AuthContainer from "@/app/components/containers/AuthContainer";
import CreateForm from "@/app/components/admin/CreateForm";

const Page = async () => {

    const currentUser = await getCurrentUser()
    if (!currentUser || currentUser.role !== "ADMIN") {
        return (
            <WarningText text="You are not authorized to view this page."/>
        )
    }

    return (
        <AuthContainer>
            <CreateForm/>
        </AuthContainer>
    )
}
export default Page
