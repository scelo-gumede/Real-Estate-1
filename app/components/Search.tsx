"use client"

import SearchLabel from "./SearchLabel"
import { houses } from "../data"
import { useState,useEffect } from "react"
import HouseTile from "./HouseTile"
const labels = ["View all" , "Apartments", "Farm house" , "House" , "Villas"]


export default function Search(){
    const[data,setData]=useState(houses)
    const[indexa,setIndexa]=useState("View all")

    useEffect(()=>{
        if(indexa==="View all"){
            return setData(houses)
        }
        const filteredArray=houses.filter(label=> label.place == indexa)
        setData([...filteredArray])
    },[indexa])

    
    return( 
        <section className="space-y-5  py-10 my-10 px-6">
            <h2 className="text-4xl text-grey text-center font-extrabold">Popular Searches</h2>

            <div className="flex py-2 justify-center">
                <ul className="flex gap-6 shadow-lg p-4 rounded-3xl">

                {
                    labels.map((label,i)=>{
                        return (
                            <SearchLabel data={label} indexa={indexa} setIndexa={setIndexa} index={i} key={i} />  
                )
            })
        }
                </ul>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-6">
                {data.slice(0,4).map((house,i)=>{
                    return <HouseTile {...house} key={i} />
                })}
            </div>
            
            <div className="flex justify-center my-10">
            <p className="text-white bg-green text-center px-5 rounded-md py-3 cursor-pointer ">Load More Properties</p>
            </div>
        </section>
    )
}