import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
    <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Welcome Back 👋
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-white text-sm block mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="text-white text-sm block mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-purple-700 font-semibold py-3 rounded-xl hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          Login
        </button>

        <p className="text-center text-gray-200">
          Don't have an account?{" "}
          <Link to="/Register-Pages">
          <span className="font-semibold cursor-pointer hover:text-white">
            Register
          </span>
          </Link>
        </p>
      </form>
    </div>
  </div>
);
}

export default Login;