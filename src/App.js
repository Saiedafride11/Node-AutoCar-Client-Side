import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AllCars from './pages/Home/AllCars/AllCars';
import CarsDetails from './pages/Home/CarsDetails/CarsDetails';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import MyOrder from './pages/DashBoard/MyOrder/MyOrder';
import Review from './pages/DashBoard/Review/Review';
import Pay from './pages/DashBoard/Pay/Pay';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import AddProducts from './pages/DashBoard/AddProducts/AddProducts';
import ManageOrder from './pages/DashBoard/ManageOrder/ManageOrder';
import MakeAdmin from './pages/DashBoard/MakeAdmin/MakeAdmin';
import ManageProducts from './pages/DashBoard/ManageProducts/ManageProducts';
import AllClientReview from './pages/Home/AllClientReview/AllClientReview';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Router>
                <Header></Header>
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
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/payment">
                        <Pay></Pay>
                    </Route>
                    <Route path="/order">
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path="/review">
                        <Review></Review>
                    </Route>
                    <Route path="/manageorder">
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route path="/manageproducts">
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path="/addproducts">
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path="/makeadmin">
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path="/reviews">
                        <AllClientReview></AllClientReview>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
