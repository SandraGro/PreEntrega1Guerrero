import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { Timestamp, writeBatch } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


export const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const {cart, total, clearCart} = useContext(CartContext);

    const createOrder = async ({name, phone, email}) => {
        setLoading(true);

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db);
            const outOfStock = [];
        } catch (error) {
            console.error("Error creating order:", error);
        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return <h1>Processing order</h1>
    }

    if (orderId) {
        return <h1> Id order : {orderId}</h1>
    }
  return (
    <div>
        <h1> Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
  )
}
