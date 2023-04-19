
import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import NotFound from './components/notFound';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      <Router>
        <Toaster/>
        <Routes>
          <Route exact path="/" element={<Login />}/>
            
          
          <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="transactions" element={<NotFound />} />
                <Route path="schedules" element={<NotFound />} />
                <Route path="users" element={<NotFound />} />
                <Route path="settings" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
