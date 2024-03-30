import { CiHeart } from "react-icons/ci";
import { FaBars } from 'react-icons/fa';
import { GiSeahorse } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';
const Navbar = () => {
  const itemsInCart = useSelector((state) => state.cartState.itemsInCart)
  return <nav className='flex items-center py-4 bg-primary'>
    <div className='flex justify-evenly items-center w-full px-8'>
      <div className="md:hidden sm:flex drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button"><FaBars /></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar />
        </div>
      </div>
      <div className='flex justify-center'>
        <Link to="" className='text-6xl text-primary '><GiSeahorse /></Link>
      </div>

      <ul className='menu menu-horizontal lg:flex lg:gap-x-2 hidden rounded-box'>
        <NavLinks />
      </ul>
      <div className="hidden lg:flex text-gray-200 font-semibold lg:items-center">
        <NavLink to="favourite" className="btn btn-ghost text-xl "><CiHeart /></NavLink>
        <div className="relative">
          <NavLink to="/cart" className="btn btn-ghost text-xl " ><MdOutlineShoppingBag />
            <span className="absolute top-1 right-1 border-2 w-6 h-6 rounded-full bg-white text-gray-600 text-sm">{itemsInCart}</span>
          </NavLink>
        </div>
      </div>

    </div>
  </nav>
}
export default Navbar;