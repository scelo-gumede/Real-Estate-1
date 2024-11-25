"use client"

import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ConstructionIcon from '@mui/icons-material/Construction';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Crop32Icon from '@mui/icons-material/Crop32';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ShareIcon from '@mui/icons-material/Share';
import Image from "next/image"
import { houses } from "../data"
import PropertDetails from './PropertyDetails';
import Amenities from './Amenities';
import LoanCalcutator from './LoanCalculator';
import EstateAgentPerHouse from './EstateAgentPerHouse';
import { useState,useEffect } from 'react';
import clsx from 'clsx';

interface EachHouseDetailsOneProps{
    houseId:number
}

export default function EachHouseDetailsOne(props:EachHouseDetailsOneProps){
    const[screen,setScreen]=useState(0)

    useEffect(()=>{
        const handleResize=()=>{
            const screenSize= window.innerWidth
            setScreen(screenSize)
        }

        window.addEventListener("resize",handleResize)

        return ()=> window.removeEventListener("resize",handleResize)
    },[])

    const oneHouse =  houses.find(each=> each.id == props.houseId )  
    
    if (!oneHouse) {
        return <p>House not found</p>;
    }


    console.log(screen)
    console.log(window.innerWidth)
    return (
        <section className="px-5 my-10">
            <article className='space-y-4'>
                <div className="h-[70vh] rounded-lg overflow-hidden">
                    <Image src={oneHouse.image} className="h-full w-full" width={300} height={300} alt={oneHouse.place} />
                </div>

            <div className={clsx("flex gap-5",{
                "flex-row":screen > 816,
                "flex-col":screen <816,
            })}>


            <div className={clsx("",{"w-[70%]":screen > 816,})}>
                <div className='p-5 space-y-2'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div>
                        <p className="text-black font-semibold flex items-center"><span className="p-1 w-[1px] rounded-3xl   h-[1px] mr-2 bg-green"></span><span>{oneHouse.occupation}</span></p>
                            <p className="font-extrabold text-grey text-2xl"> {oneHouse.price}</p>
                        </div>

                        <div className='flex flex-col mt-4 space-y-3 items-start md:items-center md:flex-row gap-2'>
                            <div className='space-x-3    flex' >

                                <div className=' border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-2'><CompareArrowsIcon /></div>

                                <div className=' border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-2'><FavoriteBorderIcon /></div>

                            </div>
                                <p className='text-slate-500 font-semibold'>Share this home <ShareIcon className='text-green' />  </p>
                            </div>
                    </div>

                    <div>
                            <p className='font-semibold'>{oneHouse.room}</p>
                    </div>

                    <div>
                            <p className='hover:text-green font-semibold text-slate-500 transition duration-300'>{oneHouse.location}</p>
                    </div>

                    <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='flex items-center gap-2 '>
                            <div className='border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-2'><OtherHousesIcon /></div>
                            <div className=''>
                                <p className='text-grey font-bold'>Proper Type</p>
                                <p className='text-slate-500 text-sm'>Mansion</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 '>
                            <div className=' border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-2'><ConstructionIcon /></div>
                            <div className=''>
                                <p className='text-grey font-bold'>Year built</p>
                                <p className='text-slate-500 text-sm'>2021</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 '>
                            <div className='border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-2'><DirectionsCarIcon /></div>
                            <div className=''>
                                <p className='text-grey font-bold'>Garage</p>
                                <p className='text-slate-500 text-sm'>1</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 '>
                            <div className='border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-2'><Crop32Icon /></div>
                            <div className=''>
                                <p className='text-grey font-bold'>Size</p>
                                <p className='text-slate-500 text-sm'>2000sqft</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start my-10">
                        <p className="text-white bg-green font-bold text-center px-5 rounded-md py-3 cursor-pointer ">Ask a Question</p>
                    </div>
                </div>


                    <PropertDetails />
                    <Amenities />
                    <LoanCalcutator /> 
                </div>


                <div className={clsx("",{"w-30%":screen > 816,})}>
                    <EstateAgentPerHouse />
                </div>
            </div>
            </article>





        </section>
    )
}