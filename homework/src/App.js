import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Product from './components/Product';
import './App.css';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <div className='row'>
          <div className='col-8'>
            <Switch>
              <Route path="/" exact component={Product} />
              <Route path="/carts" exact component={Cart} />
            </Switch>
          </div>
          <div className='col-4'>
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
