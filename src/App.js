// app.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllRoutes } from "./router/router"; 
import LoginPage from "./screens/login/login";
import Home from "./screens/home/home";
import AddTodo from "./screens/Addtodo/additems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={AllRoutes.home} element={<Home />} />
        <Route path={AllRoutes.additems} element={<AddTodo />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

