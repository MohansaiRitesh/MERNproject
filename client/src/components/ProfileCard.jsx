import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';
import { BsBriefcase, BsFacebook, BsInstagram, BsPersonFillAdd } from 'react-icons/bs';
import { FaBriefcase, FaLocationArrow, FaTwitterSquare, FaUserEdit } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import { UpdateProfile } from '../redux/userSlice';
import { CiLocationOn } from 'react-icons/ci';
import moment from "moment";
import { BiSolidNavigation } from 'react-icons/bi';
import { HiBriefcase } from "react-icons/hi";
import { MdEditSquare } from 'react-icons/md';

const ProfileCard = ({ user }) => {

  const { user: data, edit } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <div className='w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4'>
        <div className='w-full flex items-center justify-between border-b pb-5 border-[#66666645]'>
          <Link to={"/profile/" + user?._id} className='flex gap-2'>
            <img src={user?.profileUrl ?? NoProfile} alt={user?.email} className='w-14 h-14 object-cover rounded-full' />

            <div className='flex flex-col justify-center'>
              <p className='text-lg font-medium text-ascent-1'>{user?.firstName} {user?.lastName}</p>
              <span className='text-ascent-2 '>{user?.profession ?? "No Profession"}</span>
            </div>
          </Link>

          <div className=''>
            {user?._id === data?._id ? (<FaUserEdit 
              size={22}
              className='text-blue cursor-pointer'
              onClick={() => dispatch(UpdateProfile(true))}
            />) : (<button
              className='bg-[#0444a430] text-sm text-white p-1 rounded'
              onClick={() => { }}
            >
              <BsPersonFillAdd size={20} className='text-blue' />
            </button>)}
          </div>


        </div>
        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <div className='flex gap-2 items-center text-ascent-2'>
            <FaLocationArrow className='text-xl text-ascent-1' />
            <span>{user?.location ?? "Add Location"}</span>
          </div>

          <div className='flex gap-2 items-center text-ascent-2'>
            <FaBriefcase className=' text-lg text-ascent-1' />
            <span>{user?.profession ?? "Add Profession"}</span>
          </div>
        </div>

        <div className='w-full flex gap-2 py-4 border-b border-[#66666645] text-white'>
          <div className='flex-1 justify-center items-center text-center border-r border-white'>
            <h1 className='text-ascent-2 font-bold'>Friends</h1>
            <p className='text-2xl font-semibold text-ascent-2'>{user?.friends?.length}</p>
          </div>
          <div className='flex-1 justify-center items-center text-center'>
            <h1 className='text-ascent-2 font-bold'>Profile Views</h1>
            <p className='text-2xl font-semibold text-ascent-2'>{user?.views?.length}</p>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-ascent-2'>Created </span>
          <span className='text-ascent-1 text-base ml-2'>
            {moment(user?.createdAt).fromNow()}
          </span>
        </div>

      </div> */}
      <div className='w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 font-serif'>
        <div className='w-full flex items-center justify-between border-b pb-5 border-[#66666645]'>
          <Link to={"/profile/" + user?._id} className='flex gap-2'>
            <img src={user?.profileUrl ?? NoProfile} alt={user?.email} className='w-14 h-14 object-cover rounded-xl' />

            <div className='flex flex-col justify-center'>
              <p className='text-lg font-medium text-ascent-1'>{user?.userName}</p>
              <span className='text-ascent-2 '>{user?.profession ?? "No Profession"}</span>
            </div>
          </Link>

          <div className=''>
            {user?._id === data?._id ? (<MdEditSquare
              size={25}
              className='text-[#a829f0] cursor-pointer'
              onClick={() => dispatch(UpdateProfile(true))}
            />) : (<button
              className='bg-[#0444a430] text-sm text-white p-1 rounded'
              onClick={() => { }}
            >
              <BsPersonFillAdd size={20} className='text-[#0f52b6]' />
            </button>)}
          </div>


        </div>
        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <div className='flex gap-2 items-center text-ascent-2'>
            <BiSolidNavigation size={30} className='text-xl text-ascent-1' />
            <span>{user?.location ?? "Add Location"}</span>
          </div>

          {/* <div className='flex gap-2 items-center text-ascent-2'>
            <HiBriefcase size={30} className=' text-lg text-ascent-1' />
            <span>{user?.profession ?? "Add Profession"}</span>
          </div> */}
        </div>

        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <p className='text-xl text-ascent-1 font-semibold'>
            {user?.friends?.length} Friends
          </p>

          {/* <div className='flex items-center justify-between'>
            <span className='text-ascent-2'>Who viewed your profile</span>
            <span className='text-ascent-1 text-lg'>{user?.views?.length}</span>
          </div> */}

          <span className='text-base text-[#a829f0]'>
            {user?.accountType === "business" ? "Business Account" : ""}
          </span>

          <div className='flex items-center justify-center'>
            <span className='text-ascent-2'>Created </span>
            <span className='text-ascent-1 text-base ml-2'>
              {moment(user?.createdAt).fromNow()}
            </span>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4 py-4 pb-6'>
          <p className='text-ascent-1 text-lg font-semibold'>Social Profile</p>

          <div className='flex gap-2 items-center text-ascent-2'>
            <BsInstagram className=' text-xl text-ascent-1' />
            <span>Instagram</span>
          </div>
          <div className='flex gap-2 items-center text-ascent-2'>
            <FaTwitterSquare className=' text-xl text-ascent-1' />
            <span>Twitter</span>
          </div>
          <div className='flex gap-2 items-center text-ascent-2'>
            <BsFacebook className=' text-xl text-ascent-1' />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
