import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">

        <div className="newsletter-content">

          <h2>Subscribe to Our Newsletter</h2>

          <p>
            Be the first to know about new arrivals, exclusive offers,
            and special discounts.
          </p>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;