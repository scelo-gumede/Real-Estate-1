
import { SvgIconComponent } from '@mui/icons-material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface TrustTileProps{
    title:string,
    text:string,
    icon: SvgIconComponent
}


export default function TrustTile(props:TrustTileProps){

    return (
        <article className='flex bg-white gap-8 p-10 rounded-md border border-opacity-20 border-solid border-grey'>

            <div>
                <props.icon />
            </div>

            <div className='space-y-4 '>
                <h3 className='text-lg font-bold'>{props.title}</h3>
                <p>{props.text}</p>
                <p className='text-slate-400 hover:text-green hover:underline transition duration-300 cursor-pointer font-bold'>Read More <ArrowForwardIcon className='' /></p>
            </div>

        </article>
    )
}