import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const colleagues = [
    AccountBalanceIcon,
    AccountBalanceIcon,
    AccountBalanceIcon,
    AccountBalanceIcon
]



export default function Work2geda(){

    return(
        <section className='py-20 bg-greyWhite'>
            <h2 className="text-3xl text-grey  text-center font-extrabold">Let's Work Together</h2>
            <p className="text-slate-600 text-lg mb-4 text-center">Thousands of luxury home enthusiasts just like you visit our website.</p>

            <div className='grid px-16 grid-cols-2 md:grid-cols-4'>
            {
                colleagues.map((Colleague,i)=>{
                    return <Colleague key={i} />
                })
            }
            </div>
        </section>
    )
}