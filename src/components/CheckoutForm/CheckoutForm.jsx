import { useState } from 'react';
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        };        

        onConfirm(userData);
    };

    const isFormValid = () => {
        return name.trim() !== '' && phone.trim() !== '' && email.trim() !== '';
    };

    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='form modal-content'>
                <label className='label'>
                    Name:
                    <input 
                        className='form-control' 
                        type='text' 
                        value={name} 
                        onChange={({ target }) => setName(target.value)} 
                    />
                </label>
                
                <label className='label'>
                    Phone:
                    <input 
                        className='form-control' 
                        type='text' 
                        value={phone} 
                        onChange={({ target }) => setPhone(target.value)} 
                    />
                </label>
                
                <label className='label'>
                    Email:
                    <input 
                        className='form-control' 
                        type='email' 
                        value={email} 
                        onChange={({ target }) => setEmail(target.value)} 
                    />
                </label>

                <div className='label'>
                    <button 
                        type='submit' 
                        className='button btn btn-primary'
                        disabled={!isFormValid()}
                    >
                        Create Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
