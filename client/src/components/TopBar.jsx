import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TbSocial } from "react-icons/tb";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline, IoMdSunny } from "react-icons/io";
import { SetTheme } from "../redux/theme";
import { Logout } from "../redux/userSlice";
import { fetchPosts } from '../utils';
import { FaCloudMoon, FaShoppingCart } from 'react-icons/fa';
import { IoPartlySunnySharp } from "react-icons/io5";
import { TiSocialGithub } from 'react-icons/ti';

const TopBar = () => {

    const { theme } = useSelector((state) => state.theme)
    const { user} = useSelector((state) => state.user)
    const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";

    dispatch(SetTheme(themeValue));
  };

  const handleSearch = async (data) => {

    await fetchPosts(user.token, dispatch, "", data);

  };

  return (
    <div className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary font-serif'>
      <Link to='/' className='flex gap-2 items-center'>
        <div className='p-1 md:p-2 bg-white rounded text-white'>
          <TiSocialGithub color='#471563' size={30} />
        </div>
        <span className='text-xl md:text-2xl text-[#a829f0] font-semibold'>
          Click&Connect
        </span>
      </Link>

      <form
        className='hidden md:flex items-center justify-center'
        onSubmit={handleSubmit(handleSearch)}
      >
        <TextInput
          placeholder='Search for any post...'
          styles='w-[18rem] lg:w-[38rem] py-3 rounded-full'
          register={register("search")}
        />
        <CustomButton
          title='Search'
          type='submit'
          containerStyles='bg-[#7005ad] text-white px-6 py-2.5 mt-2 rounded-full -ml-[90px]'
        />
      </form>

      {/* ICONS */}
      <div className='flex gap-4 items-center text-ascent-1 text-md md:text-xl'>
        <button onClick={() => handleTheme()}>
          {theme === "dark" ? <FaCloudMoon size={40} color='#a829f0' /> : <IoPartlySunnySharp size={40} color='#a829f0'/>}
        </button>

        <div>
          <CustomButton
            onClick={() => dispatch(Logout())}
            title='Log Out'
            containerStyles='text-white text-ascent-1 px-4 md:px-6 py-1 md:py-2 rounded-md bg-[#7005ad]'
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar
