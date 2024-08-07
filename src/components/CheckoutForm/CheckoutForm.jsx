import {useState} from 'react'
import { Checkout } from '../Checkout/Checkout';

const CheckoutForm =({onConfirm}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [ email, setEmail] = useState ('');

    const handleconfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData);
    }
    return (
        <div className='container'>
            <form onSubmit={handleconfirm} className='form'>
                <label className='label'>
                    Name:
                </label>
                <input className='input' type='text' value={phone} onChange={({target}) => setPhone(target.value)}/>
            </form>
        </div>
    )
}

export default CheckoutForm;