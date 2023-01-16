//   D:\Documents\NodeJS\BackFrontEnd\frontend
import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import Navbar from './components/navbar/Navbar';
import { Login2 } from './pages/authpage/Login2';
import { Login } from './pages/authpage/AuthLog';
import { NotFoundPage } from './pages/Notfoundpage';
import { Register } from './pages/authpage/Register';
import { Home } from './pages/Home';

function App() {
  return (
  <>
       <Routes>
        <Route path="/" element={<Navbar />}>
           <Route index element={<Home />} />
           <Route path="/login2" element={<Login2 />}/>
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />}/>
           <Route path="*" element={<NotFoundPage />}/>
         </Route>
       </Routes>
      </>
  );
}

export default App;
