import React, { FC } from "react";
// import Sidebar from "./components/seller/sidebar";
// import SellerHome from "./pages/seller/home";
// import Myorder from "./pages/seller/myOrder";
// import OrderHistory from "./pages/seller/orderHistory";
// import Myaddress from "./pages/seller/myAddress";
// import { orders } from "./pages/seller/orderdata";
// import { Address } from "./pages/seller/addressData";
// import MyBank, { Account } from "./pages/seller/ฺbankAccount";
// import CustomerReg from "./pages/everyone/signup"
// import CustomerLoginForm, { handleLoginFormSubmit } from "./pages/everyone/login"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/everyone/navbar";
// import Home from "./pages/everyone/home";
// import Product from './pages/everyone/product';

// const App: FC = () => {

//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product/:productId" element={<Product />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;

import Cart from './pages/buyer/cart';

const App: React.FC = () => {
  const shops = [
    {
      id: 1,
      name: 'Shop 1',
    },
    {
      id: 2,
      name: 'Shop 2',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'https://picsum.photos/200',
      variations: ['S', 'M', 'L'],
      quantity: 1,
      ShopID: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://picsum.photos/200',
      variations: ['S', 'M', 'L'],
      quantity: 1,
      ShopID: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      image: 'https://picsum.photos/200',
      variations: ['S', 'M', 'L'],
      quantity: 1,
      ShopID: 2,
    }
  ];

  return (
    <div className="App">
      {shops.map((shop) => (
        <Cart key={shop.id} shop={shop} products={products} />
      ))}
    </div>
  );
};

export default App;
