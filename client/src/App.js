
import './App.css';
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Add from './component//Add';
import Transfer from './component/Transfer';
import History from './component/History';
import User from './component/User';
import Error from './component/Error';
function App() {
  return (
    <>

      <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
      <Route path="/user">
        <User />
      </Route>
      <Route path="/transfer">
        <Transfer />
      </Route>
      <Route path="/history">
        <History />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>

    </>
  );
}

export default App;