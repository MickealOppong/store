import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Form, Link, redirect, useNavigate, useNavigation } from "react-router-dom";
import { loginUser } from "../features/user/userSlice";
import { customFetch } from "../util";
export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local', data);
    const token = response.data.jwt;
    const user = response.data.user;
    store.dispatch(loginUser(response.data))
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('jwt', token);
    return redirect('/')
  } catch (error) {
    console.log(error);
    return null;
  }
}
const Login = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isLoading = navigation.state === 'submitting';

  const guestLogin = async () => {
    const data = {
      identifier: 'test@test.com',
      password: 'secret'
    }
    try {
      const response = await customFetch.post('/auth/local', data);
      const user = response.data.user;
      const token = response.data.jwt;
      dispatch(loginUser(response.data))
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('jwt', token);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return <section className="max-w-md mx-auto mt-36  border-2 p-12">
    <div className="text-3xl mb-12 uppercase">
      <h2 className="text-base">login</h2>
    </div>
    <Form className="form-control flex flex-col gap-y-8" method="post">
      <label className="input input-bordered flex items-center gap-2">
        <CiUser />
        <input type="text" className="grow h-8 caret-c-3 outline-none" placeholder="Email" name="identifier" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <RiLockPasswordLine />
        <input type="password" className="grow h-8 outline-none" placeholder="Password" name="password" />
      </label>
      <div>
        <button className="bg-primary text-gray-300 w-full h-12 uppercase rounded-md " >
          {isLoading ? <span className="loading loading-spinner text-accent"></span> : ' login'}
        </button>
      </div>
    </Form>
    <div className="mt-4">
      <button className="bg-secondary text-gray-300 w-full h-12 uppercase rounded-md" onClick={() => guestLogin()}>login as guest</button>
    </div>
    <div className="flex gap-x-1 mt-6">
      <p className="text-accent">Not yet registered?</p>
      <Link to='/register' className="text-secondary font-semibold hover:underline">Register</Link>
    </div>
  </section>
}
export default Login;