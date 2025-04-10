import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import { GlobalStyle } from './styles/globalStyle';
import './index.css';
import Footer from './components/Footer';
import ChatList from './pages/chatList/ChatList';
import Language from './pages/language/Language';
import Add from './pages/add/Add';
import Splash from './pages/splash/Splash';
import Chat from './pages/chat/Chat';
import DocList from './pages/docList/DocList';
import FormStepper from './pages/docRegister/FormStepper';

function FooterCondition() {
  const location = useLocation();
  const hideFooterPaths = ['/', '/add', '/chat'];
  const showFooter = !hideFooterPaths.includes(location.pathname);
  return showFooter ? <Footer /> : null;
}

function App() {
  return (
    <Router>
      <div className="w-[470px] min-h-screen flex flex-col bg-[#FDFDFD] relative ">
        <GlobalStyle />
        <Routes>
          <Route path="/language" element={<Language />} />
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/doclist" element={<DocList />} />
          <Route path="/doc" element={<FormStepper />} />
        </Routes>
        <FooterCondition />
      </div>
    </Router>
  );
}

export default App;
