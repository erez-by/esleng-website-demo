import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { lazy , Suspense } from "react";

const MainPage = lazy(() => import("./Pages/main.jsx"));
const AboutPage = lazy(() => import("./Pages/AboutPage.jsx"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage.jsx"));

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "about", element: <AboutPage/> },
      { path: "projects", element: <ProjectsPage/>, },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
