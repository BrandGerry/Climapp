import React from "react"
import{BrowserRouter,Switch, Route} from "react-router-dom"

//VIEWS
import Home from  "./Pages/Home/Home"
import Weatherinformation from "./Pages/WeatherInformation/Weatherinformation"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/weather/:name" exact>
          <Weatherinformation/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
