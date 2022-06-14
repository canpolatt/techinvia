const Contact = () => {
  return (
    <section className="contact--container">
      <h3>Contact us !</h3>
      <div className="contact--wrapper">
        <div className="contact--input-container">
          <input
            className="contact--input"
            type="text"
            placeholder="Your mail address"
          ></input>
          <button className="contact--button">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
