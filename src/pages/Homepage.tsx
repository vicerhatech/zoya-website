import Procurement from "../assets/images/procurement-picture.jpeg";
import { CheckSquare } from "lucide-react";
import HIW from "../assets/images/how-it-works.png";
import Testimonials from "../components/other/testimonial"
import { MapPin } from "lucide-react";
import { Package } from "lucide-react";
import { Truck } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { LineChart } from "lucide-react";
import { Clock } from "lucide-react";


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

            <div className="dark:bg-black">
                <div className="flex flex-col-reverse sm:flex-row pt-15 sm:pt-32 px-5 sm:px-20 ">
                    <div className=" py-10 sm:py-0">
                        <img src="/images/hidden-cost.PNG" alt="Hidden Cost" className="hidden-cost rounded-2xl transform transition-transform duration-300 ease-out hover:scale-105" />
                    </div>

                    <div className="my-auto text-justify sm:text-justify">
                        <h2 className="text-purple-800 font-extrabold text-3xl py-4 px-1 sm:px-10">The Problem</h2>
                        <p className=" text-gray-700 px-1 sm:px-10 dark:text-white">Buying in bulk is harder than it should be. Contractors, traders, and businesses often overpay because prices are hidden, middlemen add extra margins, and supplier choices are limited. Sourcing takes time, calls, and guesswork.</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:mt-25 py-10 sm:py-15 sm:mx-10 px-5 sm:px-12 justify-between bg-purple-600 shadow-2xl dark:bg-purple-800">
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
                        <img src={Procurement} alt="Procurement Info" className="procurement rounded-2xl transform transition-transform duration-300 ease-out hover:scale-105" />
                    </div>


                </div>

                {/* <div className="flex flex-col-reverse px-5 sm:flex-row justify-around py-25">
                    <div className="py-2">
                        <img src={HIW} alt="How It Works" />
                    </div>

                    <div className="my-auto pb-6 sm:pb-0">
                        <h2 className="text-purple-800 font-extrabold text-3xl pb-3 sm:pb-0 ">How It Works?</h2>
                        <div className="dark:text-white">
                            <p className="pt-2 text-lg"><span className="mr-2 text-purple-900 font-bold dark:text-purple-800">1.</span>Search for what you need; sand, steel, granite, rice, wheat, grains, etc.</p>
                            <p className="pt-2 text-lg"><span className="mr-2 text-purple-900 font-bold dark:text-purple-800">2.</span>Compare suppliers instantly by price, rating, and distance.</p>
                            <p className="pt-2 text-lg"><span className="mr-2 text-purple-900 font-bold dark:text-purple-800">3.</span>Place your order and choose delivery or pickup.</p>
                            <p className="pt-2 text-lg"><span className="mr-2 text-purple-900 font-bold dark:text-purple-800">4.</span>Track fulfillment and delivery to your site or warehouse.</p>
                        </div>
                    </div>
                </div> */}

                <div className="py-15">
                    <div className="flex flex-col text-center">
                        <h2 className="text-purple-800 font-extrabold text-4xl py-3">How Zoya works</h2>
                        <p className=" text-gray-700 dark:text-white text-xl">Get started in minutes and experience seamless procurement</p>
                    </div>

                    <div className="flex justify-center text-center gap-15 pt-10 flex-col sm:flex-row">
                        <div>
                            <div className="rounded-full bg-purple-800 w-20 h-20 mx-auto text-center py-5 text-3xl font-bold text-white"><p>1</p></div>
                            <h2 className="font-bold text-2xl py-1 dark:text-white">Create Account</h2>
                            <p className="text-gray-700 w-60 text-center py-2 dark:text-white mx-auto">Sign up as a buyer or supplier in seconds. Choose your role and complete your profile.</p>
                        </div>

                        <div>
                            <div className="rounded-full bg-orange-600 mx-auto w-20 h-20 text-center py-5 text-3xl font-bold text-white"><p>2</p></div>
                            <h2 className="font-bold text-2xl py-1 dark:text-white">Browse & Order</h2>
                            <p className="text-gray-700 w-60 text-center py-2 dark:text-white mx-auto">Explore categories, compare prices, and place orders with just a few taps.</p>
                        </div>

                        <div>
                            <div className="rounded-full bg-green-600 mx-auto w-20 h-20 text-center py-5 text-3xl font-bold text-white"><p>3</p></div>
                            <h2 className="font-bold text-2xl py-1 dark:text-white">Track & Receive</h2>
                            <p className="text-gray-700 w-60 text-center py-2 dark:text-white mx-auto">Monitor your order in real-time and receive delivery right at your location.</p>
                        </div>
                    </div>

                    <div className="flex justify-center pt-8 pb-4 px-6">
                        <img src={HIW} alt="How It Works" />
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
                        <p className=" text-gray-700 dark:text-white text-xl w-3/4 sm:w-2/5 mx-auto pb-4">We combine cutting-edge technology with reliable logistics to deliver excellence</p>
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row gap-10 sm:gap-40  justify-center pt-6 pb-4 dark:text-white">
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

                        <div className="flex flex-col sm:flex-row gap-10 sm:gap-40  justify-center pt-6 pb-4 dark:text-white">
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


                        <div className="flex flex-col sm:flex-row gap-10 sm:gap-40  justify-center pt-6 pb-4 dark:text-white">
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

                <div className="flex mt-10 sm:mt-25 py-10 sm:py-15 sm:mx-10 px-3 sm:px-12 justify-between shadow-2xl bg-purple-800/30">
                    <div className="bg-purple-800/70 backdrop-blur-xl w-full h-full py-15 px-5 sm:px-20 mx-0 sm:mx-65 rounded-3xl flex flex-col ">
                        <div className="mx-auto">
                            <h2 className="text-white text-3xl font-bold">Ready to transform</h2>
                            <h2 className="text-white text-3xl font-bold">your procurement?</h2>
                        </div>

                        <div className="mx-auto">
                            <p className="py-5 text-center text-gray-800 text-lg font-bold dark:text-black">Join thousands of businesses already using Zoya for their supply needs</p>
                        </div>

                        <div className="flex gap-10 sm:gap-20 justify-center">
                            <button className="rounded-lg bg-purple-800 px-2 sm:px-4 py-3 text-lg font-medium text-white hover:bg-purple-900 dark:hover:bg-black dark:text-black dark:hover:text-white transition dark:bg-white cursor-pointer dark:border-black">
                                Get Started  ➔
                            </button>

                            <button className="rounded-lg border border-purple-800 px-6 sm:px-6 py-3 text-lg font-bold text-purple-800 bg-white hover:bg-purple-900 hover:text-white transition cursor-pointer dark:border-white dark:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black">
                                Log In
                            </button>
                        </div>

                    </div>


                </div>

            </div>








        </>
    )

};

export default Home