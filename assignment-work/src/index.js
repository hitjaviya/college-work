import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './Component.js/About';
import AddProduct from './Component.js/AddProduct';
import Cart from './Component.js/Cart';
import Contact from './Component.js/Contact';
import EditProduct from './Component.js/EditProduct';
import Home from './Component.js/Home';
import Layout from './Component.js/Layout';
import { Products } from './Component.js/Products';
import Product_detail from './Component.js/Product_detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter><Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Product_detail/:id' element={<Product_detail/>}/>
            <Route path='/Product/edit/:id' element={<EditProduct/>}/>
            <Route path='/AddProduct' element={<AddProduct/>}/>
            <Route path='/Cart' element={<Cart/>}/>
        </Route>
    </Routes>
    </BrowserRouter>

);
