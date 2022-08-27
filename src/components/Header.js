import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="container">
        <NavLink to="/">Where in the World?</NavLink>
      </nav>
    </header>
  )
}

export default Header
