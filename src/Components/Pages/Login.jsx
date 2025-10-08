import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
const Login = () => {
  const signupdata = useSelector(state => state.formReducer.FormData)
  const homeNavigation = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const homeNavFunction = () => {
    homeNavigation('/dashboard', {state : {username: loginData.email}})
  }
  const submitLoginForm = (e) => {
    e.preventDefault()
    const loggedData = signupdata.find(
      (value) => value.email === loginData.email && value.password === loginData.password
    )
    if (loggedData) {
      console.log(true)
      homeNavFunction()
    } else {
      toast.warning("Email & password do not match")
      console.log(false)
    }
  }

  return (
    <>
      <div className="flex flex-col justify-between items-center h-screen w-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="bg-white border border-gray-300 shadow-xl rounded-2xl p-8 w-full max-w-md mt-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center tracking-wide">
            Welcome Back
          </h1>
          <form className="flex flex-col gap-5" onSubmit={submitLoginForm}>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={loginData.email}
                onChange={(e) => {
                  setLoginData({ ...loginData, email: e.target.value })
                }}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                value={loginData.password}
                onChange={(e) => {
                  setLoginData({ ...loginData, password: e.target.value })
                }}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-gray-600 text-sm text-center mt-4">
            Don't have an account?
            <NavLink
              to={"/signup"}
              className="text-blue-600 hover:text-blue-700 font-semibold">
              {" "}Sign up
            </NavLink>
          </p>
        </div>

        <ToastContainer />
        <button
          onClick={() => {
            homeNavigation('/signup')
          }}
          className="p-2 bg-blue-100 text-blue-800 font-medium rounded-md mb-6 hover:bg-blue-200 transition"
        >
          Go to Signup Page
        </button>
      </div>
    </>
  )
}

export default Login
