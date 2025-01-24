import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Features from './pages/Features';
import Support from './pages/Support';
import About from './pages/About';
import Pricing from './pages/Pricing';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6 text-indigo-600" />
              <span className="text-lg font-bold">LinkedNet</span>
            </div>
            <p className="text-gray-600">Empowering salon businesses with smart booking solutions.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-gray-600 hover:text-indigo-600">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-indigo-600">Pricing</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-indigo-600">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-indigo-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-4">
              <li><a href="mailto:hung.vm2574@gmail.com" className="text-gray-600 hover:text-indigo-600">hung.vm2574@gmail.com</a></li>
              <li className="text-gray-600">33 Nanovich Ave</li>
              <li className="text-gray-600">Girrawheen, Western Australia</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} LinkedNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;