import './App.css';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar'
import Menu from './component/menu'

import Overview from './overview'
import Pointint from './pointint'
import Hidden from './hidden'
import Luxury from './luxury'
import Gallerie from './gallerie'
import Newmedia from './newmedia'

import Footer from './component/footer'

function App() {
  return (
    <>
    <Navbar />
    <Menu />
    
    <BrowserRouter>
    <Routes>
        
          <Route path="/" element={<Overview />} />
          <Route path="/point-of-Interests" element={<Pointint />} />
          <Route path="/hidden-treasures" element={<Hidden />} />
          <Route path="/luxury-of-choices" element={<Luxury />} />
          <Route path="/gallerie-d-arte" element={<Gallerie />} />
          <Route path="/news-and-media" element={<Newmedia />} />
      </Routes>
    </BrowserRouter>
    
    <Footer />
    </>
  );
}

export default App;
