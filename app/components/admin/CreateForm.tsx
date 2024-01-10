"use client"
import Heading from "@/app/components/general/Heading";
import Input from "@/app/components/general/Input";
import React, {useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Checkbox from "@/app/components/general/Checkbox";
import { GrTechnology } from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { MdOutlineScience } from "react-icons/md";
import { MdHistoryEdu } from "react-icons/md";
import ChoiceInput from "@/app/components/general/ChoiceInput";
import Button from "@/app/components/general/Button";
import toast from "react-hot-toast";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import axios from "axios";
import {useRouter} from "next/navigation";


const CreateForm = () => {

    const router = useRouter()
    const [image, setImage] = useState<File | null>(null)
    const categoryList = [
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

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        let uploadedImg;

        const handleImage = async () => {
            try {
                const storage = getStorage(firebaseApp);
                const storageRef = ref(storage, 'images/shop.jpg');  // be dynamic

                const uploadTask = uploadBytesResumable(storageRef, image);
                await new Promise<void>((resolve, reject) => {
                    uploadTask.on('state_changed',
                        (snapshot) => {
                            // Observe state change events such as progress, pause, and resume
                            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                            }
                        },
                        (error) => {
                            reject(error)
                            // Handle unsuccessful uploads
                        },
                        () => {
                            // Handle successful uploads on complete
                            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                console.log('File available at', downloadURL);
                                toast.success("Image uploaded successfully")
                                uploadedImg = downloadURL;
                                resolve()
                            })
                        }
                    );
                })
            } catch (error: any) {
                toast.error(error)
            }
        }
        await handleImage()
        let newData = {...data, image: uploadedImg}

        axios.post('/api/product', newData)
            .then((res) => {
                toast.success("Product created successfully")
                router.refresh()
            }).catch((err) => {
                console.log(err)
            })

        console.log("newData", newData)
    }

    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            setImage(file)}
    }

    return (
        <div>
            <Heading text="Create Product" center/>
            <Input id={"name"} placeholder={"Name"} type={"text"} register={register} errors={errors} required/>
            <Input id={"description"} placeholder={"Description"} type={"text"} register={register} errors={errors} required/>
            <Input id={"price"} placeholder={"Price"} type={"number"} register={register} errors={errors} required/>
            <Input id={"brand"} placeholder={"Brand"} type={"text"} register={register} errors={errors} required/>
            <Checkbox id={"inStock"} label={"In Stock"} register={register}/>
            <div className="flex flex-wrap gap-3 my-2">
                {
                    categoryList.map((category, index) => (
                        <ChoiceInput
                            icon={category.icon}
                            key={index}
                            selected={watch("category") === category.name}
                            onClick={(category) => setCustomValue("category", category)}
                            value={category.name}/>
                    ))
                }
            </div>
            <input className="mb-2" type="file" onChange={changeImage} />
            <Button text={"Create Product"} onClick={handleSubmit(onSubmit)} small={true}></Button>

        </div>
    )
}
export default CreateForm
