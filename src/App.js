import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import initializationAuthentication from "./Firebase/firebase.initialize";
import Home from "./Firebase/Home/Home";
import Header from "./Header/Header";
import Login from "./Login/Login";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Register from "./Register/Register";
import Shiping from "./Shiping/Shiping";

initializationAuthentication();

function App() {
  return (
    <div className="container">
      <h3>Hello</h3>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/shiping">
              <Shiping></Shiping>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
