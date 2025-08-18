import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import auth from "../assets/auth.jpg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/api/user/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (response.data.success) {
        dispatch(setUser(response.data.user));
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Left side image */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img
          src={auth}
          alt="Login Illustration"
          className="h-[700px] w-auto rounded-2xl shadow-xl object-cover"
        />
      </div>

      {/* Right side form */}
      <div className="flex flex-1 items-center justify-center px-6 md:px-12">
        <Card className="w-full max-w-md border-none shadow-xl rounded-2xl bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm text-center">
              Login to access your account and continue exploring.
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  className="dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Label>Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  className="dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Button */}
              <Button
                type="submit"
                className="w-full py-2 font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
              >
                Login
              </Button>

              {/* Signup Link */}
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
