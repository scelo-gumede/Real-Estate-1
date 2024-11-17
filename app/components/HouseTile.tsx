"use client"
import Image from "next/image"
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import AllOutIcon from '@mui/icons-material/AllOut';
import { useState } from "react";
import clsx from "clsx";


interface HouseTileProps{
        image:string,
        price:string,
        place:string,
        room:string,
        location:string,
        occupation:string
}


export default function HouseTile(props:HouseTileProps){
    const[hovered,setHovered]=useState(false)

    return (
        <article onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className=" shadow-md border flex flex-col border-solid border-grey border-opacity-25 rounded-tl-lg rounded-tr-lg   overflow-hidden h-[60vh] w-full ">
            <div className="h-[60%] cursor-pointer overflow-hidden relative  ">
                <Image alt="image" height={450} width={450} src={props.image} className={clsx("w-full  transition duration-300 object-cover h-full",{
                    "scale-110":hovered
                })} />
                
                <div className="absolute left-0 top-0 p-2 flex justify-between  z-1 w-full">
                    
                    <div className=" flex gap-2 items-center text-white">
                        <p className="bg-green text-sm rounded-[10px] px-2">feature</p>
                        <p className="bg-slate-500 text-sm px-2 rounded-[10px]  opacity-80 ">{props.occupation}</p>
                    </div>

                    <div className="space-x-2">
                        <VisibilityIcon className="p-1 bg-slate-500 cursor-pointer rounded-md bg-opacity-40" />
                        <FavoriteBorderIcon className="p-1 bg-slate-500 cursor-pointer rounded-md bg-opacity-40" />
                        <WifiProtectedSetupIcon className="p-1 bg-slate-500 cursor-pointer rounded-md bg-opacity-40" />
                    </div>
                </div>

            </div>

            <div className="p-4 h-[40%] space-y-1 text-grey">
                <p className="text-black"><span className="p-1 w-[1px] rounded-3xl  overflow-hidden h-[1px] mr-2 bg-green"></span>{props.place}</p>
                <p className="font-extrabold text-black text-2xl">{props.price}</p>
                <p>{props.room}</p>
                <div className="flex items-center justify-between">
                    <p>{props.location}</p>
                     <p className="p-2 hover:bg-green hover:text-white cursor-pointer transition duration-300 delay-75 border rounded-[20px] font-bold border-solid border-grey border-opacity-25">Show details</p>
                </div>
            </div>
        </article>
    )
}