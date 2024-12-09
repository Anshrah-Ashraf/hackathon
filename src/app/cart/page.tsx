import Link from "next/link";
import Image from "next/image";


export default function Cart() {
    return (
      <div className="cart-container">
        <main>
          <div className="breadcrumbs">
          <Image src='shop.jpeg' alt='shop' className='w-[2000px] h-[400px] opacity-[50%]'></Image>
            <a href="#" className="absolute inset-0 flex items-center justify-center text-black text-[30px] font-bold">Home {'>'} 🛒 {'>'} Cart</a> 
          </div>
    
          <div className="cart-content">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-info">
                    <Image
                      src="sofa cart.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={60}
                    />
                    <span>Asgaard Sofa</span>
                  </td>
                  <td>Rs. 250,000.00</td>
                  <td>
                    <input type="number" value="1" className="quantity-input" />
                  </td>
                  <td>Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
  
            <div className="cart-totals">
              <h3>Cart Totals</h3>
              <div className="totals-line">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="totals-line">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
              </div>

              <Link legacyBehavior href="/checkout" passHref>
              <button className="checkout-btn">Check Out</button></Link>
            </div>
          </div>
        </main>
  
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