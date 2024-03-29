import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

// Dummy product data
const products = [
  { id: 1, name: 'Product 1', price: 9.99, imageUrl: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Product 2', price: 14.99, imageUrl: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Product 3', price: 19.99, imageUrl: 'https://via.placeholder.com/100' },
];

// Components
const Navigation = ({ cartItems }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Product Catalogue</Link>
      </li>
      <li>
        <Link to="/cart">
        <FaShoppingCart />
          <span style={{ margin: "0px 3px"}} className="cart-count">{cartItems.length}</span>
        </Link>
      </li>
    </ul>
  </nav>
);

const ProductCatalogue = ({ addToCart }) => (
  <div>
    <h1>Product Catalogue</h1>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3 style={{ margin: "auto"}}>{product.name}</h3>
          <p style={{ margin: "auto"}}>Price: ${product.price}</p>
          <button style={{ margin: "8px 0px"}} onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

const Cart = ({ cartItems }) => (
  <div>
    <h1>Cart</h1>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <BrowserRouter>
      <div>
        <Navigation cartItems={cartItems} />
        <Routes>
          
        <Route path="/" element={<ProductCatalogue addToCart={addToCart} />}/>

        <Route path="/cart" element={<Cart cartItems={cartItems} />}/>
                      
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;