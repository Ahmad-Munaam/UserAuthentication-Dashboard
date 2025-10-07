import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './DataStore/Store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from './Components/Pages/Signup.jsx'
import Login from './Components/Pages/Login.jsx'
import Home from './Components/Pages/Home.jsx'

const allroots = createBrowserRouter([{
  path: '/',
  element: <App />
},
{
  path: '/signup',
  element: <Signup />
},
{
  path :'/login',
  element : <Login/>
},{
  path :'/homepage',
  element :<Home/>

}
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={allroots} />
  </Provider>

)
