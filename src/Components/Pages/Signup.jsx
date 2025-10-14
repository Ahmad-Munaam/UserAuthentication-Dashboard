import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux"
import { addformData } from '../../DataStore/formSlice';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate()
  const loginNavigation = () => {
    navigate('/login')
  }
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    password: '',
    Cpassword: ''
  })
  const selecterData = useSelector(state => state.formReducer.FormData)
  console.log(selecterData)
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.Cpassword) {
      toast.warning("Passwords do not match!");
      return;
    }
    const emailExists = selecterData.some(user => user.email === formData.email);
    if (emailExists) {
      toast.error("Email already registered!");
      return;
    }
    setData([...data, formData]);
    dispatch(addformData(formData));
    setFormData({
      uname: '',
      email: '',
      password: '',
      Cpassword: ''
    });
    toast.success("You signed up successfully!");
    loginNavigation();
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md my-10">

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.uname}
            onChange={(e) => {
              setFormData({ ...formData, uname: e.target.value })
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value })
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            value={formData.Cpassword}
            onChange={(e) => {
              setFormData({ ...formData, Cpassword: e.target.value })
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
       

        <button
          type="submit"
          className="w-full  bg-red-500 mt-2 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors"
          onClick={() => { loginNavigation() }} >
          Go to Login
        </button>
          
      </div>
      <ToastContainer />
    </div>
  );
};
export default Signup;