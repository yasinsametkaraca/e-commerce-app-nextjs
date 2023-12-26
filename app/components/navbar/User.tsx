"use client";
import React, {useState} from 'react'
import {User} from "@prisma/client";
import { FaRegUser } from "react-icons/fa";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";


interface UserProps {
    currentUser: User | null | undefined
}

const User: React.FC<UserProps> = ({currentUser}) => {

    const  router = useRouter()
    const [openMenu, setOpenMenu] = useState(false);

    const menuFunc = async (url: string, type: string) => {
        setOpenMenu(false)
        if (type === "logout") {
            await signOut()
            router.push(url)
        } else if (type === "login") {
            router.push(url)
        } else if (type === "register") {
            router.push(url)
        }
    }

    return (
        <div className='hidden md:flex relative'>
            <div onClick={() => setOpenMenu(!openMenu)} className="flex items-center gap-1 cursor-pointer">
                <FaRegUser size={20}/>
                <div>
                    {currentUser ? currentUser.name : ""}
                </div>
            </div>
            {
                openMenu && (
                    <div className="absolute w-[150px] top-10 bg-slate-50 shadow-xl right-0 p-2 rounded-md">
                        {
                            currentUser ? (
                                <div className="space-y-1">
                                    <div onClick={() => router.push('/admin')} className="text-slate-600 hover:bg-slate-100 cursor-pointer">
                                        Admin
                                    </div>
                                    <div onClick={() => menuFunc("/login", "logout")} className="text-slate-600 hover:bg-slate-100 cursor-pointer">
                                        Logout
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div onClick={() => menuFunc("/login", "login")} className="text-slate-600 hover:bg-slate-100 cursor-pointer">
                                        Login
                                    </div>
                                    <div onClick={() => menuFunc("/register", "register")} className="text-slate-600 hover:bg-slate-100 cursor-pointer">
                                        Register
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
export default User
