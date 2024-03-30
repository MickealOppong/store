import { carousel } from "../util/data";
const Carousel = () => {


  return <>{
    carousel.map((item) => {
      return <div className="carousel-item" key={item.id} >
        <img src={item.img} className="w-96 h-[60vh]" />
      </div>
    })
  }
  </>
}
export default Carousel;