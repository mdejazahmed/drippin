import "./banner.scss";
import Navbar from "../navbar/Navbar";

const Banner = (props) => {
  const className=props.reverse?"reverse":""
  return (
    <div className="banner">
      <div className={`bannerWraper ${className}`}>
      <Navbar/>
        <img src={props.imgUrl} alt="" />
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Banner;
