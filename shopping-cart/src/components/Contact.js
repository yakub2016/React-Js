import '../styles/Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <p data-testid="paragraph">
        We're here to assist you with any questions, concerns, or inquiries you
        may have. At Jewelry Heaven, we value your feedback and are committed to
        providing excellent customer service. Please don't hesitate to reach out
        to us through the following channels:
      </p>
      <h3>Customer Support Email:</h3>
      <p data-testid="paragraph">
        For general inquiries, product information, or assistance with your
        order, please contact our customer support team at [support@email.com].
        We strive to respond to all emails within 24 hours.
      </p>
      <h3>Phone Support:</h3>
      <p data-testid="paragraph">
        If you prefer to speak with a member of our team directly, you can reach
        us at [Phone Number]. Our customer support representatives are available
        during our business hours, [Business Hours], to provide prompt
        assistance.
      </p>
      <h3>Visit Our Store:</h3>
      <p data-testid="paragraph">
        If you're in the [Location/City] area or planning a visit, we'd love to
        welcome you to our physical store. Our address is [Store Address], where
        you can explore our jewelry collections in person and receive
        personalized assistance from our friendly staff.
      </p>
    </div>
  );
}

export default Contact;
