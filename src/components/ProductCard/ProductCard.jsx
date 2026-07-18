import "./ProductCard.css";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  const [added, setAdded] = useState(false);


  const handleAdd = () => {

    addToCart();

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);

  };


  return (
    <div className="product-card">

      <div className="product-image">

        <img 
          src={product.image} 
          alt={product.name} 
        />

        <button className="wishlist-btn">
          <FaHeart />
        </button>

      </div>


      <div className="product-details">

        <span className="product-category">
          {product.category}
        </span>


        <h3>
          {product.name}
        </h3>


        <div className="rating">

          <FaStar />

          <span>
            {product.rating}
          </span>

        </div>


        <div className="product-bottom">

          <h4>
            ₹{product.price}
          </h4>


          <button 
            onClick={handleAdd}
            className={added ? "added-btn" : ""}
          >

            <FaShoppingCart />

            {added ? "Added ✓" : "Add"}

          </button>


        </div>


      </div>


    </div>
  );
};

export default ProductCard;