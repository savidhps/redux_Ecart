import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addWishList } from '../redux/slice/wishlistSlice';

function Home() {

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  const dispatch = useDispatch()
  
  return (
    <>
    <div className='md:grid grid-cols-4 p-10 gap-10'>
    {
    data?.length>0?
    data?.map((item,index)=>(
      
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
          <button onClick={()=>dispatch(addWishList(item))} className='bg-red-600 text-white py-2 px-2 rounded hover:bg-white hover:border hover:text-red-600'><FontAwesomeIcon icon={faHeart} /></button>
          <button className='bg-green-600 text-white py-2 px-2 rounded hover:bg-white hover:border hover:text-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
      </div>

    
    ))
    : <p>Loading...</p>
    }
    </div>
    </>
  )
}

export default Home