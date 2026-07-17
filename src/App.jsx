import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'

import Layout from "./components/customer/layout/Layout"
import Home from './components/customer/pages/Home'
import Contact from "./components/customer/pages/Contact"
import Cart from "./components/customer/pages/Cart";
import Checkout from "./components/customer/pages/Checkout";
import BrowseCategory from "./components/customer/category/BrowseCategory";
import BrowseProduct from "./components/customer/product/BrowseProduct";

// import Login from './components/customer/login/Login'

import AdminLayout from './components/admin/layout/AdminLayout'
import About from "./components/customer/pages/About"
import Dashboard from "./components/admin/pages/Dashboard"
// category

import ManageCategory from "./components/admin/category/ManageCategory"
import AddCategory from "./components/admin/category/AddCategory"
import EditCategory from "./components/admin/category/EditCategory"
// product

import ManageProduct from "./components/admin/product/ManageProduct"
import AddProduct from "./components/admin/product/AddProduct"
import EditProduct from "./components/admin/product/EditProduct"




function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/category" element={<BrowseCategory />} />
            <Route path="/product" element={<BrowseProduct />} />
            {/* <Route path='/login' element={<Login/>}></Route> */}
          </Route>

          {/* admin */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='' element={<Dashboard />}></Route>
            <Route path='categories' element={<ManageCategory />}></Route>
            <Route path='category/add' element={<AddCategory />}></Route>
            <Route path='category/edit/:id' element={<EditCategory />}></Route>


            {/* Product */}
            <Route path="product" element={<ManageProduct />} />
            <Route path="product/add" element={<AddProduct />} />
            <Route path="product/edit/:id" element={<EditProduct />} />


          </Route>

        </Routes>
      </BrowserRouter>


      <ToastContainer />

    </>
  )
}

export default App
