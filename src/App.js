import { Link, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import ShopProvider from "./context/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <div className="bg-slate-900 text-slate-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <footer> &copy; Mahmud | All rights reserved.</footer>
      </div>
    </ShopProvider>
  );
}

export default App;
