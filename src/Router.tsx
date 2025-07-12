import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FooterLayout from './layouts/FooterLayout';

const Splash = lazy(() => import('@/pages/splash/Splash'));
const Add = lazy(() => import('@/pages/add/Add'));
const Language = lazy(() => import('@/pages/language/Language'));
const Home = lazy(() => import('@/pages/home/Home'));
const Result = lazy(() => import('@/pages/result/Result'));
const DetailResult = lazy(() => import('@/pages/result/DetailResult'));
const ChatList = lazy(() => import('@/pages/chatList/ChatList'));
const Chat = lazy(() => import('@/pages/chat/Chat'));
const DocList = lazy(() => import('@/pages/docList/DocList'));
const FormStepper = lazy(() => import('@/pages/docRegister/FormStepper'));
const HosList = lazy(() => import('@/pages/result/KakaoMap/HosList'));
const DocDetail = lazy(() => import('@/pages/docList/DocDetail'));
const MyPage = lazy(() => import('@/pages/mypage/MyPage'));

const router = createBrowserRouter([
  { path: '/', element: <Splash /> },
  { path: '/add', element: <Add /> },
  { path: '/chat', element: <Chat /> },
  { path: '/language', element: <Language /> },

  {
    element: <FooterLayout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/result/:chatResultId', element: <Result /> },
      { path: '/detailresult/:reportId', element: <DetailResult /> },
      { path: '/chatlist', element: <ChatList /> },
      { path: '/doclist', element: <DocList /> },
      { path: '/doc', element: <FormStepper /> },
      { path: '/hoslist', element: <HosList /> },
      { path: '/docdetail/:documentId', element: <DocDetail /> },
      { path: '/mypage', element: <MyPage /> },
    ],
  },
]);

export default router;
