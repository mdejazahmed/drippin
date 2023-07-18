import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Offer from "../../components/offer/Offer"
import "./home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const Home = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      {/* hero section */}
      <section className="heroSection">
        <div className="heroContainer">
          <div className="left">
            <h1>
              Find the <br /> best style <br /> for you
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique odit, culpa ullam aperiam eum, neque illo minima officia
              obcaecati non eos illum, sint nobis!
            </p>
            <button>Shop now</button>
          </div>
          <div className="right">
            <img src="public\assets\heroImg.png" alt="" />
          </div>
        </div>
      </section>
      {/* search section */}
      <div className="homeSearchSection">
      <Search/>
      </div>
      {/* new collection */}
      <section className="newCollectionSec">
        <div className="topContainer">
          <h1>NEW COLLECTION</h1>
          <p>
            We are passionate about fashion and committed to bringing you the
            latest trends, timeless classics, and style inspiration to help you
            express your unique sense of style.
          </p>
          <div className="cardContainer">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <button className="loadBtn">Load more</button>
        </div>
        <div className="bottomContainer">
          <div className="bottomContainerWrapper">
            <div className="left">
              <img src="https://res.cloudinary.com/dxxh8iica/image/upload/v1661665321/samples/ecommerce/accessories-bag.jpg " alt="" />
              <div className="yellowCard">
              <p>
                since <br /> 2020
              </p>
              <hr />
              <p>
                since <br /> 2020
              </p>
              <hr />
              <p>
                since <br /> 2020
              </p>
            </div>
            </div>
            <div className="right">
              <h1>Best Fashion since 2020</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur voluptatem, quasi doloribus iure, tenetur expedita
                veritatis aperiam cum, culpa repellat harum tempora voluptas
                illo.
              </p>
            </div>
            
          </div>
        </div>
      </section>
      {/* best product */}
      <section className="bestPoductSec">
        <div className="wrapper">
          <div className="left">
            <h1>Best products</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ut
              hic, velit et quae deleniti quam voluptate. Doloribus, debitis
              molestias? Alias ipsum ullam natus. Iure praesentium maxime totam
              expedita a?
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
        </div>
      </section>
      {/* our products */}
      <section className="ourProducts">
        <div className="wrapper">
          <h1>Our Products</h1>
          <p>
            We are passionate about fashion and committed to bringing you the
            latest trends, timeless classics, and style inspiration to help you
            express your unique sense of style.
          </p>
          <div className="productContainer">
            <div className="product">
              <Card />
              <div className="starContainer">
                <img src="public\assets\4star.png" alt="rating" />
              </div>
            </div>
            <div className="product">
              <Card />
              <div className="starContainer">
                <img src="public\assets\4star.png" alt="rating" />
              </div>
            </div>
            <div className="product">
              <Card />
              <div className="starContainer">
                <img src="public\assets\4star.png" alt="rating" />
              </div>
            </div>
            <div className="product">
              <Card />
              <div className="starContainer">
                <img src="public\assets\4star.png" alt="rating" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* deal of the day */}
      <Offer/>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Home;
