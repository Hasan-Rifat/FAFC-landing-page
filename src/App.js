import Home from "./pages/home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const router = [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    { id: 2, path: "/home", element: <Home /> },
    { id: 3, path: "/about-us", element: <div>About</div> },
    { id: 4, path: "/nfts", element: <div>Nfts</div> },
    {
      id: 5,
      path: "/roadmap",
      element: <div>Roadmap</div>,
    },
    {
      id: 6,
      path: "/faqs",
      element: <div>Faqs</div>,
    },
    /*  {
      path: "*",
      element: <div>Not found</div>,
    }, */
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
