import Logo from "@/app/components/navbar/Logo";
import Search from "@/app/components/navbar/Search";
import CardCount from "@/app/components/navbar/CardCount";
import User from "@/app/components/navbar/User";
import HamburgerMenu from "@/app/components/navbar/HamburgerMenu";
import {getCurrentUser} from "@/app/actions/getCurrentUser";

const Navbar = async () => {

    const currentUser = await getCurrentUser()

    return (
        <div className='flex items-center justify-between gap-3 md:gap-10 px-2 md:px-8 h-16 bg-orange-500 text-slate-100'>
            <Logo></Logo>
            <Search></Search>
            <CardCount></CardCount>
            <User currentUser={currentUser}></User>
            <HamburgerMenu></HamburgerMenu>
        </div>
    )
}
export default Navbar
