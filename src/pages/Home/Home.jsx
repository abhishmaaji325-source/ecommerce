import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import Newsletter from "../../components/Newsletter/Newsletter";

import "./Home.css";

const Home = () => {
  return (
    <main>
      <Hero />
      <Category />
      <Newsletter />
    </main>
  );
};

export default Home;