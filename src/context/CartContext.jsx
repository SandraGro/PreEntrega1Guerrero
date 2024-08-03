import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('Product already in cart');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};
