
const amenities= [
    "Bed Linens",
"Carbon Alarm",
"Check-in Lockbox",
"Coffee Maker",
"Dishwasher",
"Extra Pillows",
"First Aid Kit",
"Hangers",
'Iron',
"Microwave",
"Refrigerator",
"Security Cameras",
"Smoke alarm",
]


export default function Amenities(){

    return (

        <div className=" shadow-lg my-10 p-5 space-y-5">
            <p className="text-xl font-bold text-grey">Amenities</p>
            <div className="h-[3px]  bg-green w-16" />

            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {amenities.map((each,i)=>{
                    return (
                        <p className="text-slate-600" key={i}>{each}</p>
                    )
                })}
            </div>
        </div>
    )
}