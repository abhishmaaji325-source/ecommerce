import "./Category.css";
import categories from "../../utils/CategoryData";


const Category = () => {

  return (
    <section className="category">

      <div className="category-container">

        <div className="section-title">

          <h2>
            Shop by Category
          </h2>

          <p>
            Find everything you need in one place.
          </p>

        </div>


        <div className="category-grid">

          {
            categories.map((item)=>(

              <div 
                className="category-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                <h3>
                  {item.name}
                </h3>


              </div>

            ))
          }

        </div>


      </div>

    </section>
  );
};


export default Category;