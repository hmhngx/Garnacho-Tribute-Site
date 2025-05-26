import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Stats from './pages/Stats';
import CareerHistory from './pages/CareerHistory';
import Goals from './pages/Goals';
import Merchandise from './pages/Merchandise';
import Gallery from './pages/Gallery';
import GraciasGarnacho from './pages/GraciasGarnacho';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/career-history" element={<CareerHistory />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gracias-garnacho" element={<GraciasGarnacho />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
