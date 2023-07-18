import "./deals.scss";
import Offer from "../../components/offer/Offer";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

const Deals = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      {/* hero section */}
      <section className="heroSection">
        <div className="heroContainer">
          <div className="right">
            <img src="public\assets\dealsBannerImg.png" alt="" />
          </div>
          <div className="left">
            <h1>
              Find the <br /> best style <br /> for you
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique odit, culpa ullam aperiam eum, neque illo minima officia
              obcaecati non eos illum, sint nobis!
            </p>
          </div>
        </div>
      </section>
      {/* offer section */}
      <Offer />
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <button className="loadBtn">Load more</button>
        </div>
      </section>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Deals;
