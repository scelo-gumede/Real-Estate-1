

import { houses } from "../data"
import HouseTile from "./HouseTile"

export default function SearchCitiesAll(){


    return(
        <section className="grid px-5 my-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {houses.map((each,i)=>{
                return (
                    <HouseTile {...each} key={i} />
                )
            })}
        </section>
    )
}