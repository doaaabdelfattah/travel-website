import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/reducers/AuthSlice';
import RegistrationPopup from './RegisterPopup';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [phone, setPhone] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false); 

    const handleClick = () => {
        navigate('/Login');
    };

    const handleRegisterClick = async (e) => {
        e.preventDefault();
        dispatch(register({ name, email, password, isAdmin: true }));
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="h-[550px] flex items-center justify-center mt-[70px] rtl">
            <div className="p-6 max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center text-[#C6783E] mb-5">Create Account</h2>
                <p className="text-gray-400 p-2">Please enter your details to create an account.</p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleRegisterClick}>
                    <div className="mb-6 relative">
                        <FaUser className="absolute left-3 top-3 text-black" />
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                            placeholder="Name"
                        />
                    </div>

                    <div className="mb-6 relative">
                        <FaEnvelope className="absolute left-3 top-3 text-black" />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full px-10 py-3 border border-gray-600 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-6 relative">
                        <FaLock className="absolute left-3 top-3 text-black" />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                            placeholder="Password"
                        />
                    </div>
                    {/* <div className="mb-6 relative">
                        <FaLock className="absolute left-3 top-3 text-black" />
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="phone"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                            placeholder="Phone"
                        />
                    </div> */}
                    <button
                        type="submit"
                        className="w-full bg-[#C6783E] text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Loading...' : 'Create Account'}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <button onClick={handleClick} className="text-[#C6783E] hover:underline">
                            Login
                        </button>
                    </p>
                </div>

                {/* Registration Popup */}
                <RegistrationPopup isOpen={isPopupOpen} onClose={closePopup} />
            </div>
        </div>
    );
};

export default Register;