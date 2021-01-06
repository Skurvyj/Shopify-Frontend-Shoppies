import Home from "./components/Home";
import Nomination from "./components/Nomination";
import Thankyou from "./components/Thankyou";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Switch>
          <Route exact path= "/" component = {Home}/>
          <Route exact path= "/nominations" component = {Nomination}/>
          <Route exact path = "/thankyou" component = {Thankyou}/>
        </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
