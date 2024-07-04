import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CommentsProvider } from "./contexts/commentsContext";
import { useAuth } from "./contexts/authContext";
import React ,{useState,useEffect} from 'react';

import Home from './screens/Home';
import Login from './screens/Login';

function LandingPage(){
  const { currentUser, loading } = useAuth();
  const [redirectTo, setRedirectTo] = useState(null);
  useEffect(()=>{
    if(!loading){
      if(currentUser){
        console.log('Current user:', currentUser);
        setRedirectTo('/')
      }
      else
        setRedirectTo('/login')
    }
  }, [currentUser, loading])
}

function App() {
  const {currentUser, loading}=useAuth();
  return (
    <div className='bg-black max-h-screen'>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
  );
}

export default App;
