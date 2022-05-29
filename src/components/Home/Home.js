import React, { useEffect, useState } from "react";
import useLaptops from "../../hooks/useLaptops";
import Cart from "../Cart/Cart";
import Laptop from "../Laptop/Laptop";
import "./Home.css";

const Home = () => {
  const [laptops, setLaptops] = useLaptops();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
      const exists = cart.find(laptop => laptop.id === selectedItem.id);
      if(!exists){
          if(cart.length < 4){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
          }else{
              alert('vai tumi 4 tar besi nite parba na')
          }
       
      }else{
          alert('already ace')
      }
  };

  const handleRemoveFromCart = (selectedItem) =>{
      const rest = cart.filter(item => item.id !== selectedItem.id);
      setCart(rest)
  }

  return (
    <div className="home-ui">
      <div className="laptop-container">
        {laptops.map((laptop) => (
          <Laptop
            laptop={laptop}
            key={laptop.id}
            handleAddToCart={handleAddToCart}
          ></Laptop>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} setCart={setCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
