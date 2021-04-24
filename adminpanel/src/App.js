  
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './layouts/NavBar';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import Resetpassword from './authentication/Resetpassword';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }
  useEffect(() => {
    userState();
  }, []);
  return (
    <>
    {user !== null ? (
      <>
      <NavBar setUserState={() => setUser(null)}/>
      </>
    ) : (
       <>
       <Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>
      
   </>
    )} 
  </>
  );
}

export default App;
