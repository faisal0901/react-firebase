import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Components/Login"
import Register from "./Components/Register"
function App() {

  return (
    <>
      <Router>
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
      </Router>
    </>
  );
}

export default App;
