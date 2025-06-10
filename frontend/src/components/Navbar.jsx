import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { Input } from "./ui/input"
import { Button } from './ui/button'
import { ChartBarBig, Search } from 'lucide-react'
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { setUser } from "../redux/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useDispatch, useSelector } from 'react-redux'
import { FaChartColumn } from "react-icons/fa6";
import { LiaComments } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import userLogo from '../assets/user.jpg'

import { toggleTheme } from '../redux/themeSlice'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from "../components/ui/dropdown-menu"


const navbar = () => {
  const { user } = useSelector(store => store.auth)
  const { theme } = useSelector(store => store.theme)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/user/logout`, { withCredentials: true });
      if (res.data.success) {
        navigate("/")
        dispatch(setUser(null))
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)

    }
  }
  return (

    <div className='py-2 fixed w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gray-300 border-2 bg-white z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 md:px-0'>
        <div className='flex gap-7 items-center'>
          <Link to={'/'}>
            <div className='flex gap-2 items-center'>
              <img src={Logo} alt="" className='w-7 h-7 md:w-10 md:h-10 dark:invert' />
              <h1 className='font-bold text-3xl md:text-4xl'>Logo</h1>
            </div>
          </Link>
          <div className='relative hidden md:block' >
            <Input
              type="text"
              placeholder="Search....."
              className="border border-gray-700 dark:bg-gray-900 bg-gray-300 w-[300px] hidden md:block" />
            <Button className={"absolute right-0 top-0"}><Search /></Button>
          </div>
        </div>
        <nav className='flex md:gap-7 gap-4 items-center'>
          <ul className='hidden md:flex gap-7 items-center text-xl font-semibold'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/blogs'}><li>Blogs</li></Link>
            <Link to={'/about'}><li>About</li></Link>
          </ul>
          <div className='flex'>
            <Button onClick={() => dispatch(toggleTheme())} className="">
              {
                theme === 'light' ? <FaRegMoon /> : <FiSun />
              }            </Button>{
              user ? <div className='ml-7 flex gap-3 items-center'>



                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                   <Avatar>
                      <AvatarImage src={user.photoUrl || userLogo} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>

                      <DropdownMenuItem onClick={() => navigate('/dashboard/profile')}>
                        <User />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/dashboard/your-blog')}>
                        <FaChartColumn />
                        <span>Your Blogs</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/dashboard/comments')}>
                        <LiaComments />
                        <span>Comments</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/dashboard/write-blog')}>
                        <FaRegEdit />
                        <span>Write Blogs</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>

                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />





                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>


                <Button onClick={logoutHandler}>Logout</Button>
              </div> : <div className='ml-7 md:flex gap-2'>
                <Link to={"/login"}><Button>Login</Button></Link>
                <Link className='hidden md:block' to={"/signup"}><Button>SignUp</Button></Link>
              </div>
            }
          </div>
        </nav>
      </div>
    </div>
  )
}

export default navbar
