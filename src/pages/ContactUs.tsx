import { Helmet } from "react-helmet";
import { Mail, Phone } from "lucide-react";
import { MapPin, FileText, MessageSquare, CheckCircle, Clock, Send } from "lucide-react";



function Contact() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch("https://formspree.io/f/xgolgley", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (res.ok) {
                window.location.href = "/thank-you";
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("An error occurred. Please try again.");
        }
    };
    return (
        <>

            <Helmet>
                <link rel="canonical" href="https://zoyasupply.com/contact" />
            </Helmet>

            <div className=" dark:bg-black">
                <section className="bg-purple-100 sm:w-full h-fit p-5 shadow-xl pt-20 sm:pt-25 pb-15 sm:px-30 dark:bg-purple-800/30 ">
                    <h1 className="sm:text-4xl text-3xl text-center font-bold pt-5 dark:text-white">Get in Touch With <span className="text-purple-800">Zoya</span></h1>
                    <p className="text-gray-800 sm:text-xl lg:w-130 lg:mx-auto sm:mt-3 mt-2 text-center lg:text-base text-xl dark:text-white">Have questions about planning your construction project? Our team is ready to help you build with confidence.</p>
                </section>

                <section className="pt-10 flex items-center lg:gap-10 flex-col sm:flex-row gap-7 justify-center mx-0 lg:mx-0 sm:mx-4 sm:gap-3 dark:bg-black">
                    <div className="w-80 h-fit shadow-2xl rounded-xl p-6 dark:border-white dark:border ">
                        <div className="w-10 h-10 bg-orange-200 flex items-center justify-center rounded-md">
                            <Mail className="w-6 h-6 text-orange-500" />
                        </div>
                        <h2 className="pt-3 pb-2 font-bold lg:text-xl text-2xl dark:text-white">Email Us</h2>
                        <p className="text-gray-800 lg:text-base text-xl dark:text-white">For general inquiries and support:</p>
                        <a href="mailto:support@zoyasupply.com" className="text-purple-800 font-bold lg:text-base text-xl">support@zoyasupply.com</a>
                        <p className="pt-2 text-gray-800 lg:text-base text-xl dark:text-white">For Payment or Refund related issues:</p>
                        <a href="mailto:refund@zoyasupply.com" className="text-purple-800 font-bold lg:text-base text-xl">refund@zoyasupply.com</a>
                        <p className="font-semibold lg:text-base text-xl pt-2 lg:pt-0">Send us an email anytime</p>
                    </div>

                    <div className="w-80 h-fit shadow-2xl rounded-xl p-6 sm:mt-1 lg:mt-0 dark:border dark:border-white">
                        <div className="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md">
                            <Phone className="w-6 h-6 text-blue-500" />
                        </div>
                        <h2 className="pt-3 pb-2 font-bold lg:text-xl text-2xl dark:text-white">Call Us</h2>
                        <p className="text-gray-800 py-2 lg:text-base text-xl dark:text-white">Mon-Fri from 8am to 6pm</p>
                        <p className="text-gray-800 lg:text-base text-xl dark:text-white">Sat from 12pm to 6pm</p>
                        <p className="text-purple-800 font-bold pt-4 lg:text-base text-xl">+234 806 320 3385</p>
                        <p className="text-purple-800 font-bold lg:text-base text-xl">+234 812 728 4318</p>
                    </div>


                    <div className="w-80 h-fit shadow-2xl rounded-xl p-6 sm:mt-0.5 lg:mt-0 dark:border-white dark:border">
                        <div className="w-10 h-10 bg-green-200 flex items-center justify-center rounded-md">
                            <MapPin className="w-6 h-6 text-green-500" />
                        </div>
                        <h2 className="pt-3 pb-2 font-bold lg:text-xl text-2xl dark:text-white">Visit Us</h2>
                        <p className="text-gray-800 lg:text-base text-xl dark:text-white">Our office in Lagos</p>
                        <p className="text-purple-800 font-bold pt-2 lg:text-base text-xl">Tulip heaven,</p>
                        <p className="text-purple-800 font-bold lg:text-base text-xl">Chevron drive, Lekki</p>
                        <p className="text-purple-800 font-bold lg:text-base text-xl">Lagos State, 100011</p>
                        <p className="text-purple-800 font-bold lg:text-base text-xl">Nigeria</p>
                    </div>
                </section>

                <section className="lg:py-18 lg:px-20 flex gap-15 lg:flex-row flex-col lg:gap-40 lg:pt-28 pt-25 pb-20 sm:px-20 px-5 dark:bg-black dark:text-white">
                    <div>
                        <div>
                            <p className="font-bold lg:text-2xl text-3xl pb-3 lg:pb-0">Let's Build Your Dream Home Together</p>
                            <p className="text-gray-800 sm:w-120 w-90 lg:text-base text-xl dark:text-white ">Whether you're ready to start planning or just have questions about costs, materials, or the building process, we're here to guide you every step of the way.</p>
                        </div>

                        <div className="sm:py-4 py-8">
                            <div className="flex gap-4">
                                <div className="pt-1">
                                    <div className="w-10 h-10 bg-orange-200 flex items-center justify-center rounded-md">
                                        <FileText className="w-5 h-5 text-orange-500" />
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold lg:text-base text-2xl">Free Project Consultation</p>
                                    <p className="lg:text-base text-xl">Get expert advice on your construction project at no cost</p>
                                </div>
                            </div>

                            <div className="flex gap-4 py-6">
                                <div className="pt-1">
                                    <div className="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md">
                                        <MessageSquare className="w-5 h-5 text-blue-500" />
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold lg:text-base text-2xl">24-Hour Response Time</p>
                                    <p className="lg:text-base text-xl">We aim to respond to all inquiries within one business day</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="pt-1">
                                    <div className="w-10 h-10 bg-green-200 flex items-center justify-center rounded-md">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold lg:text-base text-2xl">Nigerian Construction Experts</p>
                                    <p className="lg:text-base text-xl">Our team understands local building practices and regulations</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#fcf8f2] p-6 my-5 lg:my-0 dark:text-black rounded-2xl">
                            <div className="flex gap-2 lg:pt-1">
                                <Clock className="w-6 h-6 text-orange-500" />
                                <p className="font-bold lg:text-base text-2xl">Office Hours</p>
                            </div>

                            <div className="flex justify-between py-2 gap-2 sm:gap-0">
                                <p className="text-gray-800 lg:text-base text-xl">Monday - Friday</p>
                                <p className="lg:text-base text-xl">8:00AM - 6:00PM</p>
                            </div>

                            <div className="flex justify-between pb-2 gap-2 sm:gap-0">
                                <p className="text-gray-800 lg:text-base text-xl">Saturday</p>
                                <p className="lg:text-base text-xl">8:00AM - 6:00PM</p>
                            </div>

                            <div className="flex justify-between pb-2">
                                <p className="text-gray-800 lg:text-base text-xl">Sunday</p>
                                <p className="lg:text-base text-xl sm:px-0 pr-22.5">Closed</p>
                            </div>
                        </div>

                    </div>




                    <div className="shadow-2xl p-7 w-full rounded-4xl animate-flip-x timeline-view animate-range-entry dark:border dark:border-white">
                        <h2 className="font-bold lg:text-3xl sm:text-4xl text-3xl">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="dark:text-white">
                            <div className="pt-4">
                                <label htmlFor="fullname" className="lg:text-base text-2xl">Full Name <span><b className="text-red-600">*</b></span></label>
                                <input type="text" name="fullname" id="fullname" className="dark:text-white w-full h-12 border-2 border-gray-500 outline-purple-800 text-black rounded-lg p-5 my-2 placeholder:font-semibold lg:text-base text-2xl placeholder:dark:text-white " placeholder="Enter your full name" required />
                            </div>

                            <div className="flex gap-6 pt-4 flex-col sm:flex-row">
                                <div>
                                    <label htmlFor="email" className="lg:text-base text-2xl">Email Address <span><b className="text-red-600">*</b></span></label>
                                    <input type="email" name="email" id="email" className="dark:text-white w-full h-12 border-2 border-gray-500 outline-purple-800 text-black rounded-lg p-5 my-2 placeholder: font-semibold lg:text-base text-2xl placeholder:dark:text-white " placeholder="you@exmaple.com" required />
                                </div>


                                <div>
                                    <label htmlFor="phone-number" className="lg:text-base text-2xl">Phone Number <span><b className="text-red-600">*</b></span></label>
                                    <input type="tel" name="phone_number" id="phone-number" className="dark:text-white w-full h-12 border-2 border-gray-500 outline-purple-800 text-black rounded-lg p-5 my-2 placeholder: font-semibold lg:text-base text-2xl placeholder:dark:text-white" placeholder="+234 800 000 0000" required />
                                </div>
                            </div>

                            <div className="flex gap-6 pt-4 flex-col sm:flex-row">
                                <div>
                                    <label htmlFor="project_type" className="lg:text-base text-2xl">Project Type <span><b className="text-red-600">*</b></span></label>
                                    <select name="project-type" className="w-full h-12 border-2 border-gray-50 outline-purple-800 focus:border-purple-800 text-black rounded-lg px-2 my-2 lg:text-base text-2xl dark:text-white " required>
                                        <option value="" disabled selected className="text-black dark:text-black">Select project type</option>
                                        <option value="Residential-Building" className=" dark:text-black">Residential Building</option>
                                        <option value="Commercial-Building" className=" dark:text-black">Commercial Building</option>
                                        <option value="Renovation/Extension" className=" dark:text-black">Renovation/Extension</option>
                                        <option value="Just-Planning/Learning" className="dark:text-black">Just Planning/Learning</option>
                                        <option value="Other" className="dark:text-black">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="roles" className="lg:text-base text-2xl">I am a... <span><b className="text-red-600">*</b></span></label>
                                    <select name="availability" className="w-full border-2 border-gray-500 rounded-lg px-2 h-12 my-2  text-black outline-purple-800 focus:border-purple-800 lg:text-base text-2xl dark:text-white " required>
                                        <option value="" disabled selected className=" dark:text-black">Choose role</option>
                                        <option value="Buyer" className=" dark:text-black">Buyer</option>
                                        <option value="Supplier" className=" dark:text-black">Supplier</option>
                                        <option value="Corporate-Partner" className=" dark:text-black">Corporate Partner</option>
                                        <option value="Other" className="dark:text-black">Other</option>
                                    </select>
                                </div>

                            </div>
                            <div className="pt-4">
                                <label htmlFor="Subject" className="lg:text-base text-2xl">Subject <span><b className="text-red-600">*</b></span></label>
                                <input type="text" name="subject" id="subject" className="w-full h-12 border-2 border-gray-500 dark:text-white outline-purple-800 text-black rounded-lg p-5 my-2 placeholder: font-semibold lg:text-base text-2xl placeholder:dark:text-white" placeholder="What is this about?" required />
                            </div>


                            <div className="pt-4 w-full">
                                <label htmlFor="message" className="text-2xl lg:text-base font-semibold dark:text-white">
                                    Message <span className="text-red-600">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    className="mt-2 dark:text-white w-full border-2 border-gray-500 outline-purple-800 rounded-lg p-5 text-2xl placeholder:font-semibold placeholder:dark:text-white
               sm:text-xl md:text-xl lg:text-lg
               focus:ring-2 focus:ring-purple-500 focus:border-purple-500
               transition-all duration-300"
                                    placeholder="Tell us about your project or question..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="flex gap-2 bg-purple-800 text-white font-bold p-3 w-full justify-center rounded-lg cursor-pointer hover:bg-purple-900 lg:text-base text-2xl my-2">Send Message <Send className="lg:mt-0 mt-2" /></button>

                        </form>

                    </div>
                </section>

                <section className="bg-gray-100 py-14 px-6 timeline-view animate-zoom-in animate-range-entry dark:bg-black">
                    <div className="mx-auto">

                        <div className="text-center mb-12">
                            <h2 className="lg:text-3xl text-4xl font-bold text-black dark:text-white">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-800 mt-2 lg:text-base text-xl dark:text-white">
                                Quick answers to common questions
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:px-50 px-0 gap-10">
                        <div className="flex gap-10 flex-col sm:flex-row items-center">
                            <div className="bg-white border-2 border-orange-500 rounded-2xl p-6 border-l-4 shadow-sm hover:shadow-2xl transition duration-300 sm:w-120 w-80">
                                <h3 className="font-bold text-black mb-3 lg:text-xl text-2xl">
                                    How do I sign up as a buyer?
                                </h3>
                                <p className="text-gray-800 lg:text-base text-xl leading-relaxed ">
                                    Click "Get Started" and fill in your details on our signup form.
                                    You can start browsing products immediately after verification.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-blue-500 border-l-4 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition duration-300 sm:w-120 w-80">
                                <h3 className="font-bold text-black mb-3 lg:text-xl text-2xl">
                                    How long does delivery take?
                                </h3>
                                <p className="text-gray-800 lg:text-base text-xl leading-relaxed">
                                    Delivery times vary by location and product. Most orders are
                                    delivered within 3–7 business days in Lagos and major cities.
                                </p>
                            </div>
                        </div>


                        <div className="flex gap-10 flex-col sm:flex-row items-center">
                            <div className="bg-white border-2 border-green-500 border-l-4 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition duration-300 sm:w-120 w-80">
                                <h3 className="font-bold text-black mb-3 lg:text-xl text-2xl">
                                    Can I become a supplier?
                                </h3>
                                <p className="text-gray-800 lg:text-base text-xl leading-relaxed">
                                    Yes! We're always looking for verified suppliers. Contact us
                                    with your business details and we'll guide you through the
                                    verification process.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-purple-500 border-l-4 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition duration-300 sm:w-120 w-80">
                                <h3 className="font-bold text-black mb-3 lg:text-xl text-2xl">
                                    What payment methods do you accept?
                                </h3>
                                <p className="text-gray-800 lg:text-base text-xl leading-relaxed">
                                    We accept bank transfers, debit cards, credit cards, and mobile
                                    payment methods. All transactions are secure and encrypted.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}

export default Contact