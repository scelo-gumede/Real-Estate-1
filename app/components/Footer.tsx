import { TextField } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';


export default function Footer(){

    return (
        <footer className="bg-grey px-5  md:px-24  py-10 text-slate-400">

        <div className="gap-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">

            <div className="flex-1 space-y-2">
                <h3 className="text-white text-2xl font-bold">REALTY</h3>
                <address className="text-slate-300 flex">
                <span className="mr-4"><LocationOnIcon /></span>
                <span>714 W Olympic <br /> Blvd, Los Angeles, <br /> CA 90015, USA.</span>
                </address>
                <p className=""> <span className="mr-2"><PhoneIcon /></span> 061 012 1251</p>
                <p className="flex"><span className="mr-3"><EmailIcon /></span>  contact@realty.com</p>
            </div>

            <div className="flex-1 space-y-2">
            <h3 className="text-white text-2xl font-bold">FOLLOW US</h3>
                <p><span className="mr-2"><InstagramIcon /></span> Instagram</p>
                <p><span className="mr-2"><FacebookIcon /></span>Facebook</p>
                <p><span className="mr-2"><XIcon /></span>Twitter</p>
            </div>

            <div className="flex-1 space-y-2">
            <h3 className="text-white text-2xl font-bold">NAVIGATION</h3>
                <p>Contact Us</p>
                <p>Why Choose Us</p>
                <p>Customer Reviews</p>
                <p>Our Team</p>
                <p>Careers with Realty</p>
                <p>Blog Standard</p>
            </div>

            <div className="flex-1 space-y-2">
            <h3 className="text-white text-2xl font-bold"> GET THE LATEST ON PRICES</h3>
            <p>
            Subscribe to get the latest insider tips, market updates and access to the
            hottest deals as they come on the market.
            </p>

            <TextField variant="outlined"  />
            </div>

         </div>
            <hr  className="my-4"/>
            <div className="flex flex-col justify-center items-center my-5">
                <p>© Copyright 2024 Realty - Real Estate <br className="md:hidden" /> Elementor WordPress Theme. All Rights Reserved.</p>
                <p>Term of Services Privacy Policy Sitemap</p>
            </div>

        </footer>
    )
}