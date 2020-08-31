import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './context/StateProvider';
import {auth} from './firebase'

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type:"SET_USER",
          payload:authUser
        });
      }else{
        dispatch({
          type:"SET_USER",
          payload:null
        });
      }
    })

    return () => {
      unsubscribe()
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>      
          <Route path="/login">
            <Login></Login>
          </Route>      
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
