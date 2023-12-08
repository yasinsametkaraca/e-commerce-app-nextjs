import Image from "next/image";

const Banner = () => {


    return (
        <div className="h-[230px] flex items-center justify-center">
            <div className="h-[230px] relative w-full">
                <Image src={""} alt={""} fill className="object-cover" />
            </div>
        </div>
    )
}
export default Banner
