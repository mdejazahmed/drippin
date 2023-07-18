import Timer from "../timer/Timer"
import "./offer.scss"

const Offer = () => {
  return (
    <section className="dealSec">
        <div className="dealSecWrapper">
          <div className="dealSecTop">
            <div className="dealSecLeft">
              <h1>Deal of the day...</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                odit eius porro consequuntur modi laboriosam non.
              </p>
              <h2>$100</h2>
              <p className="h2para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                mollitia beatae optio.
              </p>
              <Timer />
            </div>
            <div className="dealSecRight">
              <img src="https://res.cloudinary.com/dxxh8iica/image/upload/v1661665320/samples/ecommerce/leather-bag-gray.jpg" alt="productImg" />
              <button>Buy now</button>
            </div>
          </div>
          <p className="dealSecPara">
            Join our fashion community and stay connected with the latest
            trends, fashion tips, and exclusive offers. Follow us on social
            media and subscribe to our newsletter to be the first to know about
            new arrivals, seasonal collections, and exciting promotions.
          </p>
          <button>Get in touch</button>
        </div>
      </section>
  )
}

export default Offer