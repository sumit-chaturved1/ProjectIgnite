import "./App.css";
import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import HomePage from "./pages/Home-page/HomePage";
import { useAuth } from "./context/AuthContext";
import Layout from "./shared/Layout";
import BrowsePage from "./pages/Browse-page/BrowsePage";
import DesscriptionPage from "./pages/Description-page/DescriptionPage";
import ContactPage from "./pages/Contact-page/ContactPage";
import AboutPage from "./pages/About-page/AboutPage";

function App() {
  const { authToken } = useAuth();
  const routes = useRoutes([
    {
      path: "/*",
      element: authToken ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "browse",
          element: <BrowsePage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "fund/:id",
          element: <DesscriptionPage />,
        },
      ],
    },
    {
      path: "/login",
      element: !authToken ? <LoginPage /> : <Navigate to="/" />,
    },
  ]);
  return <>{routes}</>;
}

export default App;
