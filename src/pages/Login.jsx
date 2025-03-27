import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { Link, Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useGlobalContext } from "../components/Context";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      "https://mini-project-server-production.up.railway.app/api/login",
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    localStorage.setItem("user", JSON.stringify(response.data.user));

    toast.success(response.data.message);
    console.log(response);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Login failed");
  }
};

const Login = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type={"email"} label={"email"} name="email" />
        <FormInput type={"password"} label={"password"} name="password" />
        <div className=" mt-4">
          <SubmitBtn text={"Login"} />
        </div>

        <p className="text-center">
          Not at member ?{" "}
          <Link
            to={"/register"}
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register now
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
