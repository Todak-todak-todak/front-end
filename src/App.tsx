import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { GlobalStyle } from './styles/globalStyle';
import './index.css';
import Footer from './components/Footer';
import Language from './pages/Language';
import Information from './pages/Information';

function App() {
  return (
    <div className="w-[470px] min-h-screen flex flex-col bg-[#FAFAF8] relative mx-auto">
      <GlobalStyle />
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/language" element={<Language />} />
          <Route path="/information" element={<Information />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
