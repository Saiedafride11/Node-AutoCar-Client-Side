import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AllCars from './pages/Home/AllCars/AllCars';
import CarsDetails from './pages/Home/CarsDetails/CarsDetails';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <PrivateRoute path="/car/:carId">
                        <CarsDetails></CarsDetails>
                    </PrivateRoute>
                    <Route path="/cars">
                        <AllCars></AllCars>
                    </Route>
                    <Route path="/cars">
                        <AllCars></AllCars>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
