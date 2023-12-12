"use client"
import Avatar from "@/app/components/general/Avatar";
import {Rating} from "@mui/material";

const Comment = ({review}: {review:any}) => {
    return (
        <div className="gap-2 w-full md:w-1/2 border p-2 rounded-lg">
            <div className="flex justify-between gap-1">
                <div className="flex items-center">
                    <Avatar image={review?.user?.avatar} size="small" />
                    <div className="font-medium text-slate-700">{review?.user?.name}</div>
                </div>
                <div className="flex items-center gap-1">
                    <Rating name="read-only" value={review?.rating} readOnly />
                    {/*<div className="text-slate-500">{review?.createdDate}</div>*/}
                </div>
            </div>
            <div className="text-slate-500">{review?.comment}</div>
        </div>
    )
}
export default Comment
