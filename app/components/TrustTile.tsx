"use client"

import { SvgIconComponent } from '@mui/icons-material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';


interface TrustTileProps{
    title:string,
    text:string,
    icon: SvgIconComponent
}


export default function TrustTile(props:TrustTileProps){
    const[hover,setHover]=useState(false)

    return (
        <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='flex bg-white gap-8 p-10 rounded-md border border-opacity-20 border-solid border-grey'>

            <div className={`   ${hover && 'spin'}`}>
                <props.icon />
            </div>

            <div className='space-y-4 '>
                <h3 className='text-lg font-bold'>{props.title}</h3>
                <p>{props.text}</p>
                <div className='flex '>
                <p className='text-slate-400 hover:text-green relative transition duration-300 cursor-pointer font-bold'>Read More <ArrowForwardIcon className='' /> <span className={`absolute   bottom-0 left-0 h-[2px] ${hover ? 'borderGreenStart bg-green w-full':'borderWhiteStart'}`}></span></p>
                </div>
            </div>

        </article>
    )
}