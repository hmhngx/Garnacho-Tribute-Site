import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import SidebarToggle from './components/SidebarToggle';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Stats from './pages/Stats';
import CareerHistory from './pages/CareerHistory';
import Goals from './pages/Goals';
import Merchandise from './pages/Merchandise';
import Gallery from './pages/Gallery';
import GraciasGarnacho from './pages/GraciasGarnacho';
import KitDisplay from './pages/KitDisplayPure';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Auto-close sidebar on mobile when resizing
      if (mobile && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Set initial state: closed by default (can be toggled)
    const initialMobile = window.innerWidth <= 768;
    setIsMobile(initialMobile);
    setIsSidebarOpen(false); // Start closed, user can toggle

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ChakraProvider>
      <Router>
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <SidebarToggle 
          onClick={toggleSidebar} 
          isOpen={isSidebarOpen} 
          isMobile={isMobile}
        />
        
        {/* Main content area - shift on desktop when sidebar is open */}
        <div
          style={{
            marginLeft: isSidebarOpen && !isMobile ? '280px' : '0',
            transition: 'margin-left 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            minHeight: '100vh',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/career-history" element={<CareerHistory />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gracias-garnacho" element={<GraciasGarnacho />} />
            <Route path="/kit-display" element={<KitDisplay />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
