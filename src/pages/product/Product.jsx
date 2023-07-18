import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Preview from "../../components/preview/Preview";
import Search from "../../components/search/Search";
import "./product.scss";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../components/card/Card";


const addtionalOffer = [
  {
    id: 1,
    tab: "Offer",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor officia modi voluptates cupiditate aut non eveniet tenetur pariatur.",
  },
  {
    id: 2,
    tab: "View information",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor officia modi voluptates cupiditate aut non eveniet tenetur pariatur.",
  },
  {
    id: 3,
    tab: "Replacement & returns",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor officia modi voluptates cupiditate aut non eveniet tenetur pariatur.",
  },
  {
    id: 4,
    tab: "Product details",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor officia modi voluptates cupiditate aut non eveniet tenetur pariatur.",
  },
];

const responsive = {
  tablet: {
    breakpoint: { max: 1500, min: 769 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Product = () => {
  const [activeTab, setActive] = useState();
  const [descOpen, setOpen] = useState(false);
  return (
    <div className="mainContainer">
      <Navbar />
      {/* hero section */}
      <section className="heroSection">
        <Search />
      </section>
      {/* product */}
      <div className="productPage">
        {/* preview section */}
        <div className="detailContainer">
          <div className="topContainer">
            <Preview />
            <div className="productDetailsContainer">
              <h1 className="productName">Graphic Printed Oversized T-shirt</h1>
              <p className="gender">Men’s</p>
              <div className="previewRatingContainer">
                <img src="public/assets/4star.png" alt="" /> <span>4</span>
              </div>
              <div className="priceContainer">
                <p className="price">$50</p>
                <p className="actualPrice">$100</p>
                <p className="discount">50% OFF</p>
              </div>
              <div className="tagContainer">
                <p className="tag">Oversized</p>
                <p className="tag">100% Cotton</p>
              </div>
              <ul className="sizeContainer">
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <p>Size guide</p>
              </ul>
              <div className="orderContainer">
                <div className="btnContainer">
                  <button className="addToBag">
                    Add to bag <LocalMallOutlinedIcon />
                  </button>
                  <button className="addWishList">
                    Add to wishlist <FavoriteBorderOutlinedIcon />
                  </button>
                </div>
                <button className="buyBtn">Buy now</button>
              </div>
            </div>
          </div>
          <div className="bottomContainer">
            <ul>
              <li>
                <span>DouglasR314587369</span>- 21 Jun 2023
              </li>
              <li>
                These are the best Nikes that I have owned. So comfortable and I
                never want to take them off.
              </li>
              <li>
                <span>Patricia</span>- 20 Jun 2023
              </li>
              <li>
                I normally wear a size 15 D. However these were so narrow that I
                ran out of laces to tie. Felt like they had potential to be my
                most comfortable pair of shoes, however with as narrow as they
                are, did not feel like I was able to settle in correctly....
                More
              </li>
              <li>
                <span>Quiver123 </span>03 Jun 2023 It’s one of the best shoe I
                have had in a long time. I have a bit broad toes and this not
                only works well but also looks great
              </li>
            </ul>
            <div className="productAddress">
              <h1>
                <LocationOnOutlinedIcon />
                Check for delivery address
              </h1>
              <div className="pincode" placeholder="Enter PIN code">
                <input type="text" />
                <button>Check</button>
              </div>
              <p>Enter a valid PIN code </p>
              <ul className="additionalBox">
                {addtionalOffer.map((each) => (
                  <li key={each.id}>
                    <div
                      className="tabName"
                      onClick={() => {
                        setActive(each.id);
                        setOpen(!descOpen);
                      }}
                    >
                      {each.tab}
                      <ArrowForwardIosOutlinedIcon
                        className={
                          activeTab === each.id && descOpen
                            ? "rotateIcon"
                            : "arrowIcon"
                        }
                      />
                    </div>
                    {activeTab === each.id && descOpen ? (
                      <div className="desc">{each.desc}</div>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="returnCard">
          <div className="returnItem">
            <VerifiedOutlinedIcon className="verifyIcon" />
            <p className="cardPara">
              100% secure <br /> payments
            </p>
          </div>
          <hr />
          <div className="returnItem">
            <VerifiedOutlinedIcon className="verifyIcon" />
            <p className="cardPara">
              100% secure <br /> payments
            </p>
          </div>
          <hr />
          <div className="returnItem">
            <VerifiedOutlinedIcon className="verifyIcon" />
            <p className="cardPara">
              100% secure <br /> payments
            </p>
          </div>
        </div>
        {/* rating  */}
        <div className="ratingContainer">
          <h1>Product review</h1>
          <div className="rateContainer">
            <h2>
              4 <StarIcon className="starIcon" />
            </h2>
            <p>
              Based on <br />
              194 ratings and 0 reviews
            </p>
            <button>Rate</button>
          </div>

          <div className="ratings">
            <h1>5</h1>
            <StarIcon className="ratingStar" />
            <div className="ratingBar">
              <div className="fillRating"></div>
            </div>
            <div className="ratingCount">33</div>
          </div>
          <div className="ratings">
            <h1>4</h1>
            <StarIcon className="ratingStar" />
            <div className="ratingBar">
              <div className="fillRating"></div>
            </div>
            <div className="ratingCount">33</div>
          </div>
          <div className="ratings">
            <h1>3</h1>
            <StarIcon className="ratingStar" />
            <div className="ratingBar">
              <div className="fillRating"></div>
            </div>
            <div className="ratingCount">33</div>
          </div>
          <div className="ratings">
            <h1>2</h1>
            <StarIcon className="ratingStar" />
            <div className="ratingBar">
              <div className="fillRating"></div>
            </div>
            <div className="ratingCount">33</div>
          </div>
          <div className="ratings">
            <h1>1</h1>
            <StarIcon className="ratingStar" />
            <div className="ratingBar">
              <div className="fillRating"></div>
            </div>
            <div className="ratingCount">33</div>
          </div>
          <p className="thumbContainer">
            <ThumbUpIcon />
            80% of customers like this product
          </p>
        </div>
        {/* carousel */}
        <div className="similarProducts">
          <div className="left">
            <h1>Similar products</h1>
            <p>
              According to the product you just reviewed, we organized similar
              products for you
            </p>
          </div>
          <div className="right">
          <Carousel responsive={responsive}>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
            </Carousel>
          </div>
          <button className="learnMore">Learn more</button>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Product;
