import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import logo from '../../assets/logo.png'
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const showSidebar = () => setSidebar(!sidebar);
  const navigateToLogin = () => history.push('/login');
  const storedUsername = localStorage.getItem('username');
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div>
            <div className='circle' onClick={navigateToLogin}>
              <div className='inner-circle'></div>
            </div>
            <h5 className='user-detail'>{storedUsername}</h5>
          </div>
        </div>
        {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
        <nav className='nav-menu active'>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {/* <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}
            <div class="nav-logo">
                <img src={logo} alt="easyclass"/>
                <h3>DrivePal</h3>
            </div>
            {SidebarData.map((item, index) => {
              if(index!=6)
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              if(index>5)
              return (
                <>                
                <li key={index} className={item.cName} HOME>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to="/login">
                    <FaIcons.FaLock/>
                    <span>Logout</span>
                  </Link>
                </li>
              </>  
                

              );
            })}
          </ul>

        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
