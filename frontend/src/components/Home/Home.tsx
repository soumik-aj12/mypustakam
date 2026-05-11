import Hero from "./Hero/Hero";
import Picks from "./Picks/Picks";
import BooksCarousel from "./BooksCarousel/BooksCarousel";
import Explore from "./Explore/Explore";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero/>
      <Picks/>
      <BooksCarousel/>
      <Explore/>
      <Newsletter/>
    </>
  );
};

export default Home;
