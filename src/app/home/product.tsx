import React from 'react';
import Image from 'next/image';

export default function Products() {
  return (
    <div className="text-container">
      <header className="header">
        <h1 className="title">Our Products</h1>
      </header>

      <main className="main">
        <div className="grid">
          <div className="product-card">
            <a href="#" className="card">
              <Image src="Syltherine.png" alt="Syltherine" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Syltherine</h2>
                <p className="card-description">Stylish cafe chair</p>
                <h3 className="card-price">Rp 2.500.000</h3>
                <div className="card-actions">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <button className="btn btn-compare">Compare</button>
                  <button className="btn btn-like">Like</button>
                </div>
              </div>
            </a>
          </div>

          {/* Repeat the same structure for the other product cards */}
          <div className="product-card">
            <a href="#" className="card">
              <Image src="Leviosa.png" alt="Leviosa" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Leviosa</h2>
                <p className="card-description">Stylish cafe chair</p>
                <h3 className="card-price">Rp 2.500.000</h3>
                <div className="card-actions">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <button className="btn btn-compare">Compare</button>
                  <button className="btn btn-like">Like</button>
                </div>
              </div>
            </a>
          </div>

          <div className="product-card">
            <a href="#" className="card">
              <Image src="Lolito.png" alt="Lolito" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Lolito</h2>
                <p className="card-description">Luxury big sofa</p>
                <h3 className="card-price">Rp 7.000.000</h3>
                <div className="card-actions">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <button className="btn btn-compare">Compare</button>
                  <button className="btn btn-like">Like</button>
                </div>
              </div>
            </a>
          </div>

          <div className="product-card">
            <a href="#" className="card">
              <Image src="Respira.png" alt="Respira" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Respira</h2>
                <p className="card-description">Outdoor bar table and stool</p>
                <h3 className="card-price">Rp 500.000</h3>
                <div className="card-actions">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <button className="btn btn-compare">Compare</button>
                  <button className="btn btn-like">Like</button>
                </div>
              </div>
            </a>
          </div>

          <div className="product-card">
            <a href="#" className="card">
              <Image src="Grifo.png" alt="Grifo" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Grifo</h2>
                <p className="card-description">Night Lamp</p>
                <h3 className="card-price">Rp 1.500.000</h3>
                <div className="card-actions">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <button className="btn btn-compare">Compare</button>
                  <button className="btn btn-like">Like</button>
                </div>
              </div>
            </a>
          </div>

          <div className="product-card">
            <a href="#" className="card">
              <Image src="Muggo.png" alt="Muggo" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Muggo</h2>
                <p className="card-description">Small Mug</p>
                <h3 className="card-price">Rp 150.000</h3>
                <div className="card-actions">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <button className="btn btn-compare">Compare</button>
                  <button className="btn btn-like">Like</button>
                </div>
              </div>
            </a>
          </div>
         
          <div className="product-card">
            <a href="#" className="card">
              <Image src="Pinkgy.png" alt="Pinkgy" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Pinkgy</h2>
                <p className="card-description">Cute bed set</p>
                <h3 className="card-price">Rp 7.000.000</h3>
                <div className="card-actions">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <button className="btn btn-compare">Compare</button>
                  <button className="btn btn-like">Like</button>
                </div>
              </div>
            </a>
          </div>

          <div className="product-card">
            <a href="#" className="card">
              <Image src="Potty.png" alt="Potty" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Potty</h2>
                <p className="card-description">Minimalist Flower Pot</p>
                <h3 className="card-price">Rp 500.000</h3>
                <div className="card-actions">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <button className="btn btn-compare">Compare</button>
                  <button className="btn btn-like">Like</button>
                </div>
              </div>
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}