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
        <article onMouseEnter={()=> setEnter(true)} onMouseLeave={()=> setEnter(false)} className="rounded-lg overflow-hidden ">

            <div className="w-full h-full relative ">
                <Image src={image} width={300} height={300} alt={name}  className={`object-cover transition duration-300 w-full h-full  ${ enter && 'scale-110' } `} />
                {!value && (  <div className="absolute  bottom-10 left-0 w-full ">
                    <p className="text-center text-white text-3xl">{name}</p>
                    <p className="text-center text-white text-3xl">{occupation}</p>
                </div> ) }
            </div>

        </article>
    )
}