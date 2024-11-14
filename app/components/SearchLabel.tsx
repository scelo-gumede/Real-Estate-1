

interface SearchLabelProps{
    data:string[]
}

export default function SearchLabel(props:SearchLabelProps){

    return(
        <ul className="flex gap-4">
            {props.data.map((label,i)=>{
                return <li key={i}>{label}</li>
            })}
        </ul>
    )
}