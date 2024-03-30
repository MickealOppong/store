import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Form, Link } from "react-router-dom";

const NewsLetter = () => {
  return <div className="flex flex-col gap-y-4">
    <div className="flex flex-col gap-4">
      <h2 className="uppercase text-base-100">newsletter sign up</h2>
      <h4 className="text-xs py-2 text-gray-300">Receive our latest updates about our products and promotions.</h4>
    </div>

    <Form className="flex gap-x-2">
      <input type="text" placeholder="enter your email address" className=" input input-bordered  marker:placeholder-shown:text-xs bg-base-300 w-80" />
      <button className="btn btn-primary uppercase">submit</button>
    </Form>
    <div className="flex flex-col gap-y-2">
      <h2 className="uppercase text-gray-300">stay connected</h2>
      <div className="flex gap-4">
        <Link to="https://facebook.com" target="_blank"><FaFacebook /></Link>
        <Link to="https://x.com" target="_blank"><FaTwitter /></Link>
        <Link to="https://instagram.com" target="_blank"><FaInstagram /></Link>
        <Link to="https://youtube.com" target="_blank"><FaYoutube /></Link>
      </div>
    </div>
  </div>
}
export default NewsLetter;