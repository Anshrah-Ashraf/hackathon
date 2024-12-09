import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="homepage-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <Image src="logo.png" alt="Furniro Logo" />
          <span>Furniro</span>
        </div>
        <nav className="nav-links">
          <Link href="/" passHref>
            Home
          </Link>
          <Link legacyBehavior href="/shop" passHref>
            Shop
          </Link>
          <Link href="/Homee" passHref>
            Blog
          </Link>
          <Link legacyBehavior href="/contact" passHref>
            Contact
          </Link>
        </nav>
        <div className="icons">
          <span>🔍</span>
          <Link legacyBehavior href="/cart" passHref>
          <span>🛒</span></Link>
          <span>❤</span>
        </div>
      </header>
    </div>
  );
}
