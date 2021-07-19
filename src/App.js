import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Transactions from "./components/Transactions";
import Categories from "./components/Categories";
import Reports from "./components/Reports";
import { Nav } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <div>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/reports">Reports</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/categories">Categories</Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Redirect to="/transactions" />
        </Switch>
      </div>
    </Router>
  );
}
