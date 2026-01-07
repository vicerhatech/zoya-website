// import WhyZoya from "../assets/images/why-zoya.png"



const Home = () => {
    return (
        <>
    <div className="flex justify-around ">
        <div className=" py-20 ">

            <div className="intro">
                <p className="text-purple-800 font-extrabold text-5xl w-fit ">Zoya — Procurement, </p>
                <p className="text-purple-800 font-extrabold text-5xl w-fit ">Made Simple</p>
            </div>
               

            <div className="intro-text py-6">
                    <p className="text-2xl text-gray-700">From trucks of sand to bags of grain — compare suppliers, </p>
                    <p className="text-2xl text-gray-700">get real prices, and order in bulk. All on Zoya.</p>
            </div>

            <div>
                 <button className="rounded-lg bg-purple-800 px-4 py-3 text-lg font-medium text-white hover:bg-purple-900 transition cursor-pointer">
            Get Started  ➔
          </button>
            </div>
        </div>
            
            <div>
               <img src="/images/why-zoya.PNG" alt="Intro Text" className="why-image rounded-xl" />
            </div>


        </div>

        
        </>
    )

};

export default Home