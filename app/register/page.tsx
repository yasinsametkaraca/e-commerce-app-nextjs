import React from 'react'
import RegisterClient from "@/app/components/auth/RegisterClient";
import {getCurrentUser} from "@/app/actions/getCurrentUser";

const Page = async () => {

    const currentUser = await getCurrentUser()
    return (
        <RegisterClient currentUser={currentUser}/>
    )
}
export default Page
