import React from 'react';
import image from "../../../images/dashboard.svg";
import useAuth from '../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="mt-5 text-center">Hello, <span className='main-font-color'>{user.displayName}</span></h2>
            <img src={image} alt="" className='d-block m-auto pt-5'
                style={{ "height": "500px", "width": "75%" }}
            />
        </div>
    );
};

export default DashboardHome;