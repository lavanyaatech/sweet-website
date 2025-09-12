import React from "react";
import ReactDOM from 'react-dom/client';
import Layout from "./Pages/Layout";
import { HashRouter,Route, Routes } from "react-router-dom";
import Sweets from "./Pages/Sweets";
import IndianCookies from "./Pages/IndianCookies";
import GuiltFree from "./Pages/GuiltFree";
import TeaTimeSnacks from "./Pages/TeaTimeSnacks";
import Namkeen from "./Pages/Namkeen";
import BulkOrders from "./Pages/BulkOrders";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";

export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Sweets/>}/>
        <Route path="IndianCookies" element={<IndianCookies/>}/>
        <Route path="GuiltFree" element={<GuiltFree/>}/>
        <Route path="TeaTimeSnacks" element={<TeaTimeSnacks/>}/>
        <Route path="Namkeen" element={<Namkeen/>}/>
        <Route path="BulkOrders" element={<BulkOrders/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
