import React from 'react'
import {NavLink} from'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inside">
        <span className="brand">
          <NavLink to="/">NVC Training Center</NavLink>
        </span>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/">หน้าหลัก</NavLink>
          </li>
          <li>
            <NavLink to="/course">หลักสูตรที่เปิดสอน</NavLink>
          </li>
          <li>
            <NavLink to="/contact">ติดต่อ</NavLink>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar