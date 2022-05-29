import React from 'react';
import './Cart.css'

const Cart = ({cart, setCart, handleRemoveFromCart}) => {   
    //  condition rendering options
    // 1. element variable
    // 2. Ternary operator
    // 3. && operator (shorthand)
    // 4. || operator

    
    let command;
    if(cart.length === 0){
        command = <p>Please add at least one item</p>
    }else if(cart.length > 0){
        command = <p>thanks for adding...</p>
    }
    else{
        command = <p><small>Thanks for adding item.s</small></p>
    }
    
    const randomChoose = () =>{  
        let randomItem = cart[Math.floor(Math.random()*cart.length)];
        setCart([randomItem]);
    }

    return (
        <div className='cart'>
            <h3>Selected Laptop</h3>
           
             {
                 cart.map(item => (
                    <div key={item.id}>
                      <p>{item.name}
                      <button onClick={() => handleRemoveFromCart(item)}>X</button>
                      </p>
                    </div>

                 ))
             }
             {
                 cart.length === 0 || <p className='orange'>YAY..! You are buying</p>
             }
             {cart.length === 3 && <div className='orange'> <h3>3 jon ke diba naki</h3> </div>}
              {command}
              {cart.length !== 4 ? <p>Keep adding.. </p> : <button>clear all</button> }
           <button onClick={randomChoose}>Choose 1 for me</button><br />
           <button onClick={() => setCart([])}>Choose again</button>
        </div>
    );
};

export default Cart;