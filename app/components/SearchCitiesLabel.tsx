"use client"
import AppsIcon from '@mui/icons-material/Apps';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';



export default function SearchCitiesLabel(){
    const[sorting,setSorting]=useState("")

    const handleSort=(event:SelectChangeEvent)=>{
        setSorting(event.target.value)
    }

    return(
        <section className='flex px-5 flex-col md:flex-row justify-between '>
            <div className='flex flex-col gap-2'>
            <h2 className="text-4xl text-grey text-left font-extrabold">Property listing</h2>
            <p className="text-slate-600 text-lg mb-4 text-left">There are currently 8 properties.</p>
            </div>

            <div className='flex flex-col md:flex-row gap-5 items-start'>
                <div className='flex gap-5'>

                <div className='text-grey border border-solid border-grey p-4 rounded-lg'>
                <AppsIcon className=' ' />
                </div>
                <div className='bg-green p-4 rounded-lg text-white'>
                <DensityMediumIcon className='' />
                </div>
                <div >
                    <Select onChange={handleSort} className='w-32' value={sorting}>
                        <MenuItem value={"low to high"}>Low to High</MenuItem>
                        <MenuItem value={"high to low"}>High to Low</MenuItem>
                        <MenuItem value={"first"}>First</MenuItem>
                        <MenuItem value={"last"}>Last</MenuItem>
                    </Select>
                </div>
                </div>
                <div className="flex justify-center items-center ">
                    <p className="text-white bg-green font-bold text-center px-5 rounded-md py-3 cursor-pointer ">Save Search</p>
                 </div>
            </div>
        </section>
    )
}