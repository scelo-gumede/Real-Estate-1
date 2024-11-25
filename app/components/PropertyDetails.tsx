

const more = [
    
        "Property ID:140"
    ,
    
        "Property Price:$17.540"
    ,
    
        "Bathrooms:3"
    ,
    
        "Property Type:House, Mansion"
    ,
    
        "Rooms:6"
    ,
    
        "Garages:5"
    ,
    
        "Property Status:For Rent"
    ,
    
        "Bedrooms:5"
    ,
    
        "Year Built:2020"
    
]



export default function PropertDetails(){

    return(
        <div className="p-5 shadow-lg space-y-5"> 
            <p className="text-xl font-bold text-grey">Property Details</p>
            <div className="h-[3px] bg-green w-16" />
            <p className="text-slate-600">3 Units in North Hollywood with upside potential through construction of an ADU (buyer to verify). Unit mix consists of (3) 3+1 bath units. The building is a total of 2, 660 square feet and situated on a 6, 001 square foot lot. Easy access to the 101, 170, and 134 freeways. The building is separately metered for gas and electricity.</p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3  ">
                {more.map((each,i)=>{

                    const boldText = each.split(":")[1]
                    const unBoldText = each.split(":")[0]


                    return (
                        <p className="text-slate-600" key={i}><span>{unBoldText}</span>{":"}<span className="text-grey font-bold">{boldText}</span></p>
                    )
                })}
            </div>
        </div>
    )
}