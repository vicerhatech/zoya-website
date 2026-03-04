import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Target } from "lucide-react";
import { Users } from "lucide-react";
import { Globe } from "lucide-react"
import Ceo from "../assets/images/image-1.jpeg";
import TeamImage from "../assets/images/image-3.jpeg";
import CeoStanding from "../assets/images/image-2.jpeg";
import CeoZoyaImage from "../assets/images/image-4.jpeg"
import CeoZoya from "../assets/images/image-5.jpeg"
// import  CeoZoya2 from "../assets/images/image-6.jpeg"
import Oyindamola from "../assets/images/oyindamola.png";
import Victor from "../assets/images/victor.png";
import Team from "../assets/images/team.jpeg";
// import ZoyaVideo from "../assets/videos/video-1.MOV"
import ZoyaVideo2 from "../assets/videos/video-2.mp4";

function About() {
    return (
        <>
            <section className="bg-purple-100 sm:w-full h-fit shadow-xl pt-18 ">
                <div className="relative w-full sm:h-145 h-120">
                    <img
                        src={TeamImage}
                        alt="Zoya Team"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
                        <p className="text-white sm:text-6xl text-center text-3xl font-bold sm:w-160 -mt-10 sm:mt-0">
                            Building the Future of{" "}
                            <span className="text-purple-800 sm:text-6xl text-center text-3xl font-bold w-160 ">
                                Construction Planning
                            </span>
                        </p>
                        <p className="sm:py-4 py-8 text-white text-xl sm:w-150 w-full sm:px-0 px-1 text-center">
                            Empowering Nigerians to build their dream homes with confidence,
                            transparency, and control over every money spent.
                        </p>

                        <div className="py-4 flex justify-between sm:gap-10 gap-2">
                            <Link
                                to="/"
                                className="rounded-lg bg-white/40 px-4 py-3 text-lg font-bold text-white hover:bg-purple-900 transition cursor-pointer"
                            >
                                See How it works ▶
                            </Link>

                            <Link
                                to="/#get-started"
                                className="rounded-lg bg-purple-800 px-4 py-3 text-lg font-bold text-white hover:bg-purple-900 transition cursor-pointer"
                            >
                                Get Started ➔
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:bg-black lg:pt-20 pt-0 lg:px-25 sm:px-10 px-5 flex lg:flex-row flex-col lg:gap-20 sm:gap-10 gap-5">
                <img
                    src={CeoStanding}
                    alt="Ceo zoya procurement"
                    className="lg:w-135 lg:h-145 rounded-4xl lg:mt-30 mt-20"
                />
                <div>
                    <h2 className="dark:text-white text-4xl font-semibold pb-8">
                        From Frustration to Foundation
                    </h2>
                    <p className=" dark:text-white text-lg text-[#374152] font-semibold pb-5 text-justify">
                        I watched my parents struggle for years to build our family home.
                        Every month brought new surprises, material prices fluctuating
                        wildly, contractors giving vague estimates, and our savings
                        disappearing faster than we could track.
                    </p>

                    <p className="dark:text-white text-lg text-[#374152] font-semibold pb-5 text-justify">
                        The breaking point came when my mother broke down in tears,
                        realizing we'd spent ₦2 million more than planned, and the house was
                        still incomplete. That moment changed everything.
                    </p>

                    <p className="dark:text-white text-lg text-[#374152] font-semibold pb-5 text-justify">
                        I realized this wasn't just our family's problem, this was Nigeria's
                        problem. Millions of hardworking people were being robbed of their
                        dreams because they lacked simple tools to plan, budget, and build
                        with confidence.
                    </p>

                    <p className="dark:text-white text-lg text-[#374152] font-semibold pb-5 text-justify">
                        Zoya was born from that pain. We built the platform I wish my
                        parents had a system that brings transparency, control, and
                        confidence to every Nigerian planning to build their home.
                    </p>

                    <div className=" w-full bg-white pt-5">
                        <div className="flex ">
                            <div className="h-34 bg-purple-800 w-[1.8%]"></div>

                            <div className="pt-2 px-5">
                                <q className="text-[#374152] font-bold text-lg italic text-justify">
                                    Building a home shouldn't be a gamble. It should be a
                                    well-planned journey where every penny spent is accounted for
                                    and every decision is informed.
                                </q>
                                <p className="py-3 font-bold text-purple-800 text-xl">
                                    — Founder & CEO, Zoya Procurement
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 mb-10 gap-4 bg-[#fcf8f2] p-6 flex sm:w-120 w-full sm:text-justify text-left border-2 mx-auto border-purple-800 rounded-2xl">
                        <div className="p-3 h-fit bg-orange-100 rounded-xl">
                            <Target className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold pb-2">Our Mission</h2>
                            <p className="sm:text-base">
                                To democratize construction planning across Nigeria by providing
                                 accessible, transparent, and reliable tools that empower every
                                Nigerian to build their dream home without fear of financial
                                uncertainty.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:bg-black lg:py-10 pt-10 pb-10 sm:px-0 px-5 timeline-view animate-zoom-in animate-range-entry">
                <div className="text-center">
                    <h2 className="flex justify-center py-2 gap-2 font-bold text-purple-800">
                        <span>
                            <Users className="w-6 h-6 text-black dark:text-white" />
                        </span>
                        OUR TEAM
                    </h2>
                    <h2 className="text-4xl font-bold pb-5 dark:text-white">
                        Meet the People Building the Future
                    </h2>
                    <p className="text-center dark:text-white sm:w-155 w-full mx-auto text-xl">
                        We're a tight-knit team of engineers, designers, and business minds,
                        all obsessed with solving real problems for real people.
                    </p>
                </div>

                <div className="lg:px-20 lg:py-15 py-10 sm:px-10 sm:items-center flex lg:flex-row flex-col gap-15">
                    <div className="sm:text-center lg:text-left">
                        <img src={Ceo} alt="Ceo Zoya" className="lg:w-90 lg:h-95 w-full h-full rounded-2xl" />
                        <h2 className="lg:text-xl sm:text-4xl text-2xl font-bold lg:pt-1 pt-2 dark:text-white ">Damilola Oluwadare</h2>
                        <p className="lg:text-base sm:text-2xl text-xl text-purple-800 font-bold">Founder & CEO</p>
                        <p className="lg:w-85 w-full lg:text-justify text-justify sm:text-center py-2 lg:text-base sm:text-xl text-xl dark:text-white">
                            Visionary leader driving Zoya's mission to democratize
                            construction planning across Nigeria through technology and
                            transparency.
                        </p>
                    </div>

                    <div className="sm:text-center lg:text-left">
                        <img
                            src={Victor}
                            alt="Victor Zoya Team"
                            className="lg:w-97 lg:h-95 w-full h-full rounded-2xl"
                        />
                        <h2 className="lg:text-xl sm:text-4xl text-2xl font-bold lg:pt-1 pt-2 dark:text-white">Victor Erhabor</h2>
                        <p className="lg:text-base sm:text-2xl text-xl text-purple-800 font-bold">
                            Co-Founder / Software Developer
                        </p>
                        <p className="lg:w-85 w-full lg:text-justify text-justify sm:text-center py-2 lg:text-base sm:text-xl text-xl dark:text-white">
                            Strategic technical partner responsible for platform architecture,
                            scalability engineering, and long-term product roadmap.
                        </p>
                    </div>

                    <div className="sm:text-center lg:text-left">
                        <img
                            src={Oyindamola}
                            alt="Oyindamola Zoya Team"
                            className="lg:w-95 lg:h-95 w-full h-full  rounded-2xl"
                        />
                        <h2 className="lg:text-xl sm:text-4xl text-2xl font-bold lg:pt-1 pt-2 dark:text-white">⁠Oyindamola Odunayo</h2>
                        <p className="lg:text-base sm:text-2xl text-xl text-purple-800 font-bold">
                            Co-Founder / Product Designer
                        </p>
                        <p className="lg:w-85 w-full lg:text-justify text-justify sm:text-center py-2 lg:text-base sm:text-xl text-xl dark:text-white">
                            Leading product strategy and user experience design to ensure Zoya
                            meets the real needs of Nigerian builders.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center lg:px-30 sm:px-5">
                    <img src={Team} alt="zoya team" className="lg:w-285 lg:h-180 w-full h-full rounded-2xl" />
                    <p className="text-2xl text-purple-800 font-bold pt-2 text-center">
                        ⁠ZOYA TEAM
                    </p>
                    <p className="sm:w-140 w-full text-center lg:text-base sm:text-2xl text-lg py-2 mx-auto font-bold dark:text-white">
                        A dedicated Team to support users through every step of their
                        building journey with responsive, knowledgeable assistance.
                    </p>
                </div>
            </section>

            <section className="bg-blue-800 pt-20 text-white">
                <div className="text-center">
                    <h2 className="sm:text-5xl text-4xl text-white font-bold">
                        Built for Simplicity,
                    </h2>
                    <h2 className="sm:text-5xl text-4xl text-orange-500 font-bold">
                        Engineered for Results
                    </h2>
                    <div className="flex justify-center py-5">
                        <p className="w-170  text-xl">
                            Watch how Zoya transforms complex construction planning into a
                            simple, step-by-step process anyone can follow.
                        </p>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col py-10 lg:px-40 sm:px-20 px-5 lg:gap-30 gap-5">
                    <div>
                        <video
                            src={ZoyaVideo2}
                            controls
                            loop
                            preload="metadata"
                            className="w-240 h- object-cover rounded-xl"
                        >
                        </video>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold pt-10">
                            Core Features That Set Us Apart
                        </h2>
                        <div className="flex pt-5 gap-4">
                            <div>
                                <span className="hover:scale-110 pr-3 pt-1">
                                    <div className="lg:w-8 lg:h-8 sm:w-7 sm:h-7 rounded-full bg-purple-800 flex items-center justify-center">
                                        <Check
                                            className="lg:w-5 lg:h-5 sm:w-5 sm:h-5 text-white"
                                            strokeWidth={3}
                                        />
                                    </div>
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    Real-Time Material Pricing
                                </h2>
                                <p className="pt-2">
                                    Access up-to-date costs for cement, blocks, steel, and more
                                    across Nigerian markets. No more surprises or budget overruns.
                                </p>
                            </div>
                        </div>

                        <div className="flex pt-5 gap-4">
                            <div>
                                <span className="hover:scale-110 pr-3 pt-1">
                                    <div className="lg:w-8 lg:h-8 sm:w-7 sm:h-7 rounded-full bg-purple-800 flex items-center justify-center">
                                        <Check
                                            className="lg:w-4 lg:h-4 sm:w-6 sm:h-6 text-white"
                                            strokeWidth={3}
                                        />
                                    </div>
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">Phase-by-Phase Breakdown</h2>
                                <p className="pt-2">
                                    See exactly what each construction phase costs, foundation,
                                    walls, roofing, finishing with detailed line items and labor
                                    estimates.
                                </p>
                            </div>
                        </div>

                        <div className="flex pt-5 gap-4">
                            <div>
                                <span className="hover:scale-110 pr-3 pt-1">
                                    <div className="lg:w-8 lg:h-8 sm:w-7 sm:h-7 rounded-full bg-purple-800 flex items-center justify-center">
                                        <Check
                                            className="lg:w-4 lg:h-4 sm:w-6 sm:h-6 text-white"
                                            strokeWidth={3}
                                        />
                                    </div>
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">Trusted Supplier Network</h2>
                                <p className="pt-2">
                                    Connect with verified suppliers in your area who offer fair
                                    prices and quality materials vetted by our team and community.
                                </p>
                            </div>
                        </div>

                        <div className="flex pt-5 gap-4">
                            <div>
                                <span className="hover:scale-110 pr-3 pt-1">
                                    <div className="lg:w-8 lg:h-8 sm:w-7 sm:h-7 rounded-full bg-purple-800 flex items-center justify-center">
                                        <Check
                                            className="lg:w-4 lg:h-4 sm:w-6 sm:h-6 text-white"
                                            strokeWidth={3}
                                        />
                                    </div>
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    Budget Tracking & Savings Goals
                                </h2>
                                <p className="pt-2">
                                    Set savings targets, track progress, and get smart
                                    recommendations to optimize your construction budget over
                                    time.
                                </p>
                            </div>
                        </div>

                        <div className="pt-20">
                            <p className="text-xl">We're building Zoya from the ground up, literally. Because the best way to serve Nigerian builders is to walk alongside them, learn from them, and build something together.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex lg:flex-row flex-col gap-15 lg:gap-20 bg-purple-800 text-white dark:bg-purple-800/30 lg:py-15 pt-5 pb-10 px-5 lg:px-20 dark:text-black">
                <div className="pt-10 lg:w-150 w-full">
                    <div>
                        <p className="bg-white/30 py-2 px-3 sm:mx-auto mx-0 lg:mx-0 w-fit rounded-4xl border-white flex gap-2 font-bold">
                            <span><Globe className="w-6 h-6 text-white" /></span> VISION FOR 2030
                        </p>
                    </div>

                    <div>
                        <h2 className="py-5 font-bold sm:text-4xl text-3xl sm:text-center lg:text-left text-left">A Continent of Builders</h2>
                        <p className="text-lg pb-5">
                            By 2030, Zoya won't just be Nigeria's leading procurement
                            platform; we'll be the standard-bearer for trustworthy, efficient
                            supply chains across the entire African continent. We're building
                            infrastructure that enables millions to build.
                        </p>

                        <div className="flex flex-col gap-2">
                            <p>
                                <span></span>100k builders empowered with transparent tools and
                                verified suppliers
                            </p>
                            <p>
                                <span></span>25,000+ vetted suppliers across West Africa with
                                real-time collaboration
                            </p>
                            <p>
                                <span></span>$5 Billion in construction projects coordinated
                                through Zoya
                            </p>
                        </div>

                        <div className="py-7">
                            <q className="italic font-semibold">
                                Every home built with confidence, every project completed on time,
                                every supplier thriving; that's the Zoya we're creating.
                            </q>
                        </div>

                    </div>
                    <Link to="" className="bg-white text-xl text-purple-800 font-bold p-3 rounded-4xl hover:bg-purple-900 cursor-pointer hover:text-white">Join the Movement ➔</Link>
                </div>

                <div>
                    <img src={CeoZoyaImage} alt="ceo zoya procurment" className="lg:w-135 lg:h-130 w-full h-full rounded-4xl animate-flip-x timeline-view animate-range-entry" />
                </div>
            </section>

            <section className="lg:py-15 pt-10 pb-15 px-5 lg:px-20 dark:bg-black dark:text-white">
                <div className="flex lg:flex-row flex-col-reverse lg:gap-30 gap-10">
                    <div>
                        <img src={CeoZoya} alt="" className="lg:w-120 lg:h-130 rounded-4xl timeline-view animate-zoom-in animate-range-entry" />
                    </div>
                    <div className="lg:w-150 h-fit">
                        <h2 className="py-5 font-bold text-4xl text-center">The Future We're Building</h2>
                        <p className="py-2 text-center lg:text-base sm:text-xl text-lg">
                            Our vision extends far beyond a planning tool. We're building the
                            infrastructure for Nigeria's construction revolution.
                        </p>
                        <p className="font-bold text-xl text-justify sm:text-left py-2 lg:py-0">
                            Imagine a Nigeria where every family can build their dream home
                            without fear. Where transparency is standard, not exceptional.
                            Where technology empowers millions to take control of the biggest
                            financial decision of their lives.
                        </p>
                        <p className="py-4 lg:text-base sm:text-xl text-lg text-justify sm:text-left ">
                            We're scaling to serve every state, partnering with suppliers
                            nationwide, integrating financing solutions, and building
                            AI-powered tools that make construction planning as simple as
                            online shopping.
                        </p>

                        <div className="bg-purple-100 shadow-xl p-4 rounded-3xl text-center dark:text-black">
                            <h2 className="text-3xl font-bold text-purple-800">Join Us on This Journey</h2>
                            <p className="pt-3 text-lg font-semibold">
                                Whether you're planning your first home or your fifth, Zoya is here
                                to guide you. Start building with confidence today.
                            </p>
                            <div className="lg:py-3 py-5 flex gap-5 justify-center">
                                <Link
                                    to="/#download-link"
                                    className="rounded-lg bg-purple-800 px-4 py-3 text-lg font-bold text-white hover:bg-purple-900 transition cursor-pointer"
                                >
                                    Get Started ➔
                                </Link>

                                <Link
                                    to="/"
                                    className="rounded-lg bg-white px-4 py-3 text-lg font-bold text-purple-800 hover:bg-purple-900 hover:text-white transition cursor-pointer"
                                >
                                    Contact Our Team
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}

export default About;
