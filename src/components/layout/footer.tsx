import { FaXTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6";
import logo from "../../assets/images/purple-logo.png"
import logo2 from "../../assets/images/white-log.png"



const Footer = () => {
    return (
        <>
            <footer className="bg-purple-800 w-full h-full sm:h-72 py-12 px-10 sm:px-40">
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-48 mb-5 ">
                    <div className="flex flex-col">

                        <div className="flex">
                            <a href="#" className="bg-white rounded-full py-2 "><img src={logo} alt="Company logo" className="h-5 px-2 cursor-pointer dark:hidden" /></a>
                            <a href="#" className="bg-black rounded-full py-2"><img src={logo2} alt="Company logo" className="h-5 px-2 cursor-pointer dark:border-white hidden dark:flex" /></a>

                            <a href="#"><span className=" px-2 py-10 text-lg font-bold text-white dark:text-black cursor-pointer">
                                Zoya
                            </span></a>
                        </div>
                        <p className="w-full sm:w-40 pt-2 text-white dark:text-black">Your futuristic hub for supply needs and building materials across Nigeria.</p>
                    </div>

                    <div>
                        <p className="font-bold text-white dark:text-black" >Products</p>
                        <a href="" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>Features</p></a>
                        <a href="" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>Categories</p></a>
                        <a href="" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>FAQ</p></a>
                    </div>

                    <div>
                        <p className="font-bold text-white dark:text-black" >Quick Links</p>
                        <a href="/" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>Home</p></a>
                        <a href="#theProblem" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>Problem</p></a>
                        <a href="#theSolution" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>Solution</p></a>
                        <a href="#howZoyaWorks" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>How it works</p></a>
                    </div>

                    <div>
                        <p className="font-bold text-white dark:text-black" >Legal</p>
                        <a href="" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>Privacy Policy</p></a>
                        <a href="" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>Terms of Service</p></a>
                        <a href="" className="dark:hover:text-white hover:text-black text-white dark:text-black"><p>Cookie Policy</p></a>
                    </div>
                </div>

                <div className="flex flex-row sm:flex-col">
                    <hr className="text-white dark:text-black" />
                </div>

                

                <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 pt-6">
                    <div>
                        <p className="text-white dark:text-black font-bold"><span className="font-extrabold text-white dark:text-black">&copy;</span> 2026 Zoya Procurement. All rights reserved</p>
                    </div>

                    <div className="flex gap-10 sm:gap-4 justify-center ">
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-purple-800"
                            aria-label="Twitter"
                        >
                            <FaXTwitter className="w-8 h-8 sm:w-5 sm:h-5 text-white dark:text-black hover:text-black dark:hover:text-white" />
                        </a>

                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-purple-800"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="w-8 h-8 sm:w-5 sm:h-5 text-white dark:text-black hover:text-black dark:hover:text-white" />
                        </a>

                        <a
                            href="https://www.instagram.com/zoya_procurement/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-white"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-8 h-8 sm:w-5 sm:h-5 text-white dark:text-black hover:text-black dark:hover:text-white" />
                        </a>

                        <a
                            href="https://www.tiktok.com/@zoya_procurement"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-purple-800"
                            aria-label="TikTok"
                        >
                            <FaTiktok className="w-8 h-8 sm:w-5 sm:h-5 text-white dark:text-black hover:text-black dark:hover:text-white" />
                        </a>
                    </div>

                </div>

            </footer>

        </>


    )
};

export default Footer