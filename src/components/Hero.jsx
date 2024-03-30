import { Link } from "react-router-dom";
import Carousel from "./Carousel";
const Hero = () => {
  return <section className="flex max-w-9xl  mx-auto px-8  md:px-16 lg:px-32 gap-x-4 py-12">
    <div className="flex flex-col gap-6 lg:w-1/2">
      <h1 className="text-6xl text-secondary capitalize">we love seahorse</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolorem perspiciatis quibusdam! Neque quae ipsa tempora suscipit excepturi sint in natus expedita, deserunt iusto placeat corporis dolorum necessitatibus odit laudantium?</p>
      <div className="mt-16">
        <Link to="/products" className="btn btn-primary w-36 h-16">shop now</Link>
      </div>
    </div>
    <div className="carousel carousel-end rounded-box w-1/2 hidden lg:flex">
      <Carousel />
    </div>


  </section>
}
export default Hero;