import React from "react";
import { Outlet } from "react-router-dom";
import Main from "./Componets/Main";

import Footer from "./Componets/Footer.jsx"
function App() {
  return (
    <div className="App">
           <Main/>
          <Outlet/>
          <Footer />
    </div>
  );
}

export default App;
