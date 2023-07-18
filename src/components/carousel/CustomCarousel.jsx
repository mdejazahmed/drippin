import "./customCarousel.scss"

const CustomCarousel = () => {
   let client=document.getElementById("carousel")

   console.log(client)


   const getWidth=()=>{
    let client=document.getElementById("carousel")
    let width=client.clientWidth
    client.scrollLeft=client.scrollLeft + width
   console.log(width)
   }
  
  return (
    <div className="carouselContainer">
    <button className="navBtn1" onClick={getWidth}>&gt;</button>
    <button className="navBtn2">&lt;</button>

    <div className="carousel" id="carousel">
       <div className="carouselCard">
        df
       </div>
       <div className="carouselCard">
        dfdf
       </div>
       <div className="carouselCard">
        hadffd
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        dfdfd
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
       <div className="carouselCard">
        hello
       </div>
    </div>

    </div>
  )
}

export default CustomCarousel