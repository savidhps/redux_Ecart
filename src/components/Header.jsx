import React, { useState } from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function Header() {

    const [status,setStatus]=useState(false)
    const handleStatus=()=>{
        setStatus(!status)
    }
    return (
        <>

            <nav className='bg-violet-800 py-6 px-3 md:flex '>
                <div className='flex'>
                    <Link to={'/'}><h1 className='text-white text-3xl'> <FontAwesomeIcon className='me-3' icon={faCartShopping} />  E-cart</h1></Link>
                    
                    <button onClick={handleStatus} className='border border-white rounded p-3 text-white ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
    
                </div>
                {status&&<ul className='flex md:hidden ms-auto mt-2'>
                    <li>
                        <Link to={'/wishlist'}>
                            <button className='border border-white rounded px-6 py-3 mx-8 text-white hover:bg-white hover:text-violet-700 '> <FontAwesomeIcon icon={faHeart} className='text-red-600'/> whishlist
                            <span className='px-2 bg-gray-100 text-gray-600 ms-2 rounded'>1</span></button>
                        </Link>
                    </li>
                    <li>
                    <Link to={'/Cart'}>
                        <button className='border border-white rounded px-6 py-3 text-white hover:bg-white hover:text-violet-700 '> <FontAwesomeIcon icon={faCartShopping} /> Cart 
                        <span className='px-2 bg-gray-100 text-gray-600 ms-2 rounded'>1</span></button>
                    </Link>
                    </li>
                </ul>}

                <ul className='md:flex ms-auto hidden'>
                    <li>
                        <Link to={'/wishlist'}>
                            <button className='border border-white rounded px-6 py-3 mx-8 text-white hover:bg-white hover:text-violet-700'> <FontAwesomeIcon icon={faHeart} className='text-red-600'/> whishlist
                            <span className='px-2 bg-gray-100 text-gray-600 ms-2 rounded'>1</span></button>
                        </Link>
                    </li>
                    <li>
                    <Link to={'/Cart'}>
                        <button className='border border-white rounded px-6 py-3 text-white hover:bg-white hover:text-violet-700'> <FontAwesomeIcon icon={faCartShopping} /> Cart 
                        <span className='px-2 bg-gray-100 text-gray-600 ms-2 rounded'>1</span></button>
                    </Link>
                    </li>
                </ul>
            </nav>
                
 
        </>
    )
}

export default Header