import Image from "next/image"

export default function Hero(){
    return(
      <div className="homepage-container">
        <main className="hero">
            <div className="text-container">
              <div className="tag">New Arrival</div>
              <h1 className="title">Discover Our New Collection</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="cta-button">Buy Now</button>
            </div>
            <div className="image-container">
              <Image src="chair and plant.jpeg" alt="Chair and Plant" />
            </div>
          </main>
      </div>
    )
  }