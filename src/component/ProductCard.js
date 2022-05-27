import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item, authenticate}) => {


  const navigate = useNavigate();

  const goToDetail=()=>{
    if(authenticate){
      navigate(`/product/${item.id}`);
    }else{
      navigate('/login');
    }
    
    
  }


  return (
    <div className='card-area'  onClick={goToDetail}>
        <img className='card-img' src={item?.img}/>
        <div className='card-choice'>{item?.choice == true?"Conscious choice":"ㅤ"}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div className='card-new'>{item?.new == true?"신제품":"ㅤ"}</div>
    </div>
  )
}

export default ProductCard