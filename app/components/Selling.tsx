import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const colleagues = [
    AccountBalanceIcon,
    AccountBalanceIcon,
    AccountBalanceIcon,
    AccountBalanceIcon
]


export default function Selling(){

    return (
        <section className=' py-10 space-y-10 bg-greyWhite'>
            <div className="bg-green flex justify-center  py-10 space-x-5">
            <h2 className="text-3xl text-grey text-center font-extrabold">Are You Selling or Renting Your Property?</h2>
            <p className="text-white bg-grey text-center px-5 rounded-md py-3 cursor-pointer ">Request Your Free Appraisal</p>
            </div>

            <h2 className="text-3xl text-grey  text-center font-extrabold">Let's Work Together</h2>
            <p className="text-slate-600 text-lg mb-4 text-center">Thousands of luxury home enthusiasts just like you visit our website.</p>

            <div className='grid px-16 md:grid-cols-2 lg:grid-cols-4'>
            {
                colleagues.map((Colleague,i)=>{
                    return <Colleague />
                })
            }
            </div>
        </section>
    )
}