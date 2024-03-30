import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { Form, Link } from "react-router-dom";
import { customFetch } from "../util";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customFetch.post('/auth/local/register', data);
    if (response.status === 200) {
      return redirect('/login')
    }

  } catch (error) {
    console.log(error);
    return null;
  }
}

const Register = () => {
  return <section className="max-w-md mx-auto mt-36  border-2 p-12">
    <div className="text-3xl mb-12 uppercase">
      <h2 className="text-base">Sign up</h2>
    </div>
    <Form className="form-control flex flex-col gap-y-8" method="post" >
      <label className="input input-bordered flex items-center gap-2">
        <CiUser />
        <input type="text" className="grow h-8 caret-accent outline-none" placeholder="name" name="username" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <CiUser />
        <input type="text" className="grow h-8 caret-accent outline-none" placeholder="Email" name="email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <RiLockPasswordLine />
        <input type="password" className="grow h-8 outline-none" placeholder="Password" name="password" />
      </label>
      <div>
        <button className="bg-primary text-gray-300 w-full h-12 uppercase rounded-md ">Submit</button>
      </div>
    </Form>
    <div className="flex gap-x-1 mt-6">
      <p className="text-accent">Already have an Account?</p>
      <Link to='/login' className="text-secondary font-semibold hover:underline">Login</Link>
    </div>
  </section>
}
export default Register;