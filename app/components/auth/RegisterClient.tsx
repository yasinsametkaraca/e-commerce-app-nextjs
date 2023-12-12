"use client";

import AuthContainer from "@/app/components/containers/AuthContainer";
import Heading from "@/app/components/general/Heading";
import Button from "@/app/components/general/Button";
import Input from "@/app/components/general/Input";
import {useForm, SubmitHandler, FieldValues} from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";

const RegisterClient = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    return (
        <AuthContainer>
            <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
                <Heading text={"Register"} center/>
                <Input id={"name"} placeholder={"Name"} type={"text"} register={register} errors={errors} required/>
                <Input id={"email"} placeholder={"Email"} type={"email"} register={register} errors={errors} required/>
                <Input id={"password"} placeholder={"Password"} type={"password"} register={register} errors={errors} required/>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                <Button text={"Register"}  style={"bg-orange-600 hover:bg-orange-500 my-2"} onClick={() => handleSubmit(onSubmit)}/>

                <div className="my-3">Or</div>
                <Button text={"Register with Google"} outline icon={FaGoogle} onClick={() => {}}/>
            </div>
        </AuthContainer>
    )
}
export default RegisterClient
