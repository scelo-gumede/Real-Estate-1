"use client"
import { Autocomplete, Button, TextField } from "@mui/material";


const option = ["1 year","2 years","3 years","4 years"]

export default function LoanCalcutator(){


    return(
        <div className=" shadow-lg my-10 p-5 space-y-5">
            <p className="text-xl font-bold text-grey">Loan Calculator</p>
            <div className="h-[3px]  bg-green w-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <TextField sx={{width:200}} variant="outlined" label="Total Amount"  />

                <div className="flex gap-5">
                    <TextField sx={{width:200}} variant="outlined" label="Down payment" />
                    <p className="p-2 font-bold flex items-center justify-center rounded-md border border-solid border-slate-400">20%</p>
                </div>

                <TextField sx={{width:200}} variant="outlined" label="Interest Rate"             type="number" />

                <Autocomplete
                        
                        disablePortal
                        sx={{width:200}}
                        options={option}
                        renderInput={(params) => <TextField placeholder='Select Amortization Period' {...params} />}
                        />

                <TextField sx={{width:200}} label="Property Tax" variant="outlined" />
                 <TextField sx={{width:200}} label="Home Insurance" variant="outlined" />
             </div>

             <div className=" flex gap-4 items-center">
             <button className="text-white bg-green font-bold text-center px-5 rounded-md py-3 cursor-pointer ">Calculate Now</button>

             <p>Your estimated monthly payment:</p>
             </div>
        </div>
    )
}