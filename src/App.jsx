import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import StudentRegister from './components/StudentRegister';
import { useState } from "react";
import StudentListPage from './components/StudentListPage';
import StudentDetails from './components/StudentDetails';
import EditStudent from './components/EditStudent';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus == "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={isLoggedIn? (<Dashboard setIsLoggedIn={setIsLoggedIn}/>) : (<Navigate to="/login"/>)
      }/>
       <Route
          path="/studentregister"
          element={isLoggedIn ? <StudentRegister /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/studentlist"
          element={isLoggedIn ? <StudentListPage /> : <Navigate to="/dashboard" />}
        />
         <Route path="/studentdetails/:id" element={isLoggedIn ? <StudentDetails /> : <Navigate to="/dashboard" />}
         />
         <Route path="/editstudent/:id" element={isLoggedIn ? <EditStudent/> : <Navigate to="/dashboard" />}
         />
        <Route path='*' element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"}/>}/>
        
      </Routes>
    </Router>
  );
};

export default App
