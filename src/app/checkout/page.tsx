import Image from "next/image";

export default function BillingDetails() {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-2000px mx-auto px-4 sm:px-6 lg:px-8">

      <div className="breadcrumbs">
          <Image src='shop.jpeg' alt='shop' className='w-[2000000px] h-[400px] opacity-[50%]'></Image>
            <a href="#" className="absolute inset-1 flex items-center justify-center text-black text-[30px] font-bold">Home {'>'} 🛒 {'>'} Cart {'>'} CheckOut</a> 
          </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Billing details</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
              Company Name (optional)
            </label>
            <input
              type="text"
              id="company-name"
              name="company-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country / Region
            </label>
            <select
              id="country"
              name="country"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>United States</option>
              <option>UK</option>
              <option>Pakistan</option>
              <option>India</option>
              <option>Phillipines</option>
              <option>Nigeria</option>
              <option>France</option>
              <option>Muscat</option>
              <option>Guana</option>

            </select>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Street address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Town / City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
              Province
            </label>
            <select
              id="province"
              name="province"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Western Province</option>
              <option>Eastern Province</option>
            </select>
          </div>

          <div>
            <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700">
              ZIP code
            </label>
            <input
              type="text"
              id="zip-code"
              name="zip-code"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Place order
            </button>
          </div>
        </form>
      </div>

      <footer>
          <p className="text-black font-extrabold bg-slate-200"> 2024 Furniro</p>
        </footer>

        <div className="text-center mt-[20px]">
        <button className="m-[0_5px] p-[5px_10px] border border-[#ddd] bg-white cursor-pointer hover:bg-[#ddd]">1</button>
        <button className="m-[0_5px] p-[5px_10px] border border-[#ddd] bg-white cursor-pointer hover:bg-[#ddd]">2</button>
        <button className="m-[0_5px] p-[5px_10px] border border-[#ddd] bg-white cursor-pointer hover:bg-[#ddd]">3</button>
        <button className="m-[0_5px] p-[5px_10px] border border-[#ddd] bg-white cursor-pointer hover:bg-[#ddd]">Next</button>
      </div>

    <div className="flex justify-around items-center p-5 bg-[#fdf8ef] border-t border-b border-gray-300">
      <div className="text-center max-w-[200px]">
        <Image src="trophy 1.png" alt="High Quality" className="w-[40px] h-[40px] mb-[10px]" />
        <h4 className="text-[16px] my-[5px] text-[#333]">High Quality</h4>
        <p className="text-[14px] text-[#666] m-0">crafted from top materials</p>
      </div>
      <div className="feature">
        <Image src="guarantee.png" alt="Warranty Protection" className="feature-icon" />
        <h4 className="text-[16px] my-[5px] text-[#333]">Warranty Protection</h4>
        <p className="text-[14px] text-[#666] m-0">Over 2 years</p>
      </div>
      <div className="feature">
        <Image src="shipping.png" alt="Free Shipping" className="feature-icon" />
        <h4 className="text-[16px] my-[5px] text-[#333]">Free Shipping</h4>
        <p className="text-[14px] text-[#666] m-0">Order over 150 $</p>
      </div>
      <div className="feature">
        <Image src="customer-support.png" alt="24/7 Support" className="feature-icon" />
        <h4 className="text-[16px] my-[5px] text-[#333]">24 / 7 Support</h4>
        <p className="text-[14px] text-[#666] m-0">Dedicated support</p>
      </div>
      </div>
    </div>
  );
}