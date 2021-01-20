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
import Payment from './components/pages/Payment';
import Policies from './components/pages/Policies';
import SellerHub from './components/pages/SellerHub';
import Withdrawals from './components/pages/Withdrawals';
import Recforu from './components/pages/Recforu';

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
          <Route path='/invoice' component={Invoice} />
          <Route path='/payment' component={Payment} />
          <Route path='/policies' component={Policies} />
          <Route path='/sellerhub' component={SellerHub} />
          <Route path='/withdrawals' component={Withdrawals} />
          <Route path='/recforu' component={Recforu} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
