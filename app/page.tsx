import Agents from "./components/Agents"
import Cities from "./components/Cities"
import Hero from "./components/Hero"
import Line from "./components/Line"
import Market from "./components/Market"
import NeighbourHood from "./components/NeighbourHood"
import Search from "./components/Search"
import Selling from "./components/Selling"
import Testimonials from "./components/Testimonials"
import Trust from "./components/Trust"
import Work2geda from "./components/Work2geda"



export default function Home (){

  return(
    <div className="imageBack">
      <Hero />
      <Cities />
      <Trust />
      <Search />
      <Market />
      <Agents />
      <Line />
      <NeighbourHood />
      <Testimonials />
      <Selling />
      <Work2geda />
    </div>
  )
}