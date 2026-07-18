import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <section className="search">
      <div className="search-container">

        <h2>Find Your Favorite Products</h2>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search products..."
          />

          <button>
            <FaSearch />
            Search
          </button>

        </div>

      </div>
    </section>
  );
};

export default SearchBar;