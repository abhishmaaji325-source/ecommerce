import "./Deals.css";
import products from "../../utils/ProductData";
import ProductCard from "../ProductCard/ProductCard";

const Deals = () => {

  return (
    <section className="deals">

      <h2>Today's Deals</h2>

      <div className="deal-products">
        {
          products.slice(0,4).map((product)=>(
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>

    </section>
  )
}

export default Deals;