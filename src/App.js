import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/"  element={<Product/>}/>
          <Route path="/product/:productId" element={<ProductDetail/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
