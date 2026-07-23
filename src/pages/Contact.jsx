import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have a question or need help? Reach out to us.</p>

      <div className="contact__grid">
        <div className="contact__info">
          <h2>Get in Touch</h2>
          <ul>
            <li><strong>Phone</strong> +49 152 59965457</li>
            <li><strong>Location</strong> 60528 Frankfurt am Main</li>
          </ul>
          <h2>Hours</h2>
          <ul>
            <li>Mon - Fri: 9am - 6pm</li>
            <li>Sat: 10am - 4pm</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
