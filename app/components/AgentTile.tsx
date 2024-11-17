"use client"

import Image from "next/image"
import { useState } from "react"


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

                
            </div>

        </article>
    )
}