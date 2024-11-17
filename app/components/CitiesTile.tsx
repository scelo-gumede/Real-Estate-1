"use client"
import Image from "next/image"
import { useState } from "react"

interface CitiesTileProps{
        city:string,
        properties:number,
        image:string
}


export default function CitiesTile(props:CitiesTileProps){
    const[hover,setHover]=useState(false)

    return(
        <article onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="flex  cursor-pointer transition duration-300 hover:bg-green overflow-hidden shadow-md rounded-lg">
            <div className="w-3/5">
                <Image src={props.image} width={200} height={170} className={`w-full transition duration-300 ${hover ? 'scale-110': "scale-100"} h-full`} alt={props.city}  />
            </div>
            <div className="flex w-full flex-col items-start pl-5 justify-center">
                <p className="text-grey font-bold text-lg" >{props.city}</p>
                <p className="text-slate-600">{props.properties} properties</p>
            </div>
        </article>
    )
}