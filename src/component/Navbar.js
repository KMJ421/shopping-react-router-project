import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ]
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const goToHome = () => {
      navigate('/');
    }

    const goToLogin = () => {
      if (authenticate) {
        // 로그아웃 처리
        setAuthenticate(false);
        navigate('/');
      } else {
        // 로그인 페이지로 이동
        navigate('/login');
      }
    }

    const search = (event) => {
      if(event.key === "Enter"){
        let keyword = event.target.value
        
        navigate(`/?q=${keyword}`);
      }
    }

    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>{authenticate ? '로그아웃' : '로그인'}</div>
        </div>
      </div>
        
      <div className="nav-section">
        <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" onClick={goToHome} style={{ cursor: 'pointer' }}/>
      </div>

      <div className="menu-area">
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`menu-list ${menuOpen ? 'show' : ''}`}>
            {menuList.map((menu) => (
                <li>{menu}</li>
            ))}
        </ul>
        <div className="search-box">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder="제품검색" onKeyDown={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
