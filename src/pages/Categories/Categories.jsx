import "./Categories.css";

import mens from "../../assets/images/mens.png";
import women from "../../assets/images/women.png";
import sneakers from "../../assets/images/sneakers.png";
import lipstick from "../../assets/images/lipstick.png";
import handbag from "../../assets/images/handbag.png";
import kids from "../../assets/images/kids.png";
import accessories from "../../assets/images/accessories.png";
import fashions from "../../assets/images/fashions.png";


const Categories = () => {

  const categories = [
    {
      id: 1,
      name: "Men's Fashion",
      image: mens
    },
    {
      id: 2,
      name: "Women's Fashion",
      image: women
    },
    {
      id: 3,
      name: "Sneakers",
      image: sneakers
    },
    {
      id: 4,
      name: "Beauty",
      image: lipstick
    },
    {
      id: 5,
      name: "Handbags",
      image: handbag
    },
    {
      id: 6,
      name: "Kids",
      image: kids
    },
    {
      id: 7,
      name: "Accessories",
      image: accessories
    },
    {
      id: 8,
      name: "Fashion",
      image: fashions
    }
  ];


  return (
    <section className="categories-page">

      <div className="container">

        <h1>Shop By Categories</h1>

        <p>
          Explore our latest collections and find products you love.
        </p>


        <div className="category-grid">

          {
            categories.map((category)=>(
              <div className="category-card" key={category.id}>

                <img 
                  src={category.image} 
                  alt={category.name}
                />

                <h3>{category.name}</h3>

                <button>
                  Explore
                </button>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  );
};

export default Categories;