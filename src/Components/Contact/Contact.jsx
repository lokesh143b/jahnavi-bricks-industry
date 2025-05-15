import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add your Web3Forms access key
    formData.append("access_key", "c7bc175d-ed97-4509-9eaf-109225fec190");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        console.error("Submission failed:", data);
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Network error. Please check your internet connection.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1>Contact Jahnavi Bricks</h1>
        <p>Reach out to us for quality bricks, bulk orders, or partnership inquiries.</p>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Build Together</h2>
          <p>
            Whether you're a contractor, builder, or distributor, we’re here to supply top-quality bricks.
            Feel free to reach out — our team is happy to assist you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <FiMail size={25} color="#5a1f0f" />
              <p>jahnavigroupbricks@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FiPhone size={25} color="#5a1f0f" />
              <p>+91 94937 77571</p>
            </div>
            <div className="contact-detail">
              <FiMapPin size={25} color="#5a1f0f" />
              <p>Mandapalli, Kothapeta Mandal, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Type your inquiry or message here..."
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
