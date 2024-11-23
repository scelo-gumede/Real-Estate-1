import EachHouseDetailsOne from "@/app/components/EachHouseDetailsOne"




export default async function EachHouseDetails({params}:{params:Promise<{id:number}>}){
    
    const id = (await params).id


    return (
        <div>
            <EachHouseDetailsOne houseId={id} />
        </div>
    )

}