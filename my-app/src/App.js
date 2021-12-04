import './App.css';
import AddProductComponent from './components/AddProductComponent';
import Navbar from './components/Navbar';

import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="form">
        <Switch>
          <Route path="/addProduct" component={AddProductComponent} />

        </Switch>
      </div>
    </div>
  );
}

export default App;
