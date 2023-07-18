import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import "./account.scss";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Account = () => {
  const [activeGender, setGender] = useState("male");

  return (
    <div className="mainContainer">
      <Banner name="My account" imgUrl="public/assets/accountBannerImg.png" />

      <div className="account">
        <div className="banner">
          <div className="imgContainer">
            <img src="public/assets/profilePic.png" alt="" />
          </div>
        </div>
        <div className="accountInfo">
          <form className="accountWrapper">
            <div className="inputDiv">
              <label htmlFor="firstname">First name</label>
              <input type="text" value={"XYZ XYZ"} />
            </div>
            <div className="inputDiv">
              <label htmlFor="firstname">Last name</label>
              <input type="text" value={"XYZ XYZ"} />
            </div>
            <div className="inputDiv">
              <label htmlFor="firstname">Mobile number</label>
              <div className="updateContaienr">
                <input type="text" value={"+91 12345 67890"} />
                <span>update</span>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="firstname">Email ID</label>
              <div className="updateContaienr">
                <input type="email" value={"xyz123@gmail.com"} />
                <span>update</span>
              </div>
            </div>
          </form>
          <div className="profileContainer">
            <img
              src="public/assets/male.png"
              alt=""
              className={activeGender === "male" ? "active" : ""}
              onClick={() => setGender("male")}
            />
            <img
              src="public/assets/female.png"
              alt=""
              className={activeGender === "female" ? "active" : ""}
              onClick={() => setGender("female")}
            />
          </div>
          <div className="deactivate">
            <p>Deactivate account</p>
            <KeyboardArrowRightOutlinedIcon />
          </div>
          <div className="deactivate">
            <p>Delete account</p>
            <KeyboardArrowRightOutlinedIcon />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
