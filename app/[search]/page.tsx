"use server"
import SearchCitiesAll from "../components/SearchCitesAll"
import SearchCitiesBar from "../components/SearchCitiesBar"
import SearchCitiesLabel from "../components/SearchCitiesLabel"




export default async function Search({params}:{params:Promise<{search:string}>}){

    
    const search = (await params).search

    return(
        <>

            <SearchCitiesBar />
            <SearchCitiesLabel />
            <SearchCitiesAll  />
        </>
    )
}