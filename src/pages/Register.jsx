import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { toast } from "react-toastify";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(
      "https://mini-project-server-production.up.railway.app/api/register",
      data
    );
    console.log(response);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful");
    }
    toast.success(response.data.message);
    return redirect("/login");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card lg:w-96 md:w-96 p-6 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type={"text"} label={"username"} name={"name"} />
        <FormInput type={"email"} label={"email"} name={"email"} />
        <FormInput type={"password"} label={"password"} name={"password"} />
        <div className=" mt-4 grid place-items-center">
          <SubmitBtn text={"Register"} />
        </div>

        <p className="text-center">
          Already a member ?{" "}
          <Link
            to={"/login"}
            className=" link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
