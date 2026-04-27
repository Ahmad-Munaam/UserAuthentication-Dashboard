// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './DataStore/Store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from './Components/Pages/Signup.jsx'
import Login from './Components/Pages/Login.jsx'
import Dashboard from './Components/Pages/Dashboard.jsx'
import { Profile } from './Components/Pages/Profile.jsx'
import DynamicPageInfo from './Components/Pages/DynamicPageInfo.jsx'
// add more cod for feature branch
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
  path :'/dashboard',
  element :<Dashboard/>,
  // children:[{
  //   // path:'profile/:username',
  //   // element:  <Profile/>
  //   path : ':id',
  //   element : <DynamicPageInfo/>
  // }]
},
{
  path :'/dashboard/:id',
  element:<DynamicPageInfo/>
},
{
  path :'/dashboard/profile',
  element : <Profile/>

}
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={allroots} />
  </Provider>

)
