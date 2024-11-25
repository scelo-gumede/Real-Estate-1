import { TextareaAutosize, TextField } from "@mui/material";
import Image from "next/image";



export default function EstateAgentPerHouse(){

    return (
        <div className="flex p-5 my-10 flex-col gap-5">
            <div className="flex gap-4 ">
                <div className="overflow-hidden rounded-lg">
                    <Image width={100} className="object-cover w-full " height={100} alt="agent" src="/agent-1.png" />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-slate-400 font-semibold">Sales Associate</p>
                    <p>Jackson Clarke</p>
                    <p>01124433</p>
                </div>
            </div>
            <TextField variant="outlined" className="w-full" label="Full Name" />

            <TextareaAutosize minRows={4} className="w-full border border-solid border-grey border-opacity-50 rounded-md" placeholder="how can we help you"/>

        </div>
    )
}