import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='card-area'>
        <img className='card-img' src={item?.img}/>
        <div className='card-choice'>{item?.choice == true?"Conscious choice":"ㅤ"}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div className='card-new'>{item?.new == true?"신제품":"ㅤ"}</div>
    </div>
  )
}

export default ProductCard