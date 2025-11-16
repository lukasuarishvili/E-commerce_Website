import { useState, useEffect, useContext, createContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";



// pages
import HomePage from "./pages/HomePage";
import ProductDetailPages from './pages/ProductDetailPage'
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";

// context
export let productContext = createContext();


function App() {

  let [chosenProduct, setChosenProduct] = useState(
    {
      "mainImgSrc": "http:asfafasf//img-main-2.jpg",
      "imgList": [
        "public/id2-1.jpg",
        "public/id2-2.jpg",
        "public/id2-3.jpg"
      ],
      "title": "Modern T-shirts for Gym Look",
      "rate": 4,
      "price": 137,
      "dressStyle": "Gym",
      "clothesType": "T-shirts",
      "desc": "This t-shirts is perfect for a gym outfit. Made from a high-quality, breathable fabric, it ensures all-day comfort.",
      "colorList": [
        "pink",
        "purple",
        "yellow"
      ],
      "sizeList": [
        "small",
        "medium",
        "large",
        "x-large"
      ],
      "reviews": [
        {
          "name": "User 695",
          "desc": "Very satisfied with the purchase!",
          "tim": "03.06.2024",
          "rating": 5
        },
        {
          "name": "User 977",
          "desc": "The quality is excellent, highly recommend.",
          "tim": "03.03.2024",
          "rating": 4
        }
      ],
      "id": 2
    });

  let [cartItems, setCartitems] = useState([])

  return (
    <>
      <productContext.Provider value={{ chosenProduct, setChosenProduct, cartItems, setCartitems }}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/Product" element={<ProductDetailPages />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Categorys" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </productContext.Provider>
    </>
  );
}
  
export default App;
