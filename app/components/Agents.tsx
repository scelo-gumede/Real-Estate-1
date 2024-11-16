import { agents } from "../data"
import AgentTile from "./AgentTile"


export default function Agents(){

    return (
        <section className="px-10 md:px-24 py-10 space-y-16">
            <h2 className="text-5xl text-grey text-center font-extrabold">Choose Your Local Agent</h2>

            <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
                {agents.map((agent,i)=>{
                    return <AgentTile {...agent} value={false} />
                })}
            </div>

            <p className="text-slate-600 text-lg mb-4 text-center">Explore Property agents are here to help with all your buying, renting and selling goals. Find the home of your dreams with an expert you can trust. Let’s chat</p>

            <div className="flex justify-center my-10">
            <p className="text-white bg-green text-center px-5 rounded-md py-3 cursor-pointer ">Find Your Local Agent</p>
            </div>
        </section>
    )
}