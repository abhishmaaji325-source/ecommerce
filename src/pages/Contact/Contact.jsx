import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">

      <div className="contact-container">

        <h1>
          Contact Us
        </h1>

        <p className="contact-text">
          Have questions about products or orders?
          <br />
          Our team is ready to help you.
        </p>


        <div className="contact-content">


          <div className="contact-info">


            <div className="info-card">
              <h3>✉ Email</h3>
              <p>
                support@fashionstore.com
              </p>
            </div>


            <div className="info-card">
              <h3>💬 Support</h3>
              <p>
                We reply within 24 hours.
              </p>
            </div>


            <div className="info-card">
              <h3>🕒 Working Hours</h3>
              <p>
                Mon - Sat: 9 AM - 6 PM
              </p>
            </div>


          </div>



          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />


            <input
              type="email"
              placeholder="Your Email"
            />


            <input
              type="text"
              placeholder="Subject"
            />


            <textarea
              placeholder="Your Message"
            ></textarea>


            <button>
              Send Message
            </button>

          </form>


        </div>

      </div>

    </section>
  );
};

export default Contact;