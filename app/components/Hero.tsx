"use client"
import TextField from '@mui/material/TextField';
import { Autocomplete, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function Hero(){

    const options=["Property","House","Apartment"]
    const places=["Durban","Johannesburg","Capetown","Nelspruit"]

    return (
        <section className="flex bg-grey text-white gap-8 justify-center flex-col items-center h-[100vh]">
            <p className="text-5xl leading-11 text-center font-extrabold">Your Way Home Starts Here</p>
            <div className="flex text-grey gap-5">
                <p className="bg-green hover:cursor-pointer flex justify-center items-center rounded-md font-bold py-3 px-6">For Rent</p>
                <p className="bg-green hover:cursor-pointer flex justify-center items-center rounded-md font-bold py-3 px-6">For Sale</p>
            </div>

            <div className="bg-transparent rounded-md">
                <div className='p-4 rounded-[20px] bg-white flex gap-6'>
                <TextField sx={{width:200}} id="outlined-basic" placeholder='Address,City,Zip' variant="outlined" className='border border-solid hover:border-green' />

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
                <Button className='bg-green' sx={{width:200,background:"#05a688",color:"#ffffff"}} variant='outlined'>
                    Search Now
                </Button>
                </div>
                </div>
            </div>
        </section>
    )
}