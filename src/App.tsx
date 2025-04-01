import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { GlobalStyle } from './styles/globalStyle';
import './index.css';

function App() {
  return (
    <div className="w-[470px] min-h-screen flex flex-col bg-white relative mx-auto">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
