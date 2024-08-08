import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleconfirm = (event) => {
        event.preventDefault();


        const userData = {
            name, phone, email
        };        

        onConfirm(userData);
    };

    return (
        <div className='container'>
            <form onSubmit={handleconfirm} className='form'>
                <label className='label'>
                    Name:
                    <input className='input' type='text' value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                
                <label className='label'>
                    Phone:
                    <input className='input' type='text' value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                
                <label className='label'>
                    Email:
                    <input className='input' type='email' value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>

                <div className='label'>
                    <button type='submit' className='button'>Create Order</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
