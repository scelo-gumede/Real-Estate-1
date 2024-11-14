import Image from "next/image"

interface CitiesTileProps{
        city:string,
        properties:number,
        image:string
}


export default function CitiesTile(props:CitiesTileProps){

    return(
        <article className="flex  cursor-pointer transition duration-300 hover:bg-green overflow-hidden shadow-md rounded-lg">
            <div className="w-3/5">
                <Image src={props.image} width={200} height={170} className="w-full transition duration-300 hover:scale-110 h-full" alt={props.city}  />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
                <p className="text-grey font-bold text-lg" >{props.city}</p>
                <p className="text-slate-600">{props.properties} properties</p>
            </div>
        </article>
    )
}