import { CgFormatSlash } from "react-icons/cg";
import { Link } from "react-router-dom";
const NavHeader = ({ text }) => {
  return <div className="px-8 lg:px-32 flex items-center">
    <Link to='/' className="capitalize link link-primary link-hover">home</Link>
    <CgFormatSlash className="link link-primary
      " />
    <Link to='/products' className="capitalize link link-primary link-hover">{text}</Link>
  </div>
}
export default NavHeader