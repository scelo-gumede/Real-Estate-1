"use client"
import SearchLabel from "./SearchLabel"
import { houses } from "../data"
import { useState, useEffect } from "react"
import HouseTile from "./HouseTile"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import clsx from "clsx"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const labels = ["View all", "Apartments", "Farm house", "House", "Villas"]

export default function Search() {
    const [data, setData] = useState(houses)
    const [indexa, setIndexa] = useState("View all")
    const [size, setSize] = useState(0) // Start with size as 0 (it'll be updated on mount)
    const [index, setIndex] = useState(10)

    // Update data based on selected label
    useEffect(() => {
        if (indexa === "View all") {
            return setData(houses)
        }
        const filteredArray = houses.filter(label => label.place == indexa)
        setData([...filteredArray])
    }, [indexa])

    // Update window size only on client-side
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }

        // Add event listener to handle resize
        window.addEventListener("resize", handleResize)

        // Update size on initial mount
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Handle index changes for pagination
    useEffect(() => {
        if (index < 0) {
            setIndex(5)
        }
    }, [index])

    const handleIncrease = () => {
        setIndex(i => i + 1)
    }

    const handleDecrease = () => {
        setIndex(i => i - 1)
    }



    return (
        <section className="space-y-5 bg-white py-20 px-6">
            <h2 className="text-4xl text-grey text-center font-extrabold">Popular Searches</h2>

            <div className="flex py-2 justify-center">
                <ul className="flex gap-6 shadow-lg p-4 rounded-3xl">
                    {
                        labels.map((label, i) => {
                            return (
                                <SearchLabel data={label} indexa={indexa} setIndexa={setIndexa} index={i} key={i} />
                            )
                        })
                    }
                </ul>
            </div>

            <div className="flex flex-nowrap gap-6">
                {data.slice(0, size < 650 ? 1 : size < 917 ? 2 : 4).map((house, i) => {
                    return <HouseTile {...house} key={i} />
                })}
            </div>

            <div className={clsx("flex justify-center space-x-4")}>
                <span onClick={() => handleDecrease()} className={clsx('hover:bg-green rounded-lg transition duration-300 border border-solid border-green p-3 cursor-pointer ')}>
                    <ChevronLeftIcon className="text-lg" />
                </span>
                <span onClick={() => handleIncrease()} className={clsx('hover:bg-green rounded-lg transition duration-300 border border-solid border-green p-3 cursor-pointer ')}>
                    <ChevronRightIcon />
                </span>
            </div>

            <div className="flex justify-center my-14">
                <p className="text-white bg-green text-center px-5 rounded-md py-3 cursor-pointer ">Load More Properties</p>
            </div>
        </section>
    )
}
