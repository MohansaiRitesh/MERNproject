import React, { useState } from 'react'
import { TbSocial } from 'react-icons/tb'
import { CustomButton, Loading, TextInput } from '../components'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BgImage, BgImage2, LoginBg, LoginBg2 } from "../assets"
import { BsShare } from "react-icons/bs"
import { ImConnection } from "react-icons/im"
import { AiOutlineInteraction } from "react-icons/ai"
import { apiRequest } from '../utils';
import { FaShoppingCart } from 'react-icons/fa';
import { TiSocialGithub } from 'react-icons/ti';

const Register = () => {

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, getValues, formState: { errors } } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {

      const res = await apiRequest({
        url: "/auth/register",
        data: data,
        method: "POST",
      });

      if (res?.status === "failed") {
          setErrMsg("Click On Login Button");
        window.location.replace("/login");
      } else {
        setErrMsg(res);
        setTimeout(() => {
          window.location.replace("/login");
        }, 5000);
      }

      setIsSubmitting(false);

    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  }

  return (
    <div className='bg-gradient-to-l from-[#7005ad] to-[#000] w-full h-[100vh] flex items-center justify-center px-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-3 lg:py-0 flex flex-row-reverse justify-center items-center bg-primary rounded-xl overflow-hidden shadow-xl font-serif'>
        {/* Left */}
        <div className='w-full lg:w-1/2 h-full px-10 2xl:px-20 flex flex-col justify-center'>
          <div className='w-full flex gap-2 items-center mb-0'>
            <div className='p-2 bg-white rounded text-white'>
              <TiSocialGithub color='#471563' size={30} />
            </div>
            <span className='text-2xl text-[#a829f0] font-semibold'>Click&Connect</span>
          </div>

          <p className='text-ascent-1 text-base font-semibold'>
            Create your account
          </p>

          <form action="" className='py-0 flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>

            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
                name='firstName'
                label='First Name'
                placeholder='Enter your First Name'
                type='text'
                styles='w-full'
                register={register("firstName", {
                  required: "First Name is required!",
                })}
                error={errors.firstName ? errors.firstName?.message : ""}
              />

              <TextInput
                label='Last Name'
                placeholder='Enter your Last Name'
                type='lastName'
                styles='w-full'
                register={register("lastName", {
                  required: "Last Name is required",
                })}
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>

            <TextInput
              label='User Name'
              placeholder='Enter your User Name'
              type='userName'
              styles='w-full'
              register={register("userName", {
                required: "User Name is required",
              })}
              error={errors.userName ? errors.userName?.message : ""}
            />

            <TextInput
              label='Account Type'
              placeholder='Enter business or normal'
              type='accountType'
              styles='w-full'
              register={register("accountType", {
                required: "Account Type is required",
              })}
              error={errors.accountType ? errors.accountType?.message : ""}
            />


            <TextInput name="email" placeholder="Enter your Email Address" label="Email Address" type="email" register={register("email", { required: "Email address is required" })} styles="w-full" labelStyle='ml-2' error={errors.email ? errors.email.message : ""} />

            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
                name='password'
                label='Password'
                placeholder='Enter your password'
                type='password'
                styles='w-full'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />

              <TextInput
                label='Confirm Password'
                placeholder='Enter your password'
                type='password'
                styles='w-full'
                register={register("cPassword", {
                  validate: (value) => {
                    const { password } = getValues();

                    if (password !== value) {
                      return "Passwords do no match";
                    }
                  },
                })}
                error={
                  errors.cPassword && errors.cPassword.type === "validate"
                    ? errors.cPassword?.message
                    : ""
                }
              />
            </div>


            {
              errMsg?.message && (
                <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"} mt-0.5`}>
                  {errMsg?.message}
                </span>
              )
            }

            {
              isSubmitting ? <Loading /> : <CustomButton type="submit" containerStyles={"inline-flex justify-center bg-[#a829f0] px-8 py-3 text-sm font-medium text-white outline-none"} title={"Create Account"} />
            }
          </form>

          <p className='text-ascent-2 text-sm text-center'>
            Already having an account?
            <Link
              to='/login'
              className='text-[#a829f0] font-semibold ml-2 cursor-pointer'
            >
              Login
            </Link>
          </p>
        </div>
        {/* Right */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-[#471563] font-serif'>
          <div className='relative w-full flex items-center justify-center'>
            <img src={BgImage} alt="Bg" className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover' />
            <div className='absolute flex items-center gap-1 bg-[#000] text-white right-10 top-10 py-2 px-2 rounded-full'>
              {/* <BsShare size={14} />
              <span className='text-xs font-medium'>Share</span> */}
              <img src={LoginBg} alt="Bg" className='w-18 2xl:w-16 h-18 2xl:h-16 rounded-full object-cover' />
            </div>

            <div className='absolute flex items-center gap-1 bg-[#000] text-white left-10 top-6 py-2 px-2 rounded-full'>
              {/* <ImConnection /> */}
              <img src={BgImage2} alt="Bg" className='w-18 2xl:w-16 h-18 2xl:h-16 rounded-full object-cover' />
              {/* <span className='text-xs font-medium'>Connect</span> */}
            </div>

            <div className='absolute flex items-center gap-1 bg-[#000] text-white left-12 bottom-6 py-2 px-2 rounded-full'>
              {/* <AiOutlineInteraction />
              <span className='text-xs font-medium'>Interact</span> */}
              <img src={LoginBg2} alt="Bg" className='w-18 2xl:w-16 h-18 2xl:h-16 rounded-full object-cover' />
            </div>
          </div>

          <div className='mt-16 text-center'>
            <p className='text-white text-base'>
              Get in touch with your closed ones and have fun
            </p>
            <span className='text-sm text-white/80'>
              Post your memories and explore others
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
