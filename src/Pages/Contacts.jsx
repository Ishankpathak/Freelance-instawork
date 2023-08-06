const Contacts = () => {
  return (
    <div className="last-contact">
      <div className="last-info">
        <p>Get in Touch</p>
        <div>We would love to hear from you</div>

        <p>Email</p>
        <div>Info@gmail.com</div>

        <p>Address</p>
        <div>3721 Single Street Quincy MA 2109 </div>
      </div>

      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email*
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Message*
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-warning submit">
            Submit
          </button>
        </form>
        <img src="./new-contact.png" alt="" className="contact-new-img" />
      </div>
    </div>
  );
};

export default Contacts;
