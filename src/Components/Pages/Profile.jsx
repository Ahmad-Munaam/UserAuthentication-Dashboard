import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { FaUserEdit } from "react-icons/fa";
import { updatedData } from '../../DataStore/formSlice';
import { toast, ToastContainer } from 'react-toastify';

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxApiData = useSelector(state => state.formReducer.FormData);
  const [editProfile, setEditProfile] = useState(false);
  const [newPass, setNewPass] = useState({
    newpassword: '',
    confirmNewPassword: ''
  });
  const location = useLocation();
  const _userProfileInfo = location.state;

  const getprofileObject = () => {
    setNewPass({
      newpassword: '',
      confirmNewPassword: ''
    });
    setEditProfile(true);
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-teal-100 p-4">
      <div className="bg-white w-full sm:w-[80%] md:w-[60%] lg:w-[35%] h-auto rounded-md shadow-md shadow-teal-300 relative flex flex-col items-center">
        <div className="relative w-full bg-blue-600 h-32 sm:h-36 md:h-40 flex justify-center rounded-t-md">
          <div className="absolute bottom-[-15%] sm:bottom-[-20%]">
            <div className="flex justify-center relative">
              <CgProfile className="size-20 sm:size-24 md:size-28 text-blue-950 rounded-full" />
              <span className="ml-2 absolute right-[-20%] bottom-0">
                <FaUserEdit className="size-6 sm:size-7 md:size-8 text-gray-700" />
              </span>
            </div>
          </div>
        </div>

        <div className="info w-full mt-16 sm:mt-20 p-4">
          <h3 className="text-2xl flex justify-center font-serif font-bold mb-3 text-gray-800">
            Information
          </h3>
          <div className="flex flex-col items-center sm:items-start sm:px-4 mb-4">
            <span className="font-extrabold font-serif text-lg sm:text-xl text-gray-800">
              Email:
            </span>
            <span className="font-serif text-gray-700 break-all">
              {_userProfileInfo.username}
            </span>
          </div>

          <div className="password w-full flex justify-center">
            {editProfile ? (
              <form className="flex flex-col w-[90%] sm:w-[80%] md:w-[70%]">
                <div className="flex flex-col mb-3">
                  <label htmlFor="newpassword" className="font-serif text-gray-700">
                    Change Password
                  </label>
                  <input
                    type="password"
                    id="newpassword"
                    name="newPassword"
                    placeholder="New password"
                    value={newPass.newpassword}
                    onChange={(e) => setNewPass({ ...newPass, newpassword: e.target.value })}
                    className="outline-gray-700 font-serif border-2 border-gray-400 rounded-md px-2 py-1 text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label htmlFor="confirmNewPassword" className="font-serif text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    placeholder="Confirm password"
                    value={newPass.confirmNewPassword}
                    onChange={(e) => setNewPass({ ...newPass, confirmNewPassword: e.target.value })}
                    className="border-2 border-gray-400 rounded-md px-2 py-1 text-sm sm:text-base"
                  />
                </div>

                <button
                  className="m-1 p-2 bg-gray-300 rounded-md font-serif font-bold text-lg hover:border-gray-700 hover:border-2 transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    reduxApiData.find((value, index) => {
                      if (value.email === _userProfileInfo.username) {
                        if (newPass.confirmNewPassword === newPass.newpassword) {
                          dispatch(
                            updatedData({
                              newPassword: newPass.newpassword,
                              confirmNewPassword: newPass.confirmNewPassword,
                              Objindex: index,
                            })
                          );
                          toast.success("Password updated successfully!");
                          setEditProfile(false);
                        } else {
                          toast.error("Password does not match!");
                        }
                      }
                    });
                  }}
                >
                  Confirm
                </button>
              </form>
            ) : (
              <button
                className="m-1 p-2 bg-gray-300 rounded-md font-serif font-bold text-lg hover:border-gray-700 hover:border-2 transition-all duration-200"
                onClick={getprofileObject}
              >
                Change Password
              </button>
            )}
          </div>

          
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
