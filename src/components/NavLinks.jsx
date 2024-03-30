import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navMenu } from "../util/data";
const NavLinks = () => {
  const user = useSelector((state) => state.userState.user)
  return <>
    {
      navMenu.map((menu) => {
        const { id, url, text } = menu;
        if ((url === 'checkout' || url === 'orders') && !user) return
        return <li key={id}><NavLink to={url} className="capitalize">{text}</NavLink></li>
      })
    }
  </>
}
export default NavLinks;