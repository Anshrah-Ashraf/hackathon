import React from 'react';
import Image from 'next/image';

export default function BeautifulRooms() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Our designer `&apos;`s carefully curate a list of beautiful projects that will inspire you.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-lg"
              src="50 1.png"
              alt="Bedroom"
            />
            <Image
              className="w-auto h-64 object-cover rounded-lg"
              src="50 2.png"
              alt="Bedroom"
            />
            <div className="absolute bottom-0 left-0 bg-white px-4 py-2 rounded-br-lg">
            </div>
          </div>
          {/* Add more room images here */}
        </div>

        <div className="mt-8 flex justify-center">
          
            
            <div className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Explore More</div>
            
        </div>
      </div>
    </div>
  );
}