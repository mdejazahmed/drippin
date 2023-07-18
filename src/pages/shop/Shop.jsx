import Navbar from "../../components/navbar/Navbar"
import Search from "../../components/search/Search"
import "./shop.scss"
import Card from '../../components/card/Card'
import Footer from "../../components/footer/Footer"

const Shop = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      {/* hero section */}
      <section className="heroSection">
       <Search/>
      </section>
      {/* cards sectoion */}
      <section className="shop">
        <div className="cardContainer">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <button className="learnMore">Learn more</button>
        <p>Join our fashion community and stay connected with the latest trends, fashion tips, and exclusive offers. Follow us on social media and subscribe to our newsletter to be the first to know about new arrivals, seasonal collections, and exciting promotions.</p>
        <button className="contactBtn">Get in touch</button>
      </section>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Shop