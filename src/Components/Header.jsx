import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-main">
      <div className="heading-text">About Signature Properties</div>
      <div>
        <div className="header-content">
          At Signature Properties , we are passionate about helping business harness the
          potential of Instagram Reels. Our Team of experts is dedicated to
          creating captivating and high-quality Reels that will grab the
          attention of your target audience . With our tailored strategies and
          personalized approach we will help you stand out from the competition
          and achieve your business goals.
        </div>

        <img src="./connect.jpg" alt="" className="header-image" />
        <NavLink to={"/contact"} className="contact-us">
          {" "}
          Contact us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
