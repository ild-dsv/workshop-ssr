import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
  <div id="header">
    <div className="left">Repo LeaderBoard</div>
    <div className="right">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
)

export default Header
