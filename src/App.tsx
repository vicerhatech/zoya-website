import Navbar from './components/layout/navbar';
import Home from './pages/Homepage';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 via-white to-green-100">
      <Navbar />
      <main className="pt-32 px-6">
        <Home />
      </main>
    </div>
  );
}
export default App
