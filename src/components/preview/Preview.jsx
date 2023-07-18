import { useState } from "react";
import "./preview.scss";

const previewImgs = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665321/samples/ecommerce/accessories-bag.jpg",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665320/samples/ecommerce/leather-bag-gray.jpg",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665320/samples/ecommerce/car-interior-design.jpg",
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665316/samples/ecommerce/shoes.png",
  },
];

const Preview = () => {
const [activeSlide,setSlide]=useState(previewImgs[2].imgUrl)

  return (
    <div className="productPreview">
      <div className="productPreviewWrapper">
        <div className="left">
          {previewImgs.map((each) => (
            <div key={each.id} className="slide" onClick={()=>setSlide(each.imgUrl)}>
              <img src={each.imgUrl} alt="" />
            </div>
          ))}
        </div>
        <div className="right">
          <img src={activeSlide}alt="" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
