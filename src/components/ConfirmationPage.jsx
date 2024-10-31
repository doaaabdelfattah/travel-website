import React, { useState } from 'react';
import { FaCreditCard, FaCalendarAlt, FaLock } from 'react-icons/fa';
import RegistrationPopup from './RegisterPopup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ConfirmationPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const { user} = useSelector( (state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleBookingForm = () => {
    setIsPopupOpen(true);
  } 
  
  const closePopup = () => {
    setIsPopupOpen(false);
};
  const handleGoBack = () => {
    navigate('/bookingForm');
  }

  return (
    <>
      <div className="container mx-auto px-2 py-5 mt-[120px]">
        <div className="text-left mb-1">
            <span className="text-3xl font-bold text-[#C6783E]">
        {user ?  (
          <h1>Welcome {user.name} !</h1>
        ) : (
          <h1>Welcome, Guest!</h1>
        )}
      </span>
            <p className="text-gray-600 mt-1">Please fill out this form to complete your order</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="form w-full max-w-lg">
            <form className="flex flex-col gap-3">
              <div className="flex-col gap-1 flex">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="col-span-1 p-3 border border-gray-400 rounded-md"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={ user.name}
                />
                
              </div> 
              <div className="flex-col gap-1 flex">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="col-span-1 p-3 border border-gray-400 rounded-md"
                  name="email"
                  id="email"
                  value={ user.email}
                />
              </div>
              <div className="flex-col gap-1 flex">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="col-span-1 p-3 border border-gray-400 rounded-md"
                  name="phone"
                  value={ user.phone}
                />
              </div>
              <div className="flex-col gap-1 flex">
                <label htmlFor="confirm">Confirm Booking</label>
                <input
                  type="text"
                  placeholder="Type 'CONFIRM' to confirm"
                  className="col-span-1 p-3 border border-gray-400 rounded-md"
                  name="confirm"
                  id="confirm"
                />
              </div>
              <div className="flex-col gap-1 flex">
                <label htmlFor="payment">Payment Method</label>
                <select
                  className="col-span-1  p-3 border border-gray-400 rounded-md"
                  name="payment"
                  id="payment"
                  onChange={handlePaymentChange}
                >
                  <option value="">Select Payment Method</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank-transfer">Bank Transfer</option>
                </select>
              </div>
              {paymentMethod === 'credit-card' && (
                <div className=" flex flex-col  gap-1 ">
                  <label htmlFor="credit-card-number">Credit Card Number</label>
                  <div className="relative">
                    <FaCreditCard className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      className="col-span-1 p-3 pl-10 border border-gray-400 rounded-md"
                      name="credit-card-number"
                      id="credit-card-number"
                      placeholder="Credit Card Number"
                    />
                  </div>
                  <label htmlFor="expiry-date">Expiry Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      className="col-span-1 p-3 pl-10 border border-gray-400 rounded-md"
                      name="expiry-date"
                      id="expiry-date"
                      placeholder="MM/YY"
                    />
                  </div>
                  <label htmlFor="cvv">CVV</label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      className="col-span-1 p-3 pl-10 border border-gray-400 rounded-md"
                      name="cvv"
                      id="cvv"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              )}
              {paymentMethod === 'paypal' && (
                <div className="flex-col gap-1 flex">
                  <label htmlFor="paypal-method">PayPal Method</label>
                  <select
                    className="col-span-1 p-3 border border-gray-400 rounded-md"
                    name="paypal-method"
                    id="paypal-method"
                  >
                    <option value="paypal-balance">PayPal Balance</option>
                    <option value="paypal-credit">PayPal Credit</option>
                  </select>
                </div>
              )}
              {paymentMethod === 'bank-transfer' && (
                <div className="flex-col gap-1 flex">
                  <label htmlFor="bank-method">Bank Transfer Method</label>
                  <select
                    className="col-span-1 p-3 border border-gray-400 rounded-md"
                    name="bank-method"
                    id="bank-method"
                  >
                    <option value="bank-of-america">Bank of America</option>
                    <option value="chase">Chase</option>
                    <option value="wells-fargo">Wells Fargo</option>
                  </select>
                </div>
              )}
              <div className="col-span-2 flex-col gap-1 flex w-full">
                <label htmlFor="note">Note</label>
                <textarea
                  placeholder="Additional Message"
                  className="p-2 border border-gray-400 rounded-md w-full"
                  name="notes"
                ></textarea>
              </div>
            </form>
            <div className="bg-white rounded-lg p- w-[70px] flex space-x-2 h-full mt-2">
              <button onClick={handleGoBack}
              className="bg-black text-white font-semibold py-2 px-4 rounded-md w-full">Back</button>
              <button onClick={handleBookingForm}
              className="bg-[#C6783E] text-white font-semibold py-2 px-4 rounded-md w-full">Next</button>
            </div>
          </div>
        
          <div className="bg-white shadow-md rounded-lg p-6 w-[400px] ml-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trip Details</h2>
            <div className="tripcard bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-[#C6783E] mb-2">Luxor Trip</h3>
                <p className="text-gray-700">Location: Luxor, Egypt</p>
                <p className="text-gray-700">Start Date: 21-12-2020</p>
                <p className="text-gray-700">End Date: 21-12-2020</p>
                <p className="text-gray-700">Number of People: 2</p>
                <p className="text-gray-700">Duration: 30 Minutes</p>
                <p className="text-gray-700">Price: $150</p>
                <div className='bg-gray-400 h-[1px] w-full my-1'></div>
                <p className="text-gray-700 font-bold ">Total Price: <span className='font-normal'>$210</span></p>
            </div>
          </div>
        </div>
        <RegistrationPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </>
  )
}

export default ConfirmationPage;