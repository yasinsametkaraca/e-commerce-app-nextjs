"use client";

import AuthContainer from "@/app/components/containers/AuthContainer";
import Heading from "@/app/components/general/Heading";
import Button from "@/app/components/general/Button";
import Input from "@/app/components/general/Input";
import {useForm, SubmitHandler, FieldValues} from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import Link from "next/link";
import {signIn} from "next-auth/react";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {User} from "@prisma/client";
import React, {useEffect} from "react";

interface LoginClientProps {
    currentUser: User | null | undefined
}

const LoginClient:React.FC<LoginClientProps> = ({currentUser}) => {

    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn("credentials", {
            ...data,
            redirect: false
        }).then((callback) => {
            if (callback?.ok) {
                router.push("/cart")
                router.refresh()
                toast.success("Logged in successfully")
            }
            if (callback?.error) {
                toast.error(callback.error)
            }
        })
    }

    useEffect(() => {
        if (currentUser) {
            router.push("/cart")
            router.refresh()
        }
    }, [])

    return (
        <AuthContainer>
            <div className="w-full md:w-[470px] p-3 shadow-2xl hover:shadow-lg rounded-md">
                <Heading text={"Login"} center/>
                <Input id={"email"} placeholder={"Email"} type={"email"} register={register} errors={errors} required/>
                <Input id={"password"} placeholder={"Password"} type={"password"} register={register} errors={errors} required/>
                <div className="flex items-center justify-between">
                    <div className="flex items-center my-1">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-slate-900">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
                <Button text={"Login"}  style={"hover:bg-gray-900 my-2"} onClick={handleSubmit(onSubmit)}/>
                <div className="my-3 text-center font-medium text-slate-500">Or</div>
                <Button text={"Login with Google"} outline icon={FaGoogle} onClick={() => signIn('google')}/>
                <div className="text-center text-sm text-slate-500 mt-3">
                    Don't have an account?
                    <Link className="text-sm text-red-500" href={"/register"}> Sign Up</Link>
                </div>
            </div>
        </AuthContainer>
    )
}
export default LoginClient
