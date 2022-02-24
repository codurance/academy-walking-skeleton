import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './modules/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Categories} from "./modules/Categories/Categories";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/categories" element={<Categories />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);