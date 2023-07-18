import "./contact.scss";
import Navbar from "../../components/navbar/Navbar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DraftsIcon from "@mui/icons-material/Drafts";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactBanner">
        <Navbar />
      </div>
      <div className="contactWrapper">
        <div className="floatDiv">
          <h1>Get in touch</h1>
          <div className="formContainer">
            <p>
              Join our fashion community and stay connected with the latest
              trends, fashion tips, and exclusive offers.
            </p>
            <div className="mediaContainer">
              <form action="">
                <div className="nameContainer">
                  <input
                    type="text"
                    className="firstName"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    className="firstName"
                    placeholder="Last name"
                  />
                </div>
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Contact" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                ></textarea>
                <button>Send</button>
                <button className="discardBtn">Discard</button>
              </form>
              <div className="ourSocial">
                <h1>Our Socials</h1>
                <div className="iconCard">
                  <div className="iconContainer">
                    <FacebookRoundedIcon className="icon" />
                    <p>
                      @drippin <br />
                      Follow us on Facebook
                    </p>
                  </div>
                  <hr />
                  <div className="iconContainer">
                    <InstagramIcon className="icon" />
                    <p>
                      @@drippin <br />
                      Follow us on Instagram
                    </p>
                  </div>
                  <hr />
                  <div className="iconContainer">
                    <LinkedInIcon className="icon" />
                    <p>
                      @drippin <br />
                      Follow us on Linkedin
                    </p>
                  </div>
                </div>
                <img src="public/assets/contactImg.png" alt="" />
                <div className="supportCard">
                  <h1>Support</h1>
                  <p>
                    <LocationOnIcon />
                    114/313,xyz building, XYZ nagar Raipur(C.G.)
                  </p>
                  <p>
                    <DraftsIcon />
                    support@drippin.com
                  </p>
                  <p>
                    <LocalPhoneIcon />
                    +91 1234567890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>Join our fashion community and stay connected with the latest trends, fashion tips, and exclusive offers. Follow us on social media and subscribe to our newsletter to be the first to know about new arrivals, seasonal collections, and exciting promotions.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
