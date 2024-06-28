import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewProject from './components/pages/NewProject';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Footer from './components/layout/Footer';

import Container from './components/layout/Container';

import NavBar from './components/layout/NavBar';


function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Container customClass="minheight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
