
import logo from '../assets/logo.png';
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useAuth } from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const { isLoggedIn, isBusiness } = useAuth();


    return (
        <div className=" md:px-14 p-4 max-w-screen-2xl mx-auto dark:text-white mt-2 ">
            <hr />
            <div className='my-12 flex flex-col md:flex-row  '>
                <div className='md:w-1/2 space-y-8'>
                    <a href="/"
                        className='text-4xl font-weight: 800 flex items-center space-x-2'
                    >
                        <img src={logo} alt="logo" className='rotate w-14 inline-block items-center p-2 ' />
                        <span className='mainlogo'>Sound<code className="text-sm font-semibold"> Bazar</code> </span>
                    </a>
                    <p className='md:w-1/2 '>
                        Sound Bazar where the world echoes With melodies and rhythms.  © 2024 Sound Bazar. <br></br>All rights reserved.
                    </p>

                </div>



                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-16 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3 flex flex-col'>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                            <NavLink to="/register" className="nav-link">Register</NavLink>

                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <NavLink to="/help" className='block hover:text-gray-500'>How does it work?</NavLink>
                            <NavLink to="/help" className='block hover:text-gray-500'>Where to ask question?</NavLink>
                            <NavLink to="/help" className='block hover:text-gray-500'>How to get started?</NavLink>
                            <NavLink to="/help" className='block hover:text-gray-500'>What services do we offer?</NavLink>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <p className='hover:text-gray-500'>(972) 54-1234567</p>
                            <p className='hover:text-gray-500'>321 Manof</p>
                            <p className='hover:text-gray-500'>Israel, Haifa</p>
                            <p className='hover:text-gray-500'>2954812</p>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col sm:flex-row gap-8 sm:item-center justify-between'>
                <p>© 2024 Max Stepantsev. All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer