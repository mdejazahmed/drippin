import "./card.scss"
const Card = () => {
  return (
    <div className="card">
        <div className="cardWrapper">
        <img src="https://res.cloudinary.com/dxxh8iica/image/upload/v1661665312/samples/ecommerce/analog-classic.jpg" alt="item" />
            <button className="cardBtn">Buy Now</button>
        </div>
    </div>
  )
}

export default Card