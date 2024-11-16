import Image from "next/image"


const neighborhoods= [
    {
        image:"/chicago.png",
        name:"Chicago",
        properties:"2 properties"
    },
    {
        image:"/chicago.png",
        name:"florida.png",
        properties:"2 properties"
    },
    {
        image:"/chicago.png",
        name:"new-york.png",
        properties:"2 properties"
    }
]


export default function NeighbourHood(){

    return (
        <section className="py-10">
            <h2 className="text-5xl text-grey text-center font-extrabold">Explore The Neighborhoods</h2>

            <p className="text-slate-600 text-lg mb-4 text-center">We connect you directly to the person that knows the most about a property for sale, the listing agent.</p>

            <div className="grid gap-10  grid-cols-1 md:grid-cols-3">
            {
                neighborhoods.map((neighbur,i)=>{
                    return (
                        <Neighbour {...neighbur} />
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
        <article className=" rounded-lg overflow-hidden">
            <div className="w-full relative h-full">
                <Image width={300} height={200}  src={image} className="object-cover w-full h-full"  alt={name}/>
                <div className="absolute flex justify-between bottom-0 left-0 w-full p-6 items-center">
                    <p className="text-white text-xl font-bold">{name}</p>
                    <p className="text-white bg-green rounded-2xl p-2">{properties}</p>
                </div>
            </div>
        </article>
    )
}