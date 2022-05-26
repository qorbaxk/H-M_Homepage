import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        'H&M Home',
        'Sale',
        '지속가능성'
    ];

    const navigate = useNavigate();

    const goToLogin=()=>{
        navigate('/login');
    }

    const goToHome=()=>{
        navigate('/');
    }

  return (
    <div>
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} className='login-icon'/>
                <div onClick={goToLogin}>로그인</div>
            </div>
            <div className='logo'>
                <img onClick={goToHome} width={100} src='img/hnmlogo.png'/>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu)=>(
                    <li>{menu}</li>
                    ))}
                </ul>
                
                <div className='search-area'>
                    <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                    <input className='search' placeholder='제품 검색' type="text"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar