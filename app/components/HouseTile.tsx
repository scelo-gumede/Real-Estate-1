import Image from "next/image"
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import AllOutIcon from '@mui/icons-material/AllOut';

interface HouseTileProps{
        image:string,
        price:string,
        place:string,
        room:string,
        location:string,
        occupation:string
}


export default function HouseTile(props:HouseTileProps){

    return (
        <article className=" shadow-md border flex flex-col border-solid border-grey border-opacity-25 rounded-tl-lg rounded-tr-lg   overflow-hidden  ">
            <div className=" h-[40%]  relative">
                <Image alt="image" height={450} width={450} src={props.image} className="w-full hover:scale-110 transition duration-300 object-cover h-full" />
                <div className="absolute left-0 top-0 p-2 flex justify-between  z-1 w-full">
                    <div className=" flex gap-2 items-center text-white">
                    <p className="bg-green rounded-[10px] p-1">feature</p>
                    <p className="bg-slate-500 rounded-[10px] p-1 opacity-80 ">{props.occupation}</p>
                    </div>

                    <div className="space-x-2">
                        <VisibilityIcon className="p-1 bg-slate-500 cursor-pointer rounded-md bg-opacity-40" />
                        <FavoriteBorderIcon className="p-1 bg-slate-500 cursor-pointer rounded-md bg-opacity-40" />
                        <WifiProtectedSetupIcon className="p-1 bg-slate-500 cursor-pointer rounded-md bg-opacity-40" />
                    </div>
                </div>
            </div>
            <div className="p-4 h-[60%] space-y-1 text-grey">
                <p className="text-black"><span className="p-1 w-[5px] h-[5px] mr-2 bg-green"><AllOutIcon /></span>{props.place}</p>
                <p className="font-extrabold text-black text-2xl">{props.price}</p>
                <p>{props.room}</p>
                <div className="flex items-center justify-between">
                <p>{props.location}</p>
                <p className="p-2 hover:bg-green hover:text-white cursor-pointer transition duration-300 border rounded-[20px] border-solid border-grey border-opacity-25">Show details</p>
                </div>
            </div>
        </article>
    )
}