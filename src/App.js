import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ShoppingCart from './pages/ShoppingCart';
import CheckoutPage from './pages/CheckoutPage';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
