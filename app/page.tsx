import Cities from "./components/Cities"
import Hero from "./components/Hero"
import Search from "./components/Search"
import Trust from "./components/Trust"



export default function Home (){

  return(
    <div>
      <Hero />
      <Cities />
      <Trust />
      <Search />
    </div>
  )
}