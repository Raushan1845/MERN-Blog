import React from 'react'
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import auth from "../assets/auth.jpg"


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loading }= useSelector(store=>store.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
  
  try {
    dispatch(setLoading(true))
    const response = await axios.post(`http://localhost:8000/api/v1/user/login`, input, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    });
    if (response.data.success) {
      navigate('/')
      dispatch(setUser(response.data.user))
      toast.success(response.data.message)
    }
  } catch (error) {
    console.log(error.response.data.message);

  }finally{
    dispatch(setLoading(false))
  }
  }
  return (
    <div className="flex  h-screen md:pt-14 md:h-[760px] ">
      <div className='hidden md:block'>
        <img src={auth} alt="" className='h-[700px]' />
      </div>
      <div className='flex justify-center items-center flex-1 px-4 md:px-0'>
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-xl font-semibold">Login into your account</h1>
            </CardTitle>
            <p className=' mt-2 text-sm font-serif text-center dark:text-gray-300'>Enter your details below to login your account</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit} >
              
              <div>
                <Label>Email</Label>
                <Input type="email"
                  placeholder="Email address"
                  name="email"
                  value={input.email}
                onChange={handleChange}
                  className="dark:border-gray-600 dark:bg-gray-900"
                />
              </div>
              <div className="relative">
                <Label>Password</Label>
                <Input type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  name="password"
                  value={input.password}
                onChange={handleChange}
                  className="dark:border-gray-600 dark:bg-gray-900"
                />
                <button
                  type="button"
                  className="absolute right-3 top-6 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <Button type="submit" className="w-full">
                {
                  loading ? (
                    <>
                    <Loader2 className='mr-2 w-4  h-4 animate-spin'>
                      Please wait
                    </Loader2>
                    </>
                  ): ("Login ")
                }
              </Button>
              <p className='text-center text-gray-600 dark:text-gray-300'>Don't have an account? <Link to={'/Signup'}><span className='underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-100'>Sign Up!</span></Link></p>
            </form>

          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default Login
