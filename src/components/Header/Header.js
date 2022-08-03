import React from 'react'
import './Header.css'
import logo from './logo.JPG'

function Header() {
  return (
    <div className="header">
        <a className="hub-logo" href="https://thehub.incedoinc.com" target="_blank" rel="noreferrer">
            <img className="hub-logo" src = {logo} alt="Link to Incedo Hub"></img>
            {/* width="130px" height = "40px" */}
        </a>
    </div>
  )
}

export default Header