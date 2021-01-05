import Home from "./components/Home";
import Nomination from "./components/Nomination";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path= "/" component = {Home}/>
          <Route path= "/nominations" component = {Nomination}/>
        </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
