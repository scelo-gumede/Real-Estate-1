"use client"

import SearchLabel from "./SearchLabel"
import { houses } from "../data"
import { useState } from "react"
import HouseTile from "./HouseTile"
const labels = ["view all" , "apartments", "farm house" , "house" , "villas"]


export default function Search(){
    const[data,setData]=useState(houses)

    return( 
        <section className="space-y-5 py-10 my-10 px-6">
            <h2 className="text-5xl text-grey text-center font-extrabold">Popular Searches</h2>

            <div className="flex py-2 justify-center">
                <SearchLabel data={labels} />
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-6">
                {data.map((house,i)=>{
                    return <HouseTile {...house} key={i} />
                })}
            </div>
            
            <div className="flex justify-center my-10">
            <p className="text-white bg-green text-center px-5 rounded-md py-3 cursor-pointer ">Load More Properties</p>
            </div>
        </section>
    )
}