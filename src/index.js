import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import Category from "./components/Categories/Category";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='categories' element={<Categories />}>
                        <Route path=':id' element={<Category />} />
                    </Route>
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
