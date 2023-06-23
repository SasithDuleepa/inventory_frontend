import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import './App.css';

import Sidebar from './components/SideBar/sidebar';

import Dashboad from "./pages/Dashboad/dashboad";
import Index from "./pages/inventoryManage/layout";
import Sales from "./pages/Sales/layout";

function App() {
  return (
    < >
      <Sidebar />

<div className="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboad} />
          <Route exact path="/add_product" component={Index} />
          <Route exact path="/sales" component={Sales} />
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
