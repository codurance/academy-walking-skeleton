import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './modules/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Categories} from "./modules/Categories/Categories";
import Employees from "./modules/Employees/Employees";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/employees" element={<Employees />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);