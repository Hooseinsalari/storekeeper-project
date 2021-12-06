import './App.css';
import AddProductComponent from './components/AddProductComponent';
import Navbar from './components/Navbar';

import {Route, Switch} from "react-router-dom";
import { useState } from 'react';
import Products from './components/Products';

function App() {

  const [data, setData] = useState([])

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="form">
        <Switch>
          <Route path="/addProduct" component={(props) => <AddProductComponent data={data} setData={setData} {...props} />} />
          <Route path="/" component={(props) => <Products data={data} setData={setData} {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
