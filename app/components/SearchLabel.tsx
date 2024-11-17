

interface SearchLabelProps{
    data:string[]
}

export default function SearchLabel(props:SearchLabelProps){

    return(
        <ul className="flex gap-6 shadow-lg p-4 rounded-3xl">
            {props.data.map((label,i)=>{
                return <li className="text-slate-600 transition duration-300 delay-75 cursor-pointer border-transparent border-2 p-2 rounded-3xl border-solid hover:border-green font-semibold" key={i}>{label}</li>
            })}
        </ul>
    )
}