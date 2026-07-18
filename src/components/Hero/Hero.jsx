import "./Hero.css";
import heroImage from "../../assets/images/hero.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      <img
        src={heroImage}
        alt="Fashion Banner"
        className="hero-banner"
      />

      <div className="hero-overlay">

        <span className="hero-tag">
          NEW COLLECTION 2026
        </span>

        <h1>
          Discover Your
          <br />
          <span>Perfect Style</span>
        </h1>

        <p>
          Premium fashion collections designed
          for confidence, comfort and elegance.
        </p>
        <div className="hero-buttons">

  <NavLink to="/shop" className="shop-btn">
    Shop Now
  </NavLink>

  <button className="explore-btn">
    Explore Collection
  </button>

</div>

      </div>

    </section>
  );
};

export default Hero;