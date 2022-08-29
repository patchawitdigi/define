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
import Newinfo from './component/new'

import Footer from './component/footer'

function App() {
  return (
    <>
    <Navbar />
    <Menu />
    
    <BrowserRouter basename={'/project/define/'}>
    <Routes>
        
          <Route path="/" element={<Overview />} exact/>
          <Route path="/point-of-Interests" element={<Pointint />} exact />
          <Route path="/hidden-treasures" element={<Hidden />} exact />
          <Route path="/luxury-of-choices" element={<Luxury />} exact />
          <Route path="/gallerie-d-arte" element={<Gallerie />} exact />
          <Route path="/news-and-media" element={<Newmedia />} exact />
          <Route path="/news-and-media/news-promotion/:newsId" element={<Newinfo />} exact />
      </Routes>
    </BrowserRouter>
    
    <Footer />
    </>
  );
}

export default App;
