import { useState } from "react";
import logo from "../../assets/images/purple-logo.png"
import logo2 from "../../assets/images/white-log.png"
import Search from "../common/search";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <header className="fixed z-50 w-full">
      <nav
        className="
          relative
          flex items-center justify-between
          rounded-1xl px-5 py-3
          bg-white/60 backdrop-blur-xl
          border border-white/20
          shadow-lg shadow-black/5
          dark:bg-purple-800 dark:border-white/10
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex">
           <a href="/"><img src={logo} alt="Company logo" className="h-5 px-2 cursor-pointer dark:hidden" /></a>
           <a href="/" className="dark:bg-black rounded-full py-2"><img src={logo2} alt="Company logo" className="h-5 px-2 cursor-pointer dark:border-white hidden dark:flex" /></a>
          </div>
          <a href="/"><span className="text-lg font-extrabold text-purple-800 dark:text-white cursor-pointer">
            Zoya
          </span></a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-20 text-md font-bold text-purple-800 dark:text-white">
         <a href="/"><li className="hover:text-purple-900 dark:hover:text-black transition cursor-pointer">Home</li></a> 
         <a href="#theProblem"><li className="hover:text-purple-900 dark:hover:text-black transition cursor-pointer">Problem</li></a>
         <a href="#theSolution"><li className="hover:text-purple-900 dark:hover:text-black transition cursor-pointer">Solution</li></a>  
         <a href="#howZoyaWorks"><li className="hover:text-purple-900 dark:hover:text-black transition cursor-pointer">How It Works</li></a> 
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">

          <Search />

          <button className="rounded-lg border border-purple-800 px-4 py-2 text-sm font-medium text-purple-900 dark:text-white hover:bg-purple-900 hover:text-white transition cursor-pointer dark:border-white dark:hover:bg-black">
            Log In
          </button>
    
          <button className="rounded-lg border bg-purple-800 px-4 py-3 text-sm font-medium text-white hover:bg-purple-900 transition cursor-pointer dark:hover:bg-black dark:border-white">
            Get Started  ➔
          </button>


        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5"
        >
          <span className="h-0.5 w-6 bg-gray-800 dark:bg-white" />
          <span className="h-0.5 w-6 bg-gray-800 dark:bg-white" />
          <span className="h-0.5 w-6 bg-gray-800 dark:bg-white" />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              absolute top-full left-0 mt-4 w-full
              rounded-2xl p-6
              bg-white/70 backdrop-blur-xl
              border border-white/20
              shadow-xl shadow-black/10
              dark:bg-black/50 dark:border-white/10
              lg:hidden
            "
          >

        <ul className="flex flex-col gap-4 text-md font-bold text-purple-800 dark:text-gray-200">
         <a href="/"><li className="hover:text-purple-900 transition cursor-pointer">Home</li></a> 
         <a href="#theProblem"><li className="hover:text-purple-900 transition cursor-pointer">Problem</li></a> 
         <a href="#theSolution"><li className="hover:text-purple-900 transition cursor-pointer">Solution</li></a> 
         <a href="#howZoyaWorks"><li className="hover:text-purple-900 transition cursor-pointer">How It Works</li></a> 
        </ul>

        <div className="py-6"> 
             <Search /> 
        </div>

          <div className="flex justify-between">

           <button className="rounded-lg border border-purple-800 px-4 py-2 text-sm font-medium text-purple-900 dark:text-purple-300 hover:bg-purple-900 hover:text-white dark:hover:bg-white/10 transition">
            Log In
          </button>
    
          <button className="rounded-lg bg-purple-800 px-4 py-3 text-sm font-medium text-white hover:bg-purple-900 transition">
            Get Started  ➔
          </button>
         </div>

       
            </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
