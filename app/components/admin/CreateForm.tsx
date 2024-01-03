"use client"
import Heading from "@/app/components/general/Heading";
import Input from "@/app/components/general/Input";
import React from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Checkbox from "@/app/components/general/Checkbox";
import { TiThSmall } from "react-icons/ti";
import { GrTechnology } from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { MdOutlineScience } from "react-icons/md";
import { MdHistoryEdu } from "react-icons/md";
import ChoiceInput from "@/app/components/general/ChoiceInput";

const CreateForm = () => {

    const categoryList = [
        { name: "All", id: 1, icon: TiThSmall},
        { name: "Technology", id: 2, icon: GrTechnology},
        { name: "Science", id: 3, icon: MdOutlineScience },
        { name: "Mathematics", id: 4, icon: BiMath },
        { name: "History", id: 5, icon: MdHistoryEdu },
        { name: "Geography", id: 6, icon: GrTechnology },
        { name: "Art", id: 7, icon: GrTechnology },
        { name: "Music", id: 8, icon: GrTechnology },
        { name: "Language", id: 9, icon: FaLanguage },
        { name: "Animals", id: 16, icon: GrTechnology },
        { name: "Other", id: 22, icon: GrTechnology },
    ]

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            price: "",
            description: "",
            image: "",
            category: "",
            inStock: false,
            brand: "",
        }
    })

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Heading text="Create Product" center/>
            <Input id={"name"} placeholder={"Name"} type={"text"} register={register} errors={errors} required/>
            <Input id={"description"} placeholder={"Description"} type={"text"} register={register} errors={errors} required/>
            <Input id={"price"} placeholder={"Price"} type={"number"} register={register} errors={errors} required/>
            <Input id={"image"} placeholder={"Image"} type={"text"} register={register} errors={errors} required/>
            <Input id={"brand"} placeholder={"Brand"} type={"text"} register={register} errors={errors} required/>
            <Checkbox id={"inStock"} label={"In Stock"} register={register}/>
            <div className="flex flex-wrap gap-3">
                {
                    categoryList.map((category) => (
                        <ChoiceInput icon={category.icon}
                                     key={category.id}
                                     selected={watch("category") === category.name}
                                     onClick={(category) => setCustomValue("category", category)}
                                     value={category.name}/>
                    ))
                }
            </div>
            <button onClick={handleSubmit(onSubmit)} className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mt-4">Create</button>

        </div>
    )
}
export default CreateForm
