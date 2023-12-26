import LoginClient from "@/app/components/auth/LoginClient";
import {getCurrentUser} from "@/app/actions/getCurrentUser";

const Page = async () => {

    const currentUser = await getCurrentUser()

    return (
        <LoginClient currentUser={currentUser} />
    )
}
export default Page
