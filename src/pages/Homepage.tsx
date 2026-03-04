// import { Link } from "react-router-dom";
import { CheckSquare } from "lucide-react";
import { Check } from "lucide-react";
import Testimonials from "../components/other/testimonial"
import { Calculator } from "lucide-react";
import { TrendingUp, X, Users } from "lucide-react";
import { MapPin } from "lucide-react";
import { Eye } from "lucide-react";
import { PiggyBank } from "lucide-react";
import { Target } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { Award } from "lucide-react";
import { Package } from "lucide-react";
import { Truck } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { LineChart } from "lucide-react";
import { Clock } from "lucide-react";
import ConstructionWork from "../assets/images/construction-site-build-construction-work.jpeg";
import CostEstimate from "../assets/images/cost-estimates.jpg";
import BuildingPlans from "../assets/images/building-plans.png"
import SavePurpose from "../assets/images/save-with-purpose.jpeg";
import GooglePlay from "../assets/images/google-play-store.png";
import AppleStore from "../assets/images/apple-store.png";


const Home = () => {
    return (
        <>

            <section className=" flex flex-col sm:flex-col lg:flex-row lg:justify-normal justify-between lg:pt-32 pt-18 px-6 lg:px-20 dark:bg-black dark:text-white">
                <div className="pt-10">
                    <div className="sm:text-5xl text-3xl text-center lg:text-left font-extrabold">
                        <p className="lg:w-3/4 w-full">Build With <span className="text-purple-800">Confidence</span>,</p>
                        <p>Not Guesswork</p>

                    </div>

                    <div className="lg:w-3/4 w-full lg:text-left text-justify text-xl py-5 text-black lg:text-base dark:text-white">
                        <p>Plan your construction project step-by-step with accurate cost estimates, transparent material prices, and trusted local suppliers. <span className="inline lg:block">Build your dream home the smart way</span> </p>

                    </div>

                    {/* <div className="py-3">
                        <Link to="/signup" className="rounded-lg bg-purple-800 px-4 py-3 text-lg font-medium text-white hover:bg-purple-900 transition cursor-pointer">
                            Get Started  ➔
                        </Link>
                    </div> */}

                    <div className="flex gap-0 pb-10 sm:pb-0 items-center sm:gap-20 animate-fade-up animate-infinite animate-duration-5000 sm:w-120 lg:mx-0 sm:h-50 sm:mx-auto sm:flex-row flex-col ">
                        <a href="">
                            <img src={GooglePlay} alt="Google play store" className="transform transition-transform duration-300 ease-out hover:scale-112 scale-107" />
                        </a>

                        <a href="https://apps.apple.com/app/id6759052187" className="disable">
                            <img src={AppleStore} alt="Apple Store" className="transform transition-transform duration-300 ease-out hover:scale-105" />
                        </a>
                    </div>
                </div>

                <div className="animate-bounce-fade-in animate-delay-150 sm:px-10 lg:px-0">
                    <div className=" lg:w-106 lg:h-95 sm:w-170 sm:h-100 w-full h-full bg-orange-500 orange-box absolute z-1 right- rotate-3 rounded-2xl"></div>
                    <img src={BuildingPlans} alt="building plan" className=" lg:w-155 lg:h-95 sm:w-2xl h-95 building-plan relative z-30 rounded-2xl" />
                </div>
            </section>

            <section className="bg-purple-50 py-10 sm:pt-18 sm:pb-18 pt-13 pb-13 sm:px-12 px-6 dark:bg-black" id="theProblem">
                <div>
                    <h2 className="text-3xl font-bold text-center w-full dark:text-white ">Why Most Building Projects Fail in Nigeria</h2>
                    <p className="text-gray-800 text-center pt-3 pb-15 text-lg dark:text-white">Without proper planning, many Nigerians start building only to stop halfway when funds run out <span className="inline lg:block">or costs spiral out of control.</span></p>
                </div>

                <div className="flex gap-10 justify-center timeline-view animate-slide-in-left animate-range-entry flex-col sm:flex-row items-center">
                    <div className="bg-white border-l-4 border-red-500 rounded-xl p-4 shadow-md w-70">
                        <div className="w-8 h-8 bg-red-100 text-red-600 flex items-center justify-center rounded-lg mb-2 font-bold">
                            <X className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-xl">Uncertain Costs</h4>
                        <p className="text-base text-gray-800 mt-1">
                            People start building without knowing the full picture,
                            leading to abandoned projects when money runs out.
                        </p>
                    </div>

                    <div className="bg-white border-l-4 border-yellow-600 rounded-xl p-4 shadow-md w-70">
                        <div className="w-8 h-8 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-lg mb-2 font-bold">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-xl">Fluctuating Prices</h4>
                        <p className="text-base text-gray-800 mt-1">
                            Material prices change daily and misinformation makes it hard to budget accurately.
                        </p>
                    </div>


                    <div className="bg-white border-l-4 border-blue-600 rounded-xl p-4 shadow-md w-70">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-2 font-bold">
                            <Users className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-xl">Trust Issues</h4>
                        <p className="text-base text-gray-800 mt-1">
                            Suppliers can't always be trusted, and fraud is common in the construction industry.
                        </p>
                    </div>
                </div>

                <div className="text-center pt-10">
                    <h3 className="font-bold text-xl dark:text-white">Zoya was built to change that story.</h3>
                    <p className="py-3 text-lg dark:text-white">With the right information, planning tools, and trusted suppliers, owning a home is possible <span className="inline lg:block dark:text-white">not just a dream.</span> </p>
                </div>
            </section>

            <section className="flex px-5 sm:px-20 py-5 lg:flex-row sm:flex-col flex-col lg:gap-40 sm:gap-4 gap-4 dark:bg-black dark:text-white">
                <div className="flex mx-auto">
                    <img src={CostEstimate} alt="Cost-estimate" className="lg:w-130 lg:h-120 rounded-2xl transform transition-transform duration-300 ease-out hover:scale-105" />
                </div>

                <div>
                    <div className="w-10 h-10 mt-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-purple-800" />
                    </div>
                    <h2 className="font-bold text-3xl lg:text-left sm:text-center lg:w-120 lg:pb-5 sm:w-full sm:pb-2 pb-5">Clear Cost Estimates Before You Spend a Naira</h2>
                    <p className="text-gray-800 lg:text-left lg:text-lg sm:text-center sm:text-xl dark:text-white">One of the biggest reasons projects fail is uncertainty around cost.</p>
                    <p className="text-gray-800 lg:pb-5 lg:text-left lg:text-lg sm:text-center sm:text-xl dark:text-white">People start building without knowing the full picture.</p>
                    <div className="flex flex-col gap-3 lg:pt-0 sm:pt-5 pt-5">
                        <p className="flex lg:text-lg sm:text-xl">
                            <span className="hover:scale-110 pr-3 pt-1"><div className="lg:w-5 lg:h-5 sm:w-7 sm:h-7 rounded-full bg-purple-800 flex items-center justify-center">
                                <Check className="lg:w-4 lg:h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                            </div></span>Estimate total project cost upfront with detailed breakdowns</p>

                        <p className="flex lg:text-lg sm:text-xl">
                            <span className="hover:scale-110 pr-3 pt-1"><div className="lg:w-5 lg:h-5 sm:w-7 sm:h-7 rounded-full bg-purple-800 flex items-center justify-center">
                                <Check className="lg:w-4 lg:h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                            </div></span>Understand what you can realistically afford</p>
                        <p className="flex lg:text-lg sm:text-xl">
                            <span className="hover:scale-110 pr-3 pt-1"><div className="lg:w-5 lg:h-5 sm:w-7 sm:h-7 rounded-full bg-purple-800 flex items-center justify-center">
                                <Check className="lg:w-4 lg:h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                            </div></span>Decide when to start and when to save more</p>
                        <p className="flex lg:text-lg sm:text-xl">
                            <span className="hover:scale-110 pr-3 pt-1"><div className="lg:w-5 lg:h-5 sm:w-7 sm:h-7 rounded-full bg-purple-800 flex items-center justify-center">
                                <Check className="lg:w-4 lg:h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                            </div></span>Avoid abandoned projects caused by poor planning</p>
                    </div>

                    <h3 className="font-bold lg:text-lg pt-8 sm:pt-5 sm:w-full sm:text-xl">When people know the numbers, fear reduces and confidence grows.</h3>
                </div>
            </section>

            <section className="bg-purple-50 lg:py-10 lg:pt-20 lg:pb-12 px-5 flex-col sm:px-20 flex lg:flex-row sm:flex-col lg:gap-50 sm:gap-4 sm:pt-5 pt-10 dark:bg-black">
                <div>
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-purple-800" />
                    </div>
                    <h2 className="font-bold text-3xl lg:text-left sm:text-center lg:w-120 lg:pb-5 sm:w-full sm:pb-2 pb-5 dark:text-white">Real Material Prices, Transparent and Easy to Compare</h2>
                    <p className="text-gray-800 lg:text-lg lg:text-left sm:text-center sm:text-xl dark:text-white">Material prices in Nigeria fluctuate, and misinformation is common.</p>
                    <p className="text-gray-800 lg:pb-5 lg:text-lg lg:text-left sm:text-center sm:text-xl dark:text-white">Zoya brings price transparency into construction planning.</p>

                    <div className="bg-purple-100 sm:w-120 w-85 h-fit p-5 sm:mx-auto lg:mx-0 lg:mt-0 sm:mt-5 mt-5 rounded-xl shadow-xl">
                        <div className="flex sm:justify-between justify-around pb-4">
                            <p className="font-semibold">Cement (50kg bag)</p>
                            <p className="text-purple-800 font-bold">₦5,200 - ₦5,800</p>
                        </div>

                        <div className="flex sm:justify-between justify-around pb-4">
                            <p className="font-semibold">6-inch Blocks (per piece)</p>
                            <p className="text-purple-800 font-bold">₦380 - ₦450</p>
                        </div>

                        <div className="flex sm:justify-between justify-around">
                            <p className="font-semibold">Iron Rods (12mm)</p>
                            <p className="text-purple-800 font-bold">₦7,500 - ₦8,200</p>
                        </div>
                    </div>

                    <div className="pt-7 flex flex-col gap-3 lg:mx-0 sm:mx-35">
                        <p className="flex dark:text-white">
                            <span className="hover:scale-110 pr-2 pt-1"><div className="w-5 h-5 rounded-full bg-green-700 flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" strokeWidth={5} />
                            </div></span>Compare materials before making decisions</p>
                        <p className="flex dark:text-white">
                            <span className="hover:scale-110 pr-2 pt-1"><div className="w-5 h-5 rounded-full bg-green-700 flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" strokeWidth={5} />
                            </div></span>Plan purchases based on real market data</p>

                        <p className="flex dark:text-white">
                            <span className="hover:scale-110 pr-2 pt-1"><div className="w-5 h-5 rounded-full bg-green-700 flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" strokeWidth={5} />
                            </div></span>Avoid being taken advantage of by suppliers</p>
                    </div>

                </div>

                <div className="mb-5 sm:mb-0 ">
                    <img src={ConstructionWork} alt="Construction work" className="lg:w-120 lg:h-115  sm:mt-5 my-10 sm:mb-15 lg:mb-0 lg:mt-0 rounded-2xl transform transition-transform duration-300 ease-out hover:scale-105" />
                </div>

            </section>

            <section className="bg-blue-800 sm:px-10 px-2 sm:py-18 py-10 timeline-view animate-blurred-fade-in animate-range-entry" id="theSolution">
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold">Understand Each Build Phase, One Step at a Time</h2>
                    <p className="sm:pt-2 pt-4">Many people don't fail because they lack money, they fail because they don't understand the process.</p>
                    <p>Zoya breaks construction into clear, manageable phases.</p>
                </div>

                <div className="flex gap-10 sm:flex-row flex-col justify-center pt-13 pb-9 items-center">
                    <div className="bg-blue-900 border-t-6 border-orange-600 rounded-xl p-4 shadow-md w-68">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-orange-500 font-semibold">Phase 1</span>
                            <span className="text-white text-xl font-bold">25%</span>
                        </div>
                        <h3 className="text-white text-lg font-semibold">Foundation</h3>
                        <p className="text-sm text-slate-400 mb-4 mt-1">
                            Excavation, foundation laying, and ground preparation
                        </p>
                        <div className="w-full h-2 bg-slate-600 rounded-full">
                            <div className="h-2 bg-orange-500 rounded-full w-[25%]"></div>
                        </div>
                    </div>

                    <div className="bg-blue-900 border-t-6 border-orange-600 rounded-xl p-4 shadow-md w-68">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-orange-500 font-semibold">Phase 2</span>
                            <span className="text-white text-xl font-bold">30%</span>
                        </div>
                        <h3 className="text-white text-lg font-semibold">Structure</h3>
                        <p className="text-sm text-slate-400 mb-4 mt-1">
                            Block work, columns, beams, and roofing
                        </p>
                        <div className="w-full h-2 bg-slate-600 rounded-full">
                            <div className="h-2 bg-orange-500 rounded-full w-[30%]"></div>
                        </div>
                    </div>

                    <div className="bg-blue-900 border-t-6 border-orange-600 rounded-xl p-4 shadow-md w-68">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-orange-500 font-semibold">Phase 3</span>
                            <span className="text-white text-xl font-bold">20%</span>
                        </div>
                        <h3 className="text-white text-lg font-semibold">Installations</h3>
                        <p className="text-sm text-slate-400 mb-4 mt-1">
                            Plumbing, electrical, and door/window fittings
                        </p>
                        <div className="w-full h-2 bg-slate-600 rounded-full">
                            <div className="h-2 bg-orange-500 rounded-full w-[20%]"></div>
                        </div>
                    </div>

                    <div className="bg-blue-900 border-t-6 border-orange-600 rounded-xl p-4 shadow-md w-68">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-orange-500 font-semibold">Phase 4</span>
                            <span className="text-white text-xl font-bold">25%</span>
                        </div>
                        <h3 className="text-white text-lg font-semibold">Finishing</h3>
                        <p className="text-sm text-slate-400 mb-4 mt-1">
                            Plastering, painting, tiling, and final touches
                        </p>
                        <div className="w-full h-2 bg-slate-600 rounded-full">
                            <div className="h-2 bg-orange-500 rounded-full w-[25%]"></div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-white">
                    <p>This phased approach removes confusion and replaces it with structure, helping you build steadily instead of rushing blindly.</p>
                </div>

            </section>


            <section className="flex px-5 flex-col sm:px-20 lg:py-13 lg:gap-40 sm:gap-4 lg:flex-row sm:flex-col dark:bg-black">
                <div>
                    <img src={SavePurpose} alt="save with purpose" className="lg:w-130 lg:h-90 rounded-2xl transform transition-transform duration-300 ease-out hover:scale-105 mt-15" />
                </div>

                <div className="sm:pt-10 lg:pt-0">
                    <div className="w-10 h-10 mt-5 rounded-full bg-purple-100 flex items-center justify-center sm:ml-4 lg:ml-0">
                        <PiggyBank className="w-5 h-5 text-purple-800" />
                    </div>
                    <h2 className="font-bold text-3xl lg:text-left sm:text-center lg:w-120 lg:pb-5 sm:w-full sm:pb-2 pb-5 dark:text-white">Save With Purpose and Track Your Progress</h2>
                    <p className="text-gray-800 lg:text-lg lg:text-left sm:text-center sm:text-xl dark:text-white">Zoya isn't just about building, it's about preparing wisely. </p>
                    <p className="text-gray-800 pb-5 lg:text-lg lg:text-left sm:text-center sm:text-xl dark:text-white">Instead of saving aimlessly, save with direction.</p>
                    <div className="bg-orange-900 py-5 px-5 rounded-2xl">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-600 font-semibold">Foundation Phase Goal</span>
                            <span className="text-orange-500 text-lg font-bold">₦2,500,000</span>
                        </div>

                        <div className="w-full h-2 bg-white rounded-full">
                            <div className="h-2 bg-orange-500 rounded-full w-[65%]"></div>
                            <p className="text-sm text-slate-600">₦1,625,000 saved (65%)</p>
                        </div>

                        <div className="pt-12 flex gap-20">
                            <div>
                                <h3>Monthly Target</h3>
                                <h2 className="text-xl font-semibold">₦250,000</h2>
                            </div>

                            <div className="">
                                <h3>Months to Goal</h3>
                                <h2 className="text-xl font-semibold">3.5 months</h2>
                            </div>
                        </div>

                    </div>
                    <div className="space-y-4 pt-8">
                        <div className="flex items-center gap-3 dark:text-white">
                            <Target className="w-5 h-5 text-orange-500" />
                            <span>Set realistic financial goals for your project</span>
                        </div>

                        <div className="flex items-center gap-3 dark:text-white">
                            <BarChart3 className="w-5 h-5 text-orange-500" />
                            <span>Track progress toward each phase</span>
                        </div>

                        <div className="flex items-center gap-3 dark:text-white">
                            <Award className="w-5 h-5 text-orange-500" />
                            <span>Stay motivated as you watch your plan come together</span>
                        </div>
                    </div>
                </div>
            </section>



            <div className="flex flex-col lg:flex-row sm:flex-col justify-around  pt-12 px-6 dark:bg-black sm:text-center lg:text-left ">
                <div className=" lg:py-20 sm:py-5 ">

                    <div className="intro">
                        <p className="text-purple-800 font-extrabold text-5xl w-fit sm:mx-auto lg:mx-0">Zoya, Procurement <span className="lg:hidden inline-block sm:inline" >Made Simple</span> </p>
                        <p className="lg:inline-block hidden sm:hidden text-purple-800 font-extrabold text-5xl w-fit sm:mx-auto lg:mx-0 ">Made Simple</p>
                    </div>

                    <div className="intro-text py-6">
                        <p className="text-2xl text-gray-800 dark:text-white">From truckloads of sand to bags of cement, <span className="lg:hidden inline sm:inline" >compare suppliers, see real prices, and order in bulk; All on Zoya</span></p>
                        <p className="lg:inline-block sm:hidden hidden text-2xl text-gray-800 dark:text-white ">compare suppliers, see real prices, and order in bulk;</p>
                        <p className="lg:block sm:hidden hidden text-2xl text-gray-800 dark:text-white">All on Zoya</p>
                    </div>

                    {/* <div>
                        <Link to="/signup" className="rounded-lg bg-purple-800 px-4 py-3 text-lg font-medium text-white hover:bg-purple-900 transition cursor-pointer">
                            Get Started  ➔
                        </Link>
                    </div> */}
                </div>

                <div className="sm:justify-center sm:flex pb-15">
                    <img src="/images/why-zoya.PNG" alt="Intro Text" className="w-full h-full lg:w-125 lg:h-112.5 rounded-xl transform transition-transform duration-300 ease-out hover:scale-105" />
                </div>
            </div>

            <div className="dark:bg-black" >
                <div className="flex flex-col sm:flex-row py-10 sm:py-15 sm:mx-10 px-5 lg:px-12 sm:px-5 justify-between bg-purple-600 shadow-2xl dark:bg-purple-800 timeline-view animate-slide-in-left animate-range-entry">
                    <div>
                        <h2 className="text-purple-800 font-extrabold text-3xl py-3 dark:text-white">The Zoya Solution</h2>
                        <div>
                            <p className="py-2 flex gap-3 dark:font-bold"><span><CheckSquare className="w-5 h-5 text-purple-800 dark:text-white" /></span>See live prices for building materials and agricultural produce.</p>
                            <p className="py-2 flex gap-3 dark:font-bold"><span><CheckSquare className="w-5 h-5 text-purple-800 dark:text-white" /></span>Compare suppliers by price and proximity.</p>
                            <p className="py-2 flex gap-3 dark:font-bold"><span><CheckSquare className="w-5 h-5 text-purple-800 dark:text-white" /></span>Order in bulk with confidence, granite, rice, steel, and more.</p>
                            <p className="py-2 flex gap-3 dark:font-bold"><span><CheckSquare className="w-5 h-5 text-purple-800 dark:text-white" /></span>Save time, cut hidden costs, and keep full control of procurement.</p>
                        </div>

                    </div>

                    <div className="py-10">
                        <img src="/images/procurement-picture.JPEG" alt="Procurement Info" className="procurement rounded-2xl transform transition-transform duration-300 ease-out hover:scale-105" />
                    </div>


                </div>


                <div className="py-15" id="howZoyaWorks">
                    <div className="flex flex-col text-center">
                        <h2 className="text-purple-800 font-extrabold text-4xl py-3">How Zoya works</h2>
                        <p className=" text-gray-800 dark:text-white text-xl">Get started in minutes and experience seamless procurement</p>
                    </div>

                    <div className="flex justify-center text-center gap-15 pt-10 flex-col lg:flex-row">
                        <div>
                            <div className="rounded-full bg-purple-800 w-20 h-20 mx-auto text-center py-5 text-3xl font-bold text-white"><p>1</p></div>
                            <h2 className="font-bold text-2xl py-1 dark:text-white">Create Account</h2>
                            <p className="text-gray-800 w-60 text-center py-2 dark:text-white mx-auto">Sign up as a buyer or supplier in seconds. Choose your role and complete your profile.</p>
                        </div>

                        <div>
                            <div className="rounded-full bg-orange-600 mx-auto w-20 h-20 text-center py-5 text-3xl font-bold text-white"><p>2</p></div>
                            <h2 className="font-bold text-2xl py-1 dark:text-white">Browse & Order</h2>
                            <p className="text-gray-800 w-60 text-center py-2 dark:text-white mx-auto">Explore categories, compare prices, and place orders with just a few taps.</p>
                        </div>

                        <div>
                            <div className="rounded-full bg-green-600 mx-auto w-20 h-20 text-center py-5 text-3xl font-bold text-white"><p>3</p></div>
                            <h2 className="font-bold text-2xl py-1 dark:text-white">Track & Receive</h2>
                            <p className="text-gray-800 w-60 text-center py-2 dark:text-white mx-auto">Monitor your order in real-time and receive delivery right at your location.</p>
                        </div>
                    </div>

                    <div className="flex justify-center pt-8 pb-4 px-6">
                        <img src="/images/how-it-works.png" alt="How It Works" />
                    </div>

                </div>

                <div className="bg-purple-800/30 shadow-2xl mx-5 sm:mx-20 rounded-2xl mb-13 ">
                    <div className="text-center py-10">
                        <h2 className="text-3xl font-extrabold dark:text-white ">Testimonials</h2>
                        <div className="mt-2 mx-auto h-1 w-12 rounded-full bg-purple-800" />
                    </div>
                    <div className="pb-7 dark:text-white">
                        <Testimonials />
                    </div>
                </div>

                <div>
                    <div className="text-center">
                        <h2 className="text-purple-800 font-extrabold text-4xl py-3">Why choose Zoya?</h2>
                        <p className=" text-gray-800 dark:text-white text-xl w-3/4 sm:w-2/5 mx-auto pb-4">We combine cutting-edge technology with reliable logistics to deliver excellence</p>
                    </div>

                    <div className="">
                        <div className="flex flex-col sm:flex-row gap-10 lg:gap-40  justify-center pt-6 pb-4 dark:text-white timeline-view animate-zoom-in animate-range-entry">
                            <div className="border-3 border-gray-400/50 w-80 pt-10 sm:mx-0 mx-auto pb-8 px-5 rounded-3xl transform transition-transform duration-300 ease-out hover:scale-105">
                                <div className="w-13 h-13 rounded-xl bg-purple-800 py-3"><MapPin className="w-7 h-7 text-white mx-auto" /></div>
                                <h3 className="font-bold text-black text-2xl py-7 dark:text-white">Real-Time Tracking</h3>
                                <p>GPS-powered map view lets you track your orders instantly. Know exactly when your materials arrive.</p>
                            </div>

                            <div className="border-3 border-gray-400/50 w-80 sm:mx-0 mx-auto  pt-10 pb-8 px-5 rounded-3xl transform transition-transform duration-300 ease-out hover:scale-105">
                                <div className="w-13 h-13 rounded-xl bg-orange-600 py-3">
                                    <Package className="w-7 h-7 text-white mx-auto" />

                                </div>
                                <h3 className="font-bold text-black text-2xl py-7 dark:text-white">Bulk Orders</h3>
                                <p>Order at scale with competitive pricing. Perfect for construction projects and large businesses.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 lg:gap-40  justify-center pt-6 pb-4 dark:text-white timeline-view animate-zoom-in animate-range-entry">
                            <div className="border-3 border-gray-400/50 sm:mx-0 mx-auto  w-80 pt-10 pb-8 px-5 rounded-3xl transform transition-transform duration-300 ease-out hover:scale-105">
                                <div className="w-13 h-13 rounded-xl bg-green-600 py-3"><Truck className="w-7 h-7 text-white mx-auto" /></div>
                                <h3 className="font-bold text-black text-2xl py-7 dark:text-white">Fast Delivery</h3>
                                <p>Trusted couriers and seamless logistics ensure your materials arrive on time, every time.</p>
                            </div>

                            <div className="border-3 border-gray-400/50 sm:mx-0 mx-auto  w-80 pt-10 pb-8 px-5 rounded-3xl transform transition-transform duration-300 ease-out hover:scale-105">
                                <div className="w-13 h-13 rounded-xl bg-purple-800 py-3">
                                    <ShieldCheck className="w-7 h-7 text-white mx-auto" />
                                </div>
                                <h3 className="font-bold text-black text-2xl py-7 dark:text-white">Secure Payments</h3>
                                <p>Multiple payment options with bank-grade security. Your transactions are always protected.</p>
                            </div>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-10 lg:gap-40  justify-center pt-6 pb-4 dark:text-white timeline-view animate-zoom-in animate-range-entry">
                            <div className="border-3 border-gray-400/50 sm:mx-0 mx-auto  w-80 pt-10 pb-8 px-5 rounded-3xl transform transition-transform duration-300 ease-out hover:scale-105">
                                <div className="w-13 h-13 rounded-xl bg-orange-600 py-3">
                                    <LineChart className="w-7 h-7 text-white mx-auto" />
                                </div>
                                <h3 className="font-bold text-black text-2xl py-7 dark:text-white">Order Analytics</h3>
                                <p>Track spending, analyze patterns, and make smarter procurement decisions with detailed insights.</p>
                            </div>

                            <div className="border-3 border-gray-400/50 sm:mx-0 mx-auto  w-80 pt-10 pb-8 px-5 rounded-3xl transform transition-transform duration-300 ease-out hover:scale-105">
                                <div className="w-13 h-13 rounded-xl bg-green-600 py-3">
                                    <Clock className="w-7 h-7 text-white mx-auto" />
                                </div>
                                <h3 className="font-bold text-black text-2xl py-7 dark:text-white">24/7 Support</h3>
                                <p>Our dedicated team is always available to help with orders, deliveries, and any questions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex mt-10 sm:mt-25 py-10 sm:py-10  px-3 sm:px-12 justify-between shadow-2xl bg-purple-800/30" id="get-started">
                    <div className="backdrop-blur-xl w-full h-full px-5 sm:px-20 mx-0 lg:mx-65 rounded-3xl flex flex-col border-2 pt-8">
                        <div className="text-center">
                            <div className="mx-auto">
                                <h2 className="text-4xl font-bold dark:text-white">Ready to transform your procurement?</h2>
                            </div>
                            <h2 className="font-bold text-2xl sm:w-150 w-full pt-2 text-purple-900 dark:text-purple-700">Start Planning Your Dream Home Today</h2>
                            <p className="pt-5 dark:text-white">Housing challenges in Nigeria are real, but so is the potential for change.</p>
                            <p className="dark:text-white">With clarity, transparency, and steady saving, building a home becomes achievable.</p>
                        </div>


                        <div className="mx-auto">
                            <p className="py-5 text-center text-gray-800 lg:text-lg font-bold sm:text-2xl dark:text-white">Join thousands of businesses already using Zoya for their supply needs</p>
                        </div>

                        <div className="flex gap-10 sm:gap-20 justify-center animate-fade-up animate-infinite animate-duration-5000 mb-5 sm:mb-3">
                            {/* <button className="rounded-lg bg-purple-800 px-2 sm:px-4 py-3 text-lg font-medium text-white hover:bg-purple-900 dark:hover:bg-black dark:text-black dark:hover:text-white transition dark:bg-white cursor-pointer dark:border-black">
                                Get Started  ➔
                            </button> */}

                            {/* <button className="rounded-lg border border-purple-800 px-6 sm:px-6 py-3 text-lg font-bold text-purple-800 bg-white hover:bg-purple-900 hover:text-white transition cursor-pointer dark:border-white dark:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black">
                                Log In
                            </button> */}

                            <a href="">
                                <img src={GooglePlay} alt="Google play store" className="transform transition-transform duration-300 ease-out hover:scale-112 scale-107" />
                            </a>

                            <a href="https://apps.apple.com/app/id6759052187" className="disable">
                                <img src={AppleStore} alt="Apple Store" className="transform transition-transform duration-300 ease-out hover:scale-105" />
                            </a>
                        </div>

                    </div>


                </div>

            </div>




        </>
    )

};

export default Home