import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Buyer from './components/pages/Buyer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Seller from './components/pages/Seller';
import Others from './components/pages/Others';
import SignUp from './components/pages/SignUp';
import BoM from './components/pages/BoM';
import Invoice from './components/pages/Invoice';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Buyer} />
          <Route path='/seller' component={Seller} />
          <Route path='/others' component={Others} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/bom' component={BoM} />
          <Route path='/invo' component={Invoice} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
