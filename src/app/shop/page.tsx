import Link from "next/link";
import Image from "next/image";

export default function Shop() {
  return (
    <div className="">
      {/* Banner */}
      <section className="text-center text-black font-bold text-2[rem] p-4">
        <Image src='shop.jpeg' alt='shop' className='w-[2000px] h-[400px] opacity-[50%]'></Image>
        <h1 className="absolute inset-0 flex items-center justify-center text-black text-[30px] font-bold">Shop</h1>
      </section>

      {/* Product Grid */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Syltherine.png" alt="S" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Syltherine</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 2.500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Syltherine.png" alt="Stylish cafe chair" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Syltherine</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 2.500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Syltherine.png" alt="Stylish cafe chair" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Syltherine</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 2.500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Syltherine.png" alt="Stylish cafe chair" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Syltherine</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 2.500.000</h3>
      </div>
    </a>
  </div>


  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Leviosa.png" alt="Leviosa" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Leviosa</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 2.500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Leviosa.png" alt="Leviosa" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Leviosa</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 2.500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Leviosa.png" alt="Leviosa" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Leviosa</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 2.500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Leviosa.png" alt="Leviosa" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Leviosa</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 2.500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
  <Link legacyBehavior href="/singleProduct" passHref>
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Lolito.png" alt="Lolito" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Lolito</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 7.000.000</h3>
      </div>
    </a> 
    </Link>
  </div>

  <div className="product-card">
  <Link legacyBehavior href="/singleProduct" passHref>
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Lolito.png" alt="Lolito" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Lolito</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 7.000.000</h3>
      </div>
    </a> 
    </Link>
  </div>

  <div className="product-card">
  <Link legacyBehavior href="/singleProduct" passHref>
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Lolito.png" alt="Lolito" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Lolito</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 7.000.000</h3>
      </div>
    </a> 
    </Link>
  </div>

  <div className="product-card">
  <Link legacyBehavior href="/singleProduct" passHref>
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Lolito.png" alt="Lolito" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Lolito</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 7.000.000</h3>
      </div>
    </a>
    </Link>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Respira.png" alt="Respira" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Respira</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Respira.png" alt="Respira" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Respira</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Respira.png" alt="Respira" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Respira</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 500.000</h3>
      </div>
    </a>
  </div>

  <div className="product-card">
    <a href="#" className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <Image src="Respira.png" alt="Respira" className="card-image w-full h-48 object-cover" />
      <div className="card-content p-4 flex-grow flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-gray-800">Respira</h2>
        <h3 className="card-price text-gray-900 font-bold mt-2">Rp 500.000</h3>
      </div>
    </a>
  </div>

</div>




      {/* Pagination */}
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