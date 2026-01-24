import { useState } from "react"
import logo from "../../assets/images/purple-logo.png"
import logo2 from "../../assets/images/white-log.png"
import { FaFacebookF, FaApple } from "react-icons/fa";
import GoogleIcon from "../../components/other/google-icon";



type UserType = "buyer" | "supplier"

interface BuyerData {
    email: string
    password: string
}

interface SupplierData {
    email: string
    password: string
}

export default function LoginPage() {
    const [userType, setUserType] = useState<UserType>("buyer");



    const [buyerData, setBuyerData] = useState<BuyerData>({

        email: "",
        password: "",

    })

    const [supplierData, setSupplierData] = useState<SupplierData>({
        email: "",
        password: "",
    })

    const handleBuyerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setBuyerData(prev => ({ ...prev, [name]: value }))
    }

    const handleSupplierChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setSupplierData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const payload =
            userType === "buyer"
                ? { userType, ...buyerData }
                : { userType, ...supplierData }

        await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        })
    }

    return (

        <div className="dark:bg-black pt-28 pb-15">

            <div className=" flex flex-col-reverse lg:flex-row mx-3 lg:mx-40 lg:justify-between lg:rounded-br-none rounded-b-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl">

                <form onSubmit={handleSubmit} className=" px-5 lg:px-0 sm:px-20 w-full h-full shadow-2xl bg-white lg:rounded-br-none rounded-b-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl">

                    <div className="pt-8">
                        <h2 className="font-bold text-3xl text-center">Log In</h2>
                        <div className="mt-2 mx-auto h-1 w-12 rounded-full bg-purple-800" />
                    </div>


                    {/* User Type */}
                    <div className="flex justify-center gap-5 sm:gap-8 pt-5 pb-7 sm:pb-5">
                        <button
                            type="button"
                            onClick={() => setUserType("buyer")}
                            className={`sm:px-15 px-6 py-3 text-xl font-bold rounded-2xl transition
                            ${userType === "buyer"
                                    ? "bg-purple-800 text-white"
                                    : "bg-white text-purple-800 border-3 border-purple-800"
                                }
    `}
                        >
                            Buyer
                        </button>

                        <button
                            type="button"
                            onClick={() => setUserType("supplier")}
                            className={`sm:px-15 px-6 py-3 text-xl font-bold rounded-2xl transition
                            ${userType === "supplier"
                                    ? "bg-purple-800 text-white"
                                    : "bg-white text-purple-800 border-3 border-purple-800"
                                }
    `}
                        >
                            Supplier
                        </button>
                    </div>



                    {/* Buyer-only */}
                    {userType === "buyer" && (
                        <div className="sm:px-20">

                            <div className="py-3 gap-20">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="font-bold text-xl sm:text-lg text-purple-900">Email <span className="text-red-600">*</span></label>
                                    <input type="email" name="email" placeholder="Email" className="border w-full lg:w-80 sm:w-96 border-black outline-purple-800 rounded-xl px-2 h-10 mt-1 font-bold" required
                                        value={buyerData.email}
                                        onChange={handleBuyerChange}
                                    />
                                </div>
                            </div>


                            <div className="py-2">
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="font-bold text-xl sm:text-lg text-purple-900">Password <span className="text-red-600">*</span></label>
                                    <input type="password" name="password" placeholder="Password" className="border w-full lg:w-80 sm:w-96 border-black outline-purple-800 rounded-xl px-2 h-10 mt-1 font-bold" required
                                        value={buyerData.password}
                                        onChange={handleBuyerChange}
                                    />
                                </div>

                            </div>

                        </div>
                    )}

                    {/* Courier-only */}
                    {userType === "supplier" && (
                        <>
                            <div className="py-3 gap-20">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="font-bold text-xl sm:text-lg text-purple-900">Email <span className="text-red-600">*</span></label>
                                    <input type="email" name="email" placeholder="Email" className="border w-full sm:w-80 border-black outline-purple-800 rounded-xl px-2 h-10 mt-1 font-bold" required
                                        value={supplierData.email}
                                        onChange={handleSupplierChange}
                                    />
                                </div>
                            </div>


                            <div className="py-2">
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="font-bold text-xl sm:text-lg text-purple-900">Password <span className="text-red-600">*</span></label>
                                    <input type="password" name="password" placeholder="Password" className="border w-full sm:w-80 border-black outline-purple-800 rounded-xl px-2 h-10 mt-1 font-bold" required
                                        value={supplierData.password}
                                        onChange={handleSupplierChange}
                                    />
                                </div>

                            </div>


                        </>
                    )}

                    <div className="pt-2 flex gap-6 justify-between sm:px-20">
                        <div className="flex gap-2">
                            <input type="checkbox" name="remember" id="remember" className="w-5 h-5" required /> <p>Remember Password</p>
                        </div>

                        <div>
                            <a href="/" className="cursor-pointer font-bold hover:text-gray-700">Forgot Password</a>
                        </div>
                    </div>

                    <div className="flex justify-center my-5">
                        <button type="submit" className="text-white rounded-lg px-5 py-2 w-1/2 text-xl hover:bg-purple-900 bg-purple-800 font-bold cursor-pointer">Log In</button>
                    </div>


                </form>

                <div className="py-10 bg-purple-800 lg:inline lg:w-full lg:rounded-r-3xl lg:rounded-tl-none rounded-t-3xl">
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <a href="/" className="signup-right-section bg-white py-2 dark:hidden"><img src={logo} alt="Company logo" className="signup-logo h-5 px-2 cursor-pointer dark:hidden flex" /></a>
                            <a href="/" className="signup-right-section dark:bg-black py-2 hidden dark:flex"><img src={logo2} alt="Company logo" className="signup-logo h-5 px-2 cursor-pointer dark:border-white hidden dark:flex" /></a>
                        </div>
                        <a href="/" className="mx-auto"><span className="text-2xl font-extrabold text-white dark:text-white cursor-pointer tracking-wide sm:tracking-normal">
                            Welcome to Zoya
                        </span></a>
                        <i className="text-center text-sm my-1 text-black font-bold sm:tracking-normal tracking-widest">Fresh Products at your fingertips</i>
                    </div>

                    <div className="pt-3 text-center">
                        <div className="text-center">
                            <h2 className="text-white tracking-wide">Enter your Log in details</h2>
                        </div>
                        <div className="flex mt-2 justify-center">
                            <span className="my-auto"><hr className="w-25 mx-2" /></span> <p className="font-bold text-white">OR</p> <span className="my-auto"><hr className="w-25 mx-2" /></span>
                        </div>

                        <div className="flex flex-col justify-center mt-1 mx-10 sm:mx-40  lg:mx-20">
                            <button type="submit" className=" flex gap-3 px-5 py-2 rounded-lg bg-white mt-1 sm:mt-3 mb-2 hover:bg-black hover:text-white font-bold cursor-pointer justify-center tracking-wide"><span><GoogleIcon className="w-5 h-5" />
                            </span>Continue with Google</button>

                            <button type="submit" className=" bg-black px-5 py-2 mt-2 mb-2 flex gap-3  text-white font-bold rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer justify-center"><span><FaApple className="w-6 h-6 text-white dark:text-white " /></span> Continue with Apple</button>
                            
                            <button type="submit" className="  bg-white px-5 py-2 mt-2 mb-2 flex gap-3 text-black font-bold rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white justify-center tracking-wide"><span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600"><FaFacebookF className="w-4 h-4 text-white" /></span>Continue with Facebook</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}
