import clsx from "clsx"


interface SearchLabelProps{
    data:string,
    index:number,
    setIndexa: (index: string) => void,
    indexa:string
}

    

export default function SearchLabel(props:SearchLabelProps){


    console.log(props.data,props.indexa)
    return(
         <li onClick={()=> props.setIndexa(props.data)}  className={clsx("text-slate-600 transition duration-300 delay-75 cursor-pointer border-transparent border-2 p-2 rounded-3xl border-solid hover:border-green font-semibold",{
            " border-green bg-green text-white ":props.indexa== props.data
         })}>{props.data}</li>
    )
}