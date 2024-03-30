import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";
const Header = () => {
  const user = useSelector((state) => state.userState.user)
  const dispatch = useDispatch();

  return <header className="bg-accent flex items-center justify-evenly py-1">
    <div>
      <p className="text-gray-300 uppercase text-xs font-semibold tracking-wide">free shipping with any purchase</p>
    </div>
    <div>
      {
        user ? <div className="flex items-center gap-x-4">
          <label className="text-base-300">Welcome <span className="capitalize">{user.username}</span> </label>
          <button className="border-2 w-auto rounded-md text-base-300 uppercase text-xs p-2" onClick={() => dispatch(logoutUser())}>logout</button>
        </div> : <div className="flex items-center gap-x-4">
          <Link to='/login' className="flex items-center gap-x-1 capitalize text-base-300">
            <span><AiOutlineLogin /></span>
            <span>login</span></Link>
          <Link to='/register' className="capitalize text-base-300">register</Link>
        </div>
      }
    </div>

  </header>
}
export default Header;