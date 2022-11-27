import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import AddProducts from "../DashBoard/AddProducts";
import Allbuyers from "../DashBoard/Allbuyers";
import Allsellers from "../DashBoard/Allsellers";
import DashBoard from "../DashBoard/DashBoard";
import Payment from "../DashBoard/Payment";
import WishList from "../DashBoard/WishList";
import Error from "../Error page/Error";
import Home from "../Home/Home";
import AllMobiles from "../Home/Mobiles/AllMobiles";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import MyProducts from "../MyProducts/MyProducts";
import Basic from "../Phones/Basic";
import Folding from "../Phones/Folding";
import SmartPhones from "../Phones/SmartPhones";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/allmobiles/:id',
                element: <PrivateRoute><AllMobiles></AllMobiles></PrivateRoute>,


            },
            {
                path: '/blog',
                element: <Blog></Blog>,


            },
            {

                path: '/myproduct',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>

            },

        ]

    },
    {

        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout>,</PrivateRoute>,
        errorElement: <Error></Error>,
        children: [

            {

                path: '/dashboard/user',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>

            },
            {

                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>

            },
            {

                path: '/dashboard/allsellers',
                element: <Allsellers></Allsellers>

            },
            {

                path: '/dashboard/allbuyers',
                element: <Allbuyers></Allbuyers>

            },
            {

                path: '/dashboard/wishlist',
                element: <WishList></WishList>

            },
            {

                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)

            },










        ]


    }












])