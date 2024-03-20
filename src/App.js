/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Login from './components/Auth/login/login';
import Signup from './components/Auth/signup/signup';
import CustomerDashboard from './components/Customer/dashboard';
import BookDetails from './components/book/desc';
import AuthorDetails from './components/book/author';
import CartComponent from './components/Customer/cart';
import BookingComponent from './components/Customer/booking';
import PreviousOrders from './components/Customer/history';
import About from "./components/Customer/about";
import BookingStatus from './components/Customer/bookingstatus';
import AdminDashboard from './components/Admin/dashboard';
import Navbarcomponent from './components/navbar';
import AddingBook from './components/Admin/addingbooks';
import Addbooks from './components/Admin/addingbooks';
import UpdateComponent from './components/Admin/update';
import DeleteComponent from './components/Admin/delete';
import VSComponent from './components/Admin/viewstatus';
import BookingPage from './components/Customer/order';

function App() {
  const [cart, setCart] = React.useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerDashboard cart={cart} setCart={setCart} />} />
        <Route path="/books" element={<BookDetails />} />
        <Route path="/authors" element={<AuthorDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/cart" element={<CartComponent cart={cart} setCart={setCart} />} />
        <Route path="/booking" element={<BookingComponent />} />
        <Route path="/previous_orders/:cid" element={<PreviousOrders />} />
        <Route path="/customer/dashboard/bookingStatus/:id" element={<BookingStatus cart={cart} />} />
        <Route path="/book/cart/:id" element={<CartComponent cart={cart} setCart={setCart} />} />
        <Route path="/admin/add/:id" element={<AddingBook />} />
        <Route path="/admin/dashboard/:id" element={<AdminDashboard />} />
        <Route path="/admin/update/:id" element={<UpdateComponent />} />
        <Route path="/admin/viewstatus/:id" element={<VSComponent />} />
        <Route path="/booking/:cid" element={<BookingComponent />} />
        <Route path="/customer/dashboard/:id" element={<CustomerDashboard cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;

