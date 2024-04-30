import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/category/jewelery'
      );
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  const addToCart = (id, quantity) => {
    const cartIndex = cart.findIndex((product) => product.id === id);

    if (cartIndex === -1) {
      setCart((prevCart) => [...prevCart, { id, quantity }]);
    } else {
      setCart((prevCart) =>
        prevCart.map((product) => {
          if (product.id === id)
            return { ...product, quantity: product.quantity + quantity };
          return product;
        })
      );
    }
  };

  const editCart = (id, quantity) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((product) => {
        if (product.id === id) return { ...product, quantity };
        return product;
      });

      return newCart.filter((entry) => entry.quantity > 0);
    });
  };

  const handleCheckout = () => {
    alert('Thanks for shopping with us!');
    setCart([]);
    navigate('/');
  };

  const isHome = location.pathname === '/';

  return (
    <div className={`App ${isHome && 'home'}`}>
      <Header isHome={isHome} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              addToCart={addToCart}
              showCart={!!cart.length}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              products={products}
              editCart={editCart}
              handleCheckout={handleCheckout}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
