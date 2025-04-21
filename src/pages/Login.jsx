import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { Link, Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useGlobalContext } from "../components/context/Context";
import { useEffect } from "react";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const token = localStorage.getItem("token");

    const response = await axios.post("http://localhost:5000/api/login", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.setItem("user", JSON.stringify(response.data.user));

    toast.success(response.data.message);
    return redirect("/");
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
  }
};

const Login = () => {
  const { setUser } = useGlobalContext();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card lg:w-96 md:w-96 p-4 bg-base-100 shadow-lg flex m-auto flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <FormInput type={"email"} label={"email"} name="email" />
        <FormInput type={"password"} label={"password"} name="password" />

        <div className=" mt-4 ">
          <SubmitBtn text={"Login"} />
        </div>

        <button className="btn btn-secondary">
          <Link to={"/"}>Guest</Link>
        </button>

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
