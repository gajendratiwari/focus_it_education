import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import RootLayout from "./layouts/RootLayout";
import Contact from "./pages/Contact";
import Services from "./pages/OurService";
import CourseDetail from "./pages/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      { path: "/course/:courseTitle", element: <CourseDetail /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
