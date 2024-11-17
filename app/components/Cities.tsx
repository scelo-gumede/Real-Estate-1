import CitiesTile from "./CitiesTile"
import { cities } from "../data"

export default function Cities(){

    return (
        <section className="flex flex-col gap-8 py-12 my-16 px-4">
            <h2 className="text-4xl text-grey text-center font-extrabold">Properties By Cities</h2>
            <p className="text-slate-600 text-lg mb-4 text-center">Thousands of luxury home enthusiasts just like you visit our website.</p>

            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
                {cities.map((city,i)=>{
                    return (
                        <CitiesTile key={i} {...city} />
                    )
                })}
            </div>
        </section>
    )
}