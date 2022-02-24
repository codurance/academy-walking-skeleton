import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import {Main} from "./modules/Main";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/employees" element={<Employees />} />
        </Routes>
    </BrowserRouter>,
  // <React.StrictMode>
  //   <Main />
  // </React.StrictMode>,
  document.getElementById('root')
);