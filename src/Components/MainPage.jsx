const MainPage = () => {
  return (
    <div>
      <div className="Main">
        <p>Signature Properties - Your Instagram Reels Expert</p>
        <div>Unlock the Power of Instagram Reels</div>
        <img src="./insta.jpeg" alt="" className="insta-img" />
      </div>

      <div className="second-image">
        <div>
          <img src="/insta2.png" alt="" className="insta-img" />
        </div>
        <div className="second-text">
          <p>FIRST OF ALL</p>
          <p>Welcome To Signature Properties</p>
          <div>
            Discover the ultimate service for running instagram Reels and
            showcasing your brand to the world . With Signature Properties , You can
            captivate your audience , boost engagement , grow your business like
            never before
          </div>
        </div>
      </div>

      <div className="third-image">
        <div className="second-text">
          <p>Our Services</p>
          <p>Welcome To Signature Properties</p>
          <div>
            Discover Our range of services designed to help you create engaging
            and captivating instagram Reels . From Content creation to strategy
            development, we have got you covered.
          </div>
        </div>
        <div>
          <img src="/service.webp" alt="" className="insta-img" />
        </div>
      </div>

      <div className="second-image">
        <div>
          <img src="/about.jpg" alt="" className="insta-img" />
        </div>
        <div className="second-text">
          <p>About Us</p>
          <div>
            At Signature Properties , we are a team of passionate professionals dedicated
            to helping businesses succeed on instagram. With our expertise and
            creativity, we strive to deliver exceptional results for our clients
          </div>
        </div>
      </div>

      <div>
        <div className="unleash">Unleash the Power of Instagram Reels</div>
      </div>

      <div>
      <div className="review">Our Costumer reviews</div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./1stperson.jpeg" alt="" className="carousel-image" />
              <div className="image-content">
                Their Instagram reel running services are top-notch. My content
                went from struggling to get noticed to gaining hundreds of new
                followers and likes. It's been a game-changer for my brand.
                Highly recommend their expert team!"
              </div>
            </div>
            <div className="carousel-item">
              <img src="second.jpeg" alt="" className="carousel-image" />
              <div className="image-content">
                "I'm incredibly impressed with the results The engagement and
                reach have gone through the roof, and it's all thanks to their
                outstanding services. I feel more confident in my social media
                presence, and it's all because of them!"
              </div>
            </div>
            <div className="carousel-item">
              <img src="third.jpeg" alt="" className="carousel-image" />
              <div className="image-content">
                Their Instagram reel running expertise is unmatched. I've tried
                other services before, but none come close to what they offer.
                My reels are getting more likes, shares, and comments, and I owe
                it all to them. Thank you for helping me shine on social media!"
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <div>
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
