import { FaBars } from 'react-icons/fa';
import { GiSeahorse } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
const Navbar = () => {
  const itemsInCart = useSelector((state) => state.cartState.itemsInCart)
  return <nav className='flex items-center py-4 bg-primary'>
    <div className='flex justify-between lg:justify-evenly items-center w-full px-8'>
      {/* Dropdown*/}
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 lg:hidden"><FaBars /></div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 mt-4">
          <NavLinks />
        </ul>
      </div>
      <div className='flex lg:mr-[35rem]'>
        <Link to="" className='text-6xl text-gray-300 '><GiSeahorse /></Link>
      </div>

      <ul className='menu menu-horizontal lg:flex lg:gap-x-2 hidden rounded-box'>
        <NavLinks />
      </ul>
      <div className="hidden lg:flex text-gray-200 font-semibold lg:items-center">
        {/**
         * 
        <NavLink to="favourite" className="btn btn-ghost text-xl "><CiHeart /></NavLink>
         */}
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