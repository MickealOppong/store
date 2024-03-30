import { NavLink } from "react-router-dom";
import { navMenu } from "../util/data";
const NavLinks = () => {
  return <>
    {
      navMenu.map((menu) => {
        const { id, url, text } = menu;
        return <li key={id}><NavLink to={url} className="capitalize">{text}</NavLink></li>
      })
    }
  </>
}
export default NavLinks;