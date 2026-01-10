import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Home from './pages/Homepage';
import Footer from "./components/layout/footer";

function App() {
  return (
     <Router>
    <div className="min-h-screen flex flex-col bg-linear-to-br from-purple-100 via-white to-green-100">
      <Navbar />
      <main className="flex-1">
         <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}
export default App
