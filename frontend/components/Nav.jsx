import React from 'react'
import { Link } from 'react-router'

export default function Nav() {
  return (
    <div className="navbar-fixed-top navbar-default">
      <div className="container">
        <ul className="nav navbar-nav">
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/funnel">Funnel</Link></li>
        </ul>
      </div>
    </div>
  )
}