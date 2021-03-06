
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './layouts/NavBar';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import Resetpassword from './authentication/Resetpassword';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginNavBar from './layouts/LoginNavBar';
import ContactUs from './layouts/ContactUs';
import Home from './layouts/Home';
import AboutUs from './layouts/AboutUs';


function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] = useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }

   
  const LoginComponent = () => {
    return <Login loggedIn={(user) => setUser(user)}/>
  }
  useEffect(() => {
    userState();
  }, []);
  return (
    <>
      {user !== null ? (
        <>
          <NavBar setUserState={() => setUser(null)} />
        </>
      ) : (
        <>
          <Router>
            <LoginNavBar/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/home' exact component={Home}/>
              <Route path='/login' component={LoginComponent} />
              <Route path='/signUp' component={SignUp} />
              <Route path='/resetPassword' component={Resetpassword} />
              <Route path='/contact' component={ContactUs} />
              <Route path='/about' component={AboutUs} />
            </Switch>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
