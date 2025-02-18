import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Body from './pages/Body';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/ErrorPage';
import ReataurantDetails from './pages/RestaurantDetails/ReataurantDetails.tsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <AboutUs />,
            },
            {
                path: '/contact-us',
                element: <ContactUs />,
            },

            {
                path: '/restaurant/:slug',
                element: <ReataurantDetails />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
