import Hero from "./home/hero";
import Browse from "./home/browse";
import Products from "./home/product";
import BeautifulRooms from "./home/inspirations";
import Share from "./home/share";

export default function Home(){
  return(
    <>
    <Hero />
    <Browse />
    <Products />
    <BeautifulRooms />
    <Share />
    </>
  )
}