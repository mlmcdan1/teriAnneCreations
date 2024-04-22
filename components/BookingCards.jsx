// components/BookingCard.jsx
import React from 'react';

const BookingCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4">
            <img className="w-full h-64 object-cover object-center" src="/BookingImages/balloons.jpeg" alt="Booking Image" />
            <div className="py-4 px-6">
            <h2 className="text-lg font-semibold text-gray-800">Balloons</h2>
            <p className="mt-2 text-sm text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4">
            <img className="w-full h-64 object-cover " src="/BookingImages/photobooth.jpeg" alt="Booking Image" />
            <div className="py-4 px-6">
            <h2 className="text-lg font-semibold text-gray-800">PhotoBooth</h2>
            <p className="mt-2 text-sm text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4">
            <img className="w-full h-64 object-cover object-center" src="/BookingImages/balloonPhotoBooth.jpeg" alt="Booking Image" />
            <div className="py-4 px-6">
            <h2 className="text-lg font-semibold text-gray-800">Balloons & PhotoBooth</h2>
            <p className="mt-2 text-sm text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  );
};

export default BookingCard;