"use client"

import TextField from '@mui/material/TextField';
import { Autocomplete, Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


export default function SearchCitiesBar(){
    const[rentOrBuy,setRentOrBuy]=useState("Rent")
    
    const options=["Property","House","Apartment"]
    const places=["Durban","Johannesburg","Capetown","Nelspruit"]
    const handleChange=(event:SelectChangeEvent)=>{
        setRentOrBuy(event.target.value as string)
    }

    return(
        <section>

        <div className=" p-2 my-6 md:mx-4 rounded-[20px]">

            <div className='p-4 rounded-[20px] bg-white flex gap-2 md:flex-wrap justify-center   md:gap-6'>


                <div className='flex justify-center gap-5 items-center'>
                    <p className='font-bold hidden md:flex text-slate-500'>For {rentOrBuy} </p>
                    <Select value={rentOrBuy} className='font-bold text-slate-500' onChange={handleChange}>
                        <MenuItem value={"Rent"}>Rent</MenuItem>
                        <MenuItem value={"Buy"}>Buy</MenuItem>
                    </Select>
                </div>
                
                <div className='md:hidden bg-green text-white p-3 rounded-md flex items-center'><MoreVertIcon /></div>
                <TextField  id="outlined-basic" placeholder='Address,City,Zip' variant="outlined" className='border w-[300px] md:w-[200px] border-solid hover:border-green' />
                <div className='flex items-center md:hidden bg-green rounded-md p-3'><SearchIcon /></div>

                <div className='hidden md:flex'>
                <Autocomplete
                 disablePortal
                sx={{width:200}}
                options={options}
                renderInput={(params) => <TextField placeholder='Apartments' {...params} />}
                 />
                </div>

                <div className='hidden md:flex'>
                <Autocomplete
                disablePortal
                sx={{width:200}}
                options={places}
                renderInput={(params) => <TextField placeholder='Durban' {...params} />}
                />
            </div>

            <div className='hidden md:flex'>
             <Button endIcon={<MoreVertIcon />} sx={{width:200,color:"#333333"}} variant='outlined'>
             Advanced
             </Button>
            </div>

            <div className='hidden md:flex'>
             <Button className='bg-green h-full hover:bg-grey' sx={{width:200,background:"#05a688",color:"#ffffff"}} variant='outlined'>
             Search Now
            </Button>
            </div>
            </div>
        </div>

        </section>
    )
}