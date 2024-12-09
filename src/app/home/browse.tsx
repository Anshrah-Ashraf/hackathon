import Image from "next/image";

export default function Browse(){
    return (
      <div className="container">
        <header className="header">
          <h1 className="title">Browse The Range </h1>
        </header>
  
        <main className="main">
          <div className="grid">
            <div className="dining">
              <a className="card">
                <Image src="dining.jpg" alt="Dining" className="cardImage" />
                <h2 className="cardTitle">Dining</h2>
              </a>
            </div>
            <div className="living">
              <a className="card">
                <Image src="living.jpg" alt="Living" className="cardImage" />
                <h2 className="cardTitle">Living</h2>
              </a>
            </div>
            <div className="bedroom">
              <a className="card">
                <Image src="bedroom.jpg" alt="Bedroom" className="cardImage" />
                <h2 className="cardTitle">Bedroom</h2>
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }