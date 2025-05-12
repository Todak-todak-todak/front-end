import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Home from './pages/home/Home';
// import { GlobalStyle } from './styles/globalStyle';
import './index.css';
import Footer from './components/Footer';
import ChatList from './pages/chatList/ChatList';
import Language from './pages/language/Language';
import Add from './pages/add/Add';
import Splash from './pages/splash/Splash';
import Chat from './pages/chat/Chat';
import DocList from './pages/docList/DocList';
import FormStepper from './pages/docRegister/FormStepper';
import Result from './pages/result/Result';
import HosList from './pages/result/KakaoMap/HosList';
import DocDetail from './pages/docList/DocDetail';
import MyPage from './pages/mypage/MyPage';
import './i18n';
import { useEffect } from 'react';
import DetailResult from './pages/result/DetailResult';

function FooterCondition() {
  const location = useLocation();
  const hideFooterPaths = ['/', '/add', '/chat', '/language'];
  const showFooter = !hideFooterPaths.includes(location.pathname);
  return showFooter ? <Footer /> : null;
}
const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      if (refreshToken) localStorage.setItem('refreshToken', refreshToken);

      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#FDFDFD] w-full max-w-[470px] mx-auto">
          {/* <GlobalStyle /> */}
          <div className="flex-1">
            <Routes>
              <Route path="/language" element={<Language />} />
              <Route path="/add" element={<Add />} />
              <Route path="/" element={<Splash />} />
              <Route path="/home" element={<Home />} />
              <Route path="/result/:chatResultId" element={<Result />} />
              <Route
                path="/detailresult/:reportId"
                element={<DetailResult />}
              />
              <Route path="/chatlist" element={<ChatList />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/doclist" element={<DocList />} />
              <Route path="/doc" element={<FormStepper />} />
              <Route path="/hoslist" element={<HosList />} />
              <Route path="/docdetail/:documentId" element={<DocDetail />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </div>
          <div className="mt-auto z-[10000]">
            <FooterCondition />
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
