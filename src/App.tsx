import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import { GlobalStyle } from './styles/globalStyle';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Splash from './pages/Splash';

function App() {
  const isSplash = window.location.pathname === '/';

  return (
    <div className="w-[470px] min-h-screen flex flex-col bg-[#FDFDFD] relative mx-auto">
      <GlobalStyle />
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        {!isSplash && <Footer />}
      </Router>
    </div>
  );
}

export default App;
