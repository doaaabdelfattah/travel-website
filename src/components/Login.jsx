import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoginUser } from '../redux/reducers/AuthSlice';



const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Define the error state

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);

    const handleClick = () => {
        navigate('/Register');
    };

    const handleLoginClick = async (e) => {
        e.preventDefault();
        dispatch(LoginUser({  email, password }));
        console.log('login success');
        navigate('/');
    };
    return (
        <div className="h-[450px] flex items-center justify-center mt-[70px] rtl">
        
            <div className="p-6 max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center text-[#C6783E] mb-5">Login</h2>
                <p className="text-gray-400 p-2">Please enter your details to login.</p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleLoginClick}>
                    <div className="mb-6 relative">
                        <FaEnvelope className="absolute left-3 top-3 text-black" />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6783E] transition-colors"
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-6 relative">
                        <FaLock className="absolute left-3 top-3 text-black" />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6783E] transition-colors"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#C6783E] text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <button onClick={handleClick} className="text-[#C6783E] hover:underline">
                            Register now
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;