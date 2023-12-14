import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllRoutes } from "./router/router"; 
import LoginPage from "./screens/login/login";
import Home from "./screens/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AllRoutes.login} element={<LoginPage />} />
        <Route path={AllRoutes.home} element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;