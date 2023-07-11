import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import './App.css';

import Sidebar from './components/SideBar/sidebar';

import Dashboad from "./pages/Dashboad/dashboad";
import Index from "./pages/production_output/layout";
import Sales from "./pages/Sales/layout";
import Raw_index from "./pages/Raw_input/layout";
import production_index from "./pages/Production/layout";
import Production_input_index  from "./pages/production_Inputs/layout";
import Index_expenses from "./pages/expenses/Layout";
import Index_setting from "./pages/setting/layout";

import Index_supplier from "./pages/Supplier/layout";

import Index_reports from "./pages/Reports/layout/Index";




import Edite_Input_raw from "./pages/Edite_data/edite_raw_input/edite_Input_raw";



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
          <Route exact path="/Raw_input" component={Raw_index}/>
          <Route exact path="/Production" component={production_index}/>
          <Route exact path="/Production_inputs" component={Production_input_index}/>
          <Route exact path="/expenses" component={Index_expenses}/>
          <Route exact path="/Supplier" component={Index_supplier}/>
          <Route exact path="/setting" component={Index_setting}/>

          <Route exact path="/reports" component={Index_reports}/>

          
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
