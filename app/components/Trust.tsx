import { trust } from "../data"
import TrustTile from "./TrustTile"


export default function Trust(){


    return (
        <section className="bg-greyWhite space-y-5 py-16 text-grey px-10 lg:px-48">
             <h2 className="text-5xl   text-center font-extrabold">Trusted By 100 Million Buyers</h2>
             <p className="text-slate-600 text-lg mb-4 text-center">We connect you directly to the person that knows the most about a property for sale, the listing agent.</p>
            
            <div className="grid gap-4  md:grid-cols-2">
                {trust.map((each,i)=>{
                    return <TrustTile key={i} {...each} />
                })}
            </div>
        </section>
    )
}