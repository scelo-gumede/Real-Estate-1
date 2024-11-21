import { agents } from "../data"
import AgentTile from "./AgentTile"


export default function Agents(){

    return (
        <section className="px-10 md:px-24 bg-white py-20 space-y-16">
            <h2 className="text-4xl text-grey text-center font-extrabold">Choose Your Local Agent</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {agents.map((agent,i)=>{
                    return <AgentTile {...agent} key={i} value={false} />
                })}
            </div>

            <p className="text-slate-600 text-lg mb-4 text-center">Explore Property agents are here to help with all your buying, renting and selling goals. <br /> Find the home of your dreams with an expert you can trust. <span className="text-green cursor-pointer border-b-2 border-b-solid border-b-green ">Let’s chat </span></p>

            <div className="flex justify-center my-10">
            <p className="text-white bg-green font-bold text-center px-5 rounded-md py-3 cursor-pointer ">Find Your Local Agent</p>
            </div>
        </section>
    )
}