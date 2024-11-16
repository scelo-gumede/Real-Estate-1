import { TextField } from "@mui/material";



export default function Footer(){

    return (
        <footer className="bg-grey px-5 gap-5 md:px-24 flex flex-col md:flex-row py-10 text-slate-400">

            <div className="flex-1">
                <h3 className="text-white text-2xl font-bold">REALTY</h3>
                <address className="text-slate-300">
                714 W Olympic <br /> Blvd, Los Angeles, <br /> CA 90015, USA.
                </address>
                <p className="">061 012 1251</p>
                <p>contact@realty.com</p>
            </div>

            <div className="flex-1">
            <h3 className="text-white text-2xl font-bold">FOLLOW US</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>

            <div className="flex-1">
            <h3 className="text-white text-2xl font-bold">NAVIGATION</h3>
                <p>Contact Us</p>
                <p>Why Choose Us</p>
                <p>Customer Reviews</p>
                <p>Our Team</p>
                <p>Careers with Realty</p>
                <p>Blog Standard</p>
            </div>

            <div className="flex-1">
            <h3 className="text-white text-2xl font-bold"> GET THE LATEST ON PRICES</h3>
            <p>
            Subscribe to get the latest insider tips, market updates and access to the
            hottest deals as they come on the market.
            </p>

            <TextField variant="outlined"  />
            </div>

        </footer>
    )
}