"use client"


import Image from "next/image"
import { useState } from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import clsx from "clsx";

interface AgentTileProps{
        name:string,
        occupation:string,
        image:string,
        value:boolean
}

export default function AgentTile(props:AgentTileProps){
    const[enter,setEnter]=useState(false)

    const{name,occupation,image,value}=props
    return (
        <article onMouseEnter={()=> setEnter(true)} onMouseLeave={()=> setEnter(false)} className="rounded-lg h-[55vh]  cursor-pointer  overflow-hidden ">

            <div className="w-full h-full relative ">
                <Image src={image} width={300} height={300} alt={name}  className={`object-cover transition duration-300 w-full h-full  ${ enter && 'scale-110' } `} />
                {!value && (  <div className="absolute z-20  bottom-10 left-0 w-full ">
                    <p className="text-center text-white font-bold text-2xl">{name}</p>
                    <p className="text-center text-white font-semibold text-xl">{occupation}</p>
                </div> ) }
                <div className="absolute top-0 z-10 left-0 w-full h-full blackEffect"/>

                <div className={clsx("z-30 transition space-y-3  duration-300 bg-transparent absolute  right-0  translate-y-1/2 bottom-1/2 flex flex-col",{
                    "-translate-x-4":enter,
                    "translate-x-full":!enter
                })}>
                    <FacebookIcon  className="bg-greyWhite p-1 transition duration-300 hover:scale-110  rounded-lg"/>
                    <XIcon className="bg-greyWhite p-1 transition duration-300 hover:scale-110  rounded-lg" />
                    <InstagramIcon className="bg-greyWhite p-1 transition duration-300 hover:scale-110  rounded-lg" />
                    <LinkedInIcon className="bg-greyWhite p-1 transition duration-300 hover:scale-110  rounded-lg" />
                </div>
            </div>

        </article>
    )
}

