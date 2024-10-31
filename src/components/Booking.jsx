import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Booking = ({ selectedTour, packagesData }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [tour, setTour] = useState(selectedTour);

  useEffect(() => {
    setTour(selectedTour);
  }, [selectedTour]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_bbqzjtq',
        'template_828oaud',
        form.current,
        'sC3mWIql2tG9q39KF'
      )
      .then(
        () => {
          setLoading(false);
          setEmailSent(true);
          console.log('SUCCESS!');
        },
        (error) => {
          setLoading(false);
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 font-coolvetica   ">
      
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        </div>
      )}

      
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-600 text-center mt-28 mb-6">
          Book Your Perfect Tour
        </h2>

        {!emailSent ? (
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Full Names <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="ex: Mark Devcent"
                  required
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="ex: devcent@gmail.com"
                  required
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="user_contact"
                  placeholder="(+250) 784 023 906"
                  required
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Booking Period <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <input
                    type="date"
                    name="start_date"
                    required
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="date"
                    name="end_date"
                    required
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Which tour are you booking? <span className="text-red-500">*</span>
              </label>
              {selectedTour ? (
                <input
                  type="text"
                  name="tour_selection"
                  value={selectedTour}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-100"
                />
              ) : (
                <select
                  name="tour_selection"
                  required
                  value={tour}
                  onChange={(e) => setTour(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select a tour</option>
                  {packagesData.map((packageItem, index) => (
                    <option key={index} value={packageItem.name}>
                      {packageItem.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center text-bold bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Book Now
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-6">
              Thank you for booking with us!
            </h2>
            <p className="text-gray-700 mb-6">
              We'll get back to you soon to confirm your booking.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;