import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Result from './pages/Result';
import MyInfo from './pages/MyInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'result', element: <Result /> },
      { path: 'myinfo', element: <MyInfo /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}