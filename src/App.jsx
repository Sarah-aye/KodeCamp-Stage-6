import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import TopHeader from "./components/topHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/login";
import WishList from "./components/wishList";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import NotFoundPage from "./components/notFound";

// bhjjoooigfdsdghjj

function App() {
  return (
    <>
      <div className="flex-1">
        <TopHeader />
        <br />
        <Header />
        <hr className="w-full border-0 border-t border-gray-300 mt-4 sm:mt-5 lg:mt-6" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
