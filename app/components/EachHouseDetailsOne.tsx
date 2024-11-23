import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ConstructionIcon from '@mui/icons-material/Construction';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Crop32Icon from '@mui/icons-material/Crop32';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ShareIcon from '@mui/icons-material/Share';
import Image from "next/image"
import { houses } from "../data"

interface EachHouseDetailsOneProps{
    houseId:number
}

export default function EachHouseDetailsOne(props:EachHouseDetailsOneProps){

    const oneHouse =  houses.find(each=> each.id == props.houseId )  
    
    if (!oneHouse) {
        return <p>House not found</p>;
    }

    return (
        <section className="px-5">
            <article>
                <div className="h-[70vh] rounded-lg overflow-hidden">
                    <Image src={oneHouse.image} className="h-full w-full" width={300} height={300} alt={oneHouse.place} />
                </div>

                <div className='p-5'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div>
                            <p> {oneHouse.occupation}</p>
                            <p> {oneHouse.price}</p>
                        </div>

                        <div className='flex flex-col md:flex-row gap-2'>
                            <div >
                                <CompareArrowsIcon />
                                <FavoriteBorderIcon />
                            </div>
                                <p>Share this home <ShareIcon />  </p>
                        </div>
                    </div>

                    <div>
                            <p>{oneHouse.room}</p>
                    </div>

                    <div>
                            <p>{oneHouse.location}</p>
                    </div>

                    <div className=' grid grid-cols-2 lg:grid-cols-4 gap-2'>
                        <div className='flex items-center gap-2 '>
                            <div className='border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-4'><OtherHousesIcon /></div>
                            <div className=''>
                                <p className='text-grey font-bold'>Proper Type</p>
                                <p className='text-slate-500'>Mansion</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 '>
                            <div className=' border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-4'><ConstructionIcon /></div>
                            <div className=''>
                                <p className='text-grey font-bold'>Year built</p>
                                <p className='text-slate-500'>2021</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 '>
                            <div className='border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-4'><DirectionsCarIcon /></div>
                            <div className=''>
                                <p className='text-grey font-bold'>Garage</p>
                                <p className='text-slate-500'>1</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 '>
                            <div className='border-opacity-50 rounded-lg border border-solod  border-slate-500 text-slate-500 p-4'><Crop32Icon /></div>
                            <div className=''>
                                <p className='text-grey font-bold'>Size</p>
                                <p className='text-slate-500'>2000sqft</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start my-10">
                        <p className="text-white bg-green font-bold text-center px-5 rounded-md py-3 cursor-pointer ">Ask a Question</p>
                    </div>
                </div>
            </article>
        </section>
    )
}