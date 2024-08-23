import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
