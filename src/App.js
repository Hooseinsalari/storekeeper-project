import "./App.css";
import AddProductComponent from "./components/AddProductComponent";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:3001/product")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="form">
        <Switch>
          <Route
            path="/addProduct"
            component={(props) => (
              <AddProductComponent data={data} setData={setData} {...props} />
            )}
          />
          <Route
            path="/"
            component={(props) => (
              <Products data={data} setData={setData} {...props} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
