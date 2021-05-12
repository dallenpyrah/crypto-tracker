import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Coinpage from './pages/Coinpage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Homepage from './pages/Homepage';
import ActiveCoinPage from './pages/ActiveCoinPage';
import CoinDetailsPage from './pages/CoinDetailsPage'
function App() {
  return (
    <Router>
        <Navbar className="ml-3" bg="" variant="dark">
        <Navbar.Brand href="#home" className="ml-3 text-primary">BIKOJO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="nav-link" to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/coins">Coins</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">News</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
      <Route path='/coin/:id' component={CoinDetailsPage} exact />
        <Route path='/coins' component={Coinpage} exact />
        <Route path='/' component={Homepage} exact />
      </Switch>
    </Router>
  );
}
export default App;
