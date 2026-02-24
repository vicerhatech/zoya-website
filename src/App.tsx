import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Home from './pages/Homepage';
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Contact from "./pages/ContactUs";
import Footer from "./components/layout/footer";
import Policy from "./pages/privacypolicy";
import Terms from "./pages/termsofservice";
// import About from "./pages/about"

function App() {
  return (
     <Router>
    <div className="min-h-screen flex flex-col bg-linear-to-br from-purple-100 via-white to-green-100">
      <Navbar />
      <main className="flex-1">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            {/* <Route path="/about" element={<About />} /> */}

          </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}
export default App
