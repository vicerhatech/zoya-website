// import WhyZoya from "../assets/images/why-zoya.png"
import HiddenCost from "../assets/images/hidden-cost.png";
import Procurement from "../assets/images/procurement-picture.jpeg";



const Home = () => {
    return (
        <>

            <div className="flex flex-col sm:flex-row justify-around  pt-32 px-6 dark:bg-black">
                <div className=" py-20 ">

                    <div className="intro">
                        <p className="text-purple-800 font-extrabold text-5xl w-fit ">Zoya Procurement, </p>
                        <p className="text-purple-800 font-extrabold text-5xl w-fit ">Made Simple</p>
                    </div>


                    <div className="intro-text py-6">
                        <p className="text-2xl text-gray-700 dark:text-white">From trucks of sand to bags of grain, compare suppliers, </p>
                        <p className="text-2xl text-gray-700 dark:text-white">get real prices, and order in bulk. All on Zoya.</p>
                    </div>

                    <div>
                        <button className="rounded-lg bg-purple-800 px-4 py-3 text-lg font-medium text-white hover:bg-purple-900 transition cursor-pointer">
                            Get Started  ➔
                        </button>
                    </div>
                </div>

                <div>
                    <img src="/images/why-zoya.PNG" alt="Intro Text" className="why-image rounded-xl transform transition-transform duration-300 ease-out hover:scale-105" />
                </div>


            </div>

            <div className="flex flex-col-reverse sm:flex-row pt-15 sm:pt-32 px-5 sm:px-20 dark:bg-black">
                <div className=" py-10 sm:py-0">
                    <img src={HiddenCost} alt="Hidden Cost" className="hidden-cost rounded-2xl transform transition-transform duration-300 ease-out hover:scale-105"/>
                </div>

                <div className="my-auto text-justify sm:text-justify">
                    <h2 className="text-purple-800 font-extrabold text-3xl py-4 px-1 sm:px-10">The Problem</h2>
                    <p className=" text-gray-700 px-1 sm:px-10">Buying in bulk is harder than it should be. Contractors, traders, and businesses often overpay because prices are hidden, middlemen add extra margins, and supplier choices are limited. Sourcing takes time, calls, and guesswork.</p>
                </div>
            </div>

            <div className="bg-purple-600">
                <div>
                   <img src={Procurement} alt="Procurement info" /> 
                </div>

                <div>

                </div>
            </div>

        </>
    )

};

export default Home