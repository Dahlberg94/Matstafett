import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

//pages
import Home from "./Pages/Home";
import Anmälan from "./Pages/Anmälan";
import Arrangörer from "./Pages/Arrangörer";
import Info from "./Pages/Info";
import SåGårDetTill from "./Pages/SåGårDetTill";
import Samarbetspartners from "./Pages/Samarbetspartners";

//Layouts
import NavBar from "./Layouts/NavBar";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<NavBar />} >
      <Route index element={<Home />} />
      <Route path="info" element={<Info />} />
      <Route path="SåGårDetTill" element={<SåGårDetTill />} />
      <Route path="Anmälan" element={<Anmälan />} />
      <Route path="Arrangörer" element={<Arrangörer />} />
      <Route path="Samarbetspartners" element={<Samarbetspartners />} />
      

    </Route>
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
