import "./bag.scss";
import Banner from "../../components/banner/Banner";

import Footer from "../../components/footer/Footer"
import PaymentSummery from "../../components/paymentSummery/PaymentSummery";

const itemList = [
  {
    id: 1,
    price: "$100",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665321/samples/ecommerce/accessories-bag.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium saepe perspiciatis corrupti repellat!",
  },
  {
    id: 2,
    price: "$120",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665320/samples/ecommerce/leather-bag-gray.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium saepe perspiciatis corrupti repellat!",
  },
  {
    id: 3,
    price: "$20",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665316/samples/ecommerce/shoes.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium saepe perspiciatis corrupti repellat!",
  },
  {
    id: 4,
    price: "$124",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665320/samples/ecommerce/car-interior-design.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium saepe perspiciatis corrupti repellat!",
  },
  {
    id: 5,
    price: "$50",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665312/samples/ecommerce/analog-classic.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium saepe perspiciatis corrupti repellat!",
  },
  {
    id: 6,
    price: "$620",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665315/samples/food/pot-mussels.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium saepe perspiciatis corrupti repellat!",
  },
];

const bag = () => {
  return (
    <div className="mainContainer">
      <Banner name="My Bag" imgUrl="public/assets/bagBannerImg.png" />
      <div className="wrapper">
      <div className="bag">
        <div className="left">
          {itemList.map((each) => (
            <div key={each.id} className="itemContainer">
              <img src={each.imgUrl} alt="" />

              <div className="itemContainerRight">
                <div className="top">
                  <p>{each.price}</p>
                  <button>-</button>
                </div>
                <p className="desc">{each.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="right">
          <img src="public/assets/bagImg.png" alt="" />
        </div>
      </div>
      <hr />
      <PaymentSummery/>
      </div>
      <Footer/>
    </div>
  );
};

export default bag;
