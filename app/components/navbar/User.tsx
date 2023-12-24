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
        if (type === "logout") {
            setOpenMenu(false)
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
                <FaRegUser size={25}/>
                <div>
                    {currentUser ? currentUser.name : ""}
                </div>
            </div>
            {
                openMenu && (
                    <div className="absolute w-[150px] top-10 bg-slate-100 shadow-xl right-0 p-2 rounded-md">
                        {
                            currentUser ? (
                                <div className="space-y-1">
                                    <div className="text-slate-600">
                                        admin
                                    </div>
                                    <div onClick={() => menuFunc("/login", "logout")} className="text-slate-600">
                                        logout
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div onClick={() => menuFunc("/login", "login")} className="text-slate-600">
                                        login
                                    </div>
                                    <div onClick={() => menuFunc("/register", "register")} className="text-slate-600">
                                        register
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
