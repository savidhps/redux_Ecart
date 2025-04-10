import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem } from '../redux/slice/wishlistSlice';

function Wishlist() {

  const WishlistArray = useSelector((state) => state.wishlistReducer)
  // console.log(WishlistArray);
  const dispatch = useDispatch()



  return (
    <>
      <h1 className='text-center text-violet-700 mt-10 text-4xl'>Whish List</h1>

      {WishlistArray?.length>0?
      <div className='md:grid grid-cols-4 p-10 gap-10'>
        {WishlistArray?.map((item,index)=>(
          <div className='p-4 shadow-2xl mt-4' key={index}>
          <img src={item?.thumbnail}
          style={{width:'100%',height:'250px'}}/>
            <div>
              <h4 className='text-center text-violet-800'><b>{item?.title}</b></h4>
              <p className='test-justify'>{item?.description}
              </p>
              <p>Price:<span className="text-violet-600">{item?.price}</span></p>
            </div>
            <div className='flex justify-between mt-4'>
            <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='bg-red-600 text-white py-2 px-2 rounded hover:bg-white hover:border hover:text-red-600'><FontAwesomeIcon icon={faTrash} /></button>
            <button className='bg-green-600 text-white py-2 px-2 rounded hover:bg-white hover:border hover:text-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
      ))}
      </div>

      
        :
      <div className='md:grid grid-cols-3 md:p-10 p-5'>
        <div></div>
        <div className='flex justify-center items-center flex-col'><img src="data:image/jpeg;base64,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" alt="" 
        style={{width:'100%'}}/>
        <Link to={'/'}>
          <button className='bg-green-800 text-white px-3 py-2 hover:border hover:bordr-green-800
          hover:text-green-800 hover:bg-white'>Back Home</button>
        </Link>
        </div>
        <div></div>
      </div>
      }
    </>
  )
}

export default Wishlist