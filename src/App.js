import "./App.css";
import AddProductComponent from "./components/AddProductComponent";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./components/Products";


function App() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([
    {
      value: "",
      label: "-- انتخاب --",
    },
    {
      value: "لبنیات",
      label: "لبنیات",
    },
    {
      value: "خشکبار",
      label: "خشکبار",
    },
    {
      value: "تنقلات",
      label: "تنقلات",
    }]);
  const saveData = JSON.parse(localStorage.getItem("data"))

  useEffect(() => {
      if (saveData) setData(saveData)
      const saveCate = JSON.parse(localStorage.getItem("options"))
      setOptions(saveCate)
  }, [])
  
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options))
  }, [options])
  
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="form">
        <Switch>
          <Route path="/statistics" component={(props) => (
            <Statistics data={data} {...props} />
          )} />
          <Route
            path="/addProduct"
            component={(props) => (
              <AddProductComponent data={data} setData={setData} options={options} setOptions={setOptions} {...props} />
            )}
          />
          <Route
            path="/"
            component={(props) => (
              <Products data={data} setData={setData} saveData={saveData} {...props} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
