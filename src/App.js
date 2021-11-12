import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Register from './pages/Login/Register/Register';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import UserRoute from './pages/Login/UserRoute/UserRoute';

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
                    <PrivateRoute path="/car/:carId">
                        <CarsDetails></CarsDetails>
                    </PrivateRoute>
                    <Route path="/cars">
                        <AllCars></AllCars>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <UserRoute path="/payment">
                        <Pay></Pay>
                    </UserRoute>
                    <UserRoute path="/order">
                        <MyOrder></MyOrder>
                    </UserRoute>
                    <UserRoute path="/review">
                        <Review></Review>
                    </UserRoute>
                    <AdminRoute path="/manageorder">
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path="/manageproducts">
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path="/addproducts">
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path="/makeadmin">
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path="/reviews">
                        <AllClientReview></AllClientReview>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
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
