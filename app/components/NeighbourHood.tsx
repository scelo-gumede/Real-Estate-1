
import Image from "next/image"

const neighborhoods= [
    {
        image:"/chicago.png",
        name:"Chicago",
        properties:"2 properties"
    },
    {
        image:"/florida.png",
        name:"Florida",
        properties:"2 properties"
    },
    {
        image:"/new-york.png",
        name:"New-york",
        properties:"2 properties"
    },
    
]


export default function NeighbourHood(){

    return (
        <section className="py-20 space-y-10 px-10 bg-white">
            
            <h2 className="text-4xl text-grey text-center font-extrabold">Explore The Neighborhoods</h2>

            <p className="text-slate-600 text-lg  text-center">We connect you directly to the person that knows the most about a property for sale, the listing agent.</p>

            <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                neighborhoods.map((neighbur,i)=>{
                    return (
                        <Neighbour {...neighbur} key={i} />
                    )
                })
            }
            </div>

        </section>
    )
}


interface NeighbourProps{
        image:string,
        name:string,
        properties:string
}

function Neighbour(props:NeighbourProps){

    const{image,name,properties}=props
    return (
        <article className=" h-[50vh] cursor-pointer  rounded-lg overflow-hidden">
             <div className="w-full relative h-full">
                <div>
                <Image width={300} height={200}  src={image} className="object-cover hover:scale-110 transition duration-300 w-full h-full"  alt={name}/>
                </div>
                <div className="absolute z-20 flex justify-between bottom-0 left-0 w-full p-6 items-center">
                    <p className="text-white text-2xl font-bold">{name}</p>
                    <p className="text-white text-sm bg-green rounded-2xl p-2">{properties}</p>
                </div>
            <div className="blackEffect2 z-10 absolute top-0 left-0 w-full h-full"></div>
            </div>
        </article>
    )
}