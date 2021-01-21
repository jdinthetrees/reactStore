import React,  {useEffect} from 'react';

import { Switch, Route } from 'react-router-dom';
// import {Router} from "@reach/router";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Register from  './pages/auth/Register';
import Home from './Home';
import Login from './pages/auth/Login';
import Header from './components/nav/Header'
import RegisterComplete from './pages/auth/RegisterComplete';
import ForgotPassword from './pages/auth/ForgotPassword';
import History from './pages/user/History';
import UserRoute from './components/routes/UserRoute';
import AdminRoute from './components/routes/AdminRoute';
import Password from './pages/user/Password';
import Wishlist from './pages/user/Wishlist';
import AdminDashboard from './pages/admin/AdminDashboard';

import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {currentUser} from './functions/auth';




const App = () => {

const dispatch = useDispatch();


//to check firebase auth state
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if(user) {
      const idTokenResult = await user.getIdTokenResult();
      console.log('user', user);
      currentUser(idTokenResult.token)
      .then((res) => {
          dispatch({
              type: 'LOGGED_IN_USER',
              payload: {
                  name: res.data.name,
                  email: res.data.email,
                  token: idTokenResult.token,
                  role: res.data.role,
                  _id: res.data._id,
              },
          });
      })
      .catch(err => console.log(err));
    }
  });
  //cleanup
  return() => unsubscribe();
}, [dispatch]);
    
  return (
   <>
     <Header/>
     <ToastContainer />
    <Switch>
     
      <Route exact path="/" component ={Home} />
      <Route exact path="/login" component ={Login} />
      <Route exact path="/register" component ={Register} />
      <Route exact path="/register/complete" component ={RegisterComplete} />
      <Route exact path="/forgot/password" component ={ForgotPassword} />
      <UserRoute exact path="/user/history" component ={History} />
      <UserRoute exact path="/user/password" component ={Password} />
      <UserRoute exact path="/user/wishlist" component ={Wishlist} />
      <AdminRoute exact path="/admin/dashboard" component ={AdminDashboard} />
     </Switch>
   </>
  );
};

export default App;
