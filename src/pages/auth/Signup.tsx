import { useState } from "react"
import { Link } from "react-router-dom";
import logo from "../../assets/images/purple-logo.png"
import logo2 from "../../assets/images/white-log.png"
import { FaFacebookF, FaApple } from "react-icons/fa";
import GoogleIcon from "../../components/other/google-icon";



type UserType = "buyer" | "supplier"

interface BuyerData {
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAddress: string
    state: string
    country: string
    deliveryAddress: string
    password: string
    confirmPassword: string
}

interface SupplierData {
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    confirmPassword: string
    streetAddress: string
    state: string
    country: string
    vehicleType: string
    licenseNumber: string
    availability: string
}

export default function SignupPage() {
    const [userType, setUserType] = useState<UserType>("buyer");



    const [buyerData, setBuyerData] = useState<BuyerData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        state: "",
        country: "",
        deliveryAddress: "",
        password: "",
        confirmPassword: "",

    })

    const [supplierData, setSupplierData] = useState<SupplierData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        state: "",
        country: "",
        password: "",
        confirmPassword: "",
        vehicleType: "",
        licenseNumber: "",
        availability: "",
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

            <div className=" flex flex-col-reverse lg:flex-row mx-3 sm:mx-10 lg:mx-40 lg:justify-between lg:rounded-br-none sm:rounded-br-3xl rounded-b-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl">

                <form onSubmit={handleSubmit} className=" px-5 sm:px-10 w-full h-full shadow-2xl bg-white lg:rounded-br-none rounded-b-3xl sm:rounded-br-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl ">

                    <div className="pt-8">
                        <h2 className="font-bold text-3xl text-center">Create Account</h2>
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
                            className={`sm:px-15 px-6 text-xl font-bold rounded-2xl transition
                            ${userType === "supplier"
                                    ? "bg-purple-800 text-white"
                                    : "bg-white text-purple-800 border-3 border-purple-800"
                                }
    `}
                        >
                            Supplier
                        </button>
                    </div>


                    {/* Shared Fields */}
                    <div className="flex gap-2 sm:gap-20 flex-col sm:flex-row ">

                        <div className="flex flex-col">
                            <label htmlFor="firstname" className="font-bold text-xl sm:text-lg text-purple-900">First Name <span className="text-red-600">*</span></label>
                            <input type="text" name="firstName" placeholder="First Name" className="border w-full sm:w-60 border-black outline-purple-800 sm:text-base text-lg rounded-xl my-1 px-2 h-10 font-bold" required
                                value={userType === "buyer" ? buyerData.firstName : supplierData.firstName}
                                onChange={userType === "buyer" ? handleBuyerChange : handleSupplierChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="lastname" className="font-bold text-xl sm:text-lg text-purple-900">Last Name <span className="text-red-600">*</span></label>
                            <input type="text" name="lastName" placeholder="Last Name" className="border w-full sm:w-60 border-black outline-purple-800 sm:text-base text-lg rounded-xl mt-1 px-2 h-10 font-bold" required
                                value={userType === "buyer" ? buyerData.lastName : supplierData.lastName}
                                onChange={userType === "buyer" ? handleBuyerChange : handleSupplierChange}
                            />
                        </div>

                    </div>


                    <div className="py-3 flex gap-3 sm:gap-20 flex-col sm:flex-row">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-bold text-xl sm:text-lg text-purple-900">Email <span className="text-red-600">*</span></label>
                            <input type="email" name="email" placeholder="Email" className="border w-full sm:w-60 border-black outline-purple-800 rounded-xl sm:text-base text-lg mt-1 px-2 h-10 font-bold" required
                                value={userType === "buyer" ? buyerData.email : supplierData.email}
                                onChange={userType === "buyer" ? handleBuyerChange : handleSupplierChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="font-bold text-xl sm:text-lg text-purple-900">Phone Number <span className="text-red-600">*</span></label>
                            <input type="tel" name="phone" placeholder="Phone Number" className="border w-full sm:w-60 border-black outline-purple-800 rounded-xl mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                                value={userType === "buyer" ? buyerData.phone : supplierData.phone}
                                onChange={userType === "buyer" ? handleBuyerChange : handleSupplierChange}
                            />
                        </div>

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="streetaddress" className="font-bold text-xl sm:text-lg text-purple-900">Street Address <span className="text-red-600">*</span></label>
                        <input type="text" name="streetAddress" placeholder="Street Address" className="border  w-full border-black outline-purple-800 rounded-xl mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                            value={userType === "buyer" ? buyerData.streetAddress : supplierData.streetAddress}
                            onChange={userType === "buyer" ? handleBuyerChange : handleSupplierChange}
                        />
                    </div>

                    <div className="py-3 flex gap-3 sm:gap-20 flex-col sm:flex-row">
                        <div className="flex flex-col">
                            <label htmlFor="state" className="font-bold text-xl sm:text-lg text-purple-900">State <span className="text-red-600">*</span></label>
                            <input type="text" name="state" placeholder="State" className="border w-full sm:w-60  border-black outline-purple-800 rounded-xl mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                                value={userType === "buyer" ? buyerData.state : supplierData.state}
                                onChange={userType === "buyer" ? handleBuyerChange : handleSupplierChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="country" className="font-bold text-xl sm:text-lg text-purple-900">Country <span className="text-red-600">*</span></label>
                            <input type="text" name="country" placeholder="Country" className="border w-full sm:w-60  border-black outline-purple-800 rounded-xl mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                                value={userType === "buyer" ? buyerData.country : supplierData.country}
                                onChange={userType === "buyer" ? handleBuyerChange : handleSupplierChange}
                            />
                        </div>

                    </div>


                    {/* Buyer-only */}
                    {userType === "buyer" && (
                        <>

                            <div className="flex flex-col">
                                <label htmlFor="deliveryaddress" className="sm:flex font-bold text-xl sm:text-lg text-purple-900" >Delivery Address <span className="text-red-600 px-1">*</span> <p className="text-sm sm:pt-3">(Can be changed later)</p></label>
                                <input type="text" name="deliveryAddress" placeholder="Delivery Address" className="border  w-full border-black outline-purple-800 rounded-xl mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                                    value={buyerData.deliveryAddress}
                                    onChange={handleBuyerChange}
                                />
                            </div>

                            <div className="py-3 flex gap-3 sm:gap-20 flex-col sm:flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="font-bold text-xl sm:text-lg  text-purple-900">Password <span className="text-red-600">*</span></label>
                                    <input type="password" name="password" placeholder="Password" className="border   w-full sm:w-60 border-black outline-purple-800 rounded-xl  mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                                        value={buyerData.password}
                                        onChange={handleBuyerChange}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="confirmpassword" className="font-bold text-xl sm:text-lg text-purple-900">Confirm Password <span className="text-red-600">*</span></label>
                                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="border  w-full sm:w-60  border-black outline-purple-800 rounded-xl  mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                                        value={buyerData.confirmPassword}
                                        onChange={handleBuyerChange}
                                    />
                                </div>
                            </div>

                        </>
                    )}

                    {/* Courier-only */}
                    {userType === "supplier" && (
                        <>
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                                <div className="flex flex-col">
                                    <label htmlFor="vehicletype" className="font-bold text-xl sm:text-lg  text-purple-900">Vehicle Type <span className="text-red-600">*</span></label>
                                    <select name="vehicleType" onChange={handleSupplierChange} className="border rounded-xl px-2 h-10 font-bold border-black outline-purple-800 my-1 sm:text-base text-lg" required>
                                        <option value="" disabled selected hidden>Choose Type</option>
                                        <option value="bike" className="text-sm sm:text-lg">Bike</option>
                                        <option value="car" className="text-sm sm:text-lg">Car</option>
                                        <option value="van" className="text-sm sm:text-lg">Van</option>
                                        <option value="truck" className="text-sm sm:text-lg">Truck</option>
                                    </select>
                                </div>



                                <div className="flex flex-col">
                                    <label htmlFor="licensenumber" className="font-bold text-xl sm:text-lg text-purple-900">License Number <span className="text-red-600">*</span></label>
                                    <input type="text" name="licenseNumber" placeholder="License Number" className="border w-full sm:w-40 border-black outline-purple-800 rounded-xl sm:text-base text-lg px-2 h-10 my-1 font-bold" required
                                        value={supplierData.licenseNumber}
                                        onChange={handleSupplierChange}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="availability" className="font-bold text-xl sm:text-lg text-purple-900">Availability <span className="text-red-600">*</span></label>

                                    <select name="availability" onChange={handleSupplierChange} className="border rounded-xl px-2 h-10 mt-1 font-bold border-black outline-purple-800 sm:text-base text-lg" required>
                                        <option value="" disabled selected>Choose Availability</option>
                                        <option value="full-time" className="text-sm sm:text-lg">Full Time</option>
                                        <option value="part-time" className="text-sm sm:text-lg">Part Time</option>
                                    </select>
                                </div>
                            </div>





                            <div className="py-3 flex gap-3 sm:gap-20 flex-col sm:flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="font-bold text-xl sm:text-lg  text-purple-900">Password <span className="text-red-600">*</span></label>
                                    <input type="password" name="password" placeholder="Password" className="border   w-full sm:w-60 border-black outline-purple-800 rounded-xl  mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                                        value={buyerData.password}
                                        onChange={handleSupplierChange}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="confirmpassword" className="font-bold text-xl sm:text-lg text-purple-900">Confirm Password <span className="text-red-600">*</span></label>
                                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="border  w-full sm:w-60  border-black outline-purple-800 rounded-xl  mt-1 sm:text-base text-lg px-2 h-10 font-bold" required
                                        value={buyerData.confirmPassword}
                                        onChange={handleSupplierChange}
                                    />
                                </div>
                            </div>


                        </>
                    )}

                    <div className="pt-2">
                        <div className="flex gap-2">
                            <input type="checkbox" name="remember" id="remember" className="sm:w-5 sm:h-5 w-8 h-8" required /> <p className="text-lg">I agree to the <Link to="/terms" className="text-orange-600">Terms and Conditions</Link>  and <Link to="/policy" className="text-orange-600">Privacy Policy</Link></p>
                        </div>
                    </div>

                    <div className="flex justify-center my-7">
                        <button type="submit" className="text-white rounded-lg px-5 py-2 w-1/2 text-xl hover:bg-purple-900 bg-purple-800 font-bold cursor-pointer">Sign Up</button>
                    </div>


                </form>

                <div className="pt-15 pb-8 lg:py-30 bg-purple-800 px-4 lg:px-16 lg:inline lg:w-full lg:rounded-r-3xl lg:rounded-tl-none rounded-t-3xl">
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

                    <div className="pt-5 text-center">
                        <div>
                            <h2 className="text-white tracking-wide">Fill the form to Create an Account</h2>
                        </div>
                        <div className="flex mt-2 justify-center">
                            <span className="my-auto"><hr className="w-25 mx-2" /></span> <p className="font-bold text-white">OR</p> <span className="my-auto"><hr className="w-28 mx-2" /></span>
                        </div>

                        <div className="flex flex-col justify-center mt-2 mx-10 sm:mx-55  lg:mx-0">
                            <button type="submit" className="flex gap-3 px-5 py-2 rounded-lg bg-white mt-1 sm:mt-3 mb-2 hover:bg-black hover:text-white font-bold cursor-pointer"><span><GoogleIcon className="w-5 h-5" />
                            </span>Continue with Google</button>

                            <button type="submit" className="bg-black px-5 py-2 my-2 flex gap-3 text-white font-bold rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"><span><FaApple className="w-6 h-6 text-white dark:text-white " /></span> Continue with Apple</button>

                            <button type="submit" className="bg-white px-4 py-2 my-2 flex gap-3 text-black font-bold rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white"><span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600"><FaFacebookF className="w-4 h-4 text-white" /></span>Continue with Facebook</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}
