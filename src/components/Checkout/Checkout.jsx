import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { Timestamp, writeBatch, collection, addDoc, query, where, getDocs, documentId } from 'firebase/firestore';
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        console.log(name, phone, email);

        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];


            const ids = cart.map(prod => prod.id);
            if (ids.length === 0) {
                console.error('No products in the cart to query.');
                setLoading(false);
                return;
            }
            const productsRef = collection(db, 'products');
            const productsQuery = query(productsRef, where(documentId(), 'in', ids));
            const productsAddedFromFirestore = await getDocs(productsQuery);
            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productsAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productsAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Some products are out of stock');
            }
        } catch (error) {
            console.error("Error creating order:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Processing order</h1>;
    }

    if (orderId) {
        return (

            <div>
                <hr/>
                <h3>Order ID: <span>{orderId}</span></h3>
                <hr/>
            </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};
