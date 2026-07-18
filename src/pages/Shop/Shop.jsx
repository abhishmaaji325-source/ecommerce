import "./Shop.css";

import products from "../../utils/ProductData";
import ProductCard from "../../components/ProductCard/ProductCard";


const Shop = () => {
  return (
    <section className="shop-page">

      <div className="shop-container">

        <h1>Shop All Products</h1>

        <div className="products-grid">

          {
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }

        </div>

      </div>

    </section>
  );
};

export default Shop;