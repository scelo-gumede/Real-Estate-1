import Agents from "./components/Agents"
import Cities from "./components/Cities"
import Hero from "./components/Hero"
import Market from "./components/Market"
import NeighbourHood from "./components/NeighbourHood"
import Search from "./components/Search"
import Selling from "./components/Selling"
import Trust from "./components/Trust"



export default function Home (){

  return(
    <div>
      <Hero />
      <Cities />
      <Trust />
      <Search />
      <Market />
      <Agents />
      <NeighbourHood />
      <Selling />
    </div>
  )
}