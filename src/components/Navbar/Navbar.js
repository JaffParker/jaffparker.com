// @flow
import React from 'react'

const Navbar = ({children}: {children: ?string|Object}) => (
  <nav className="Navbar navbar navbar-expand-lg navbar-light">
    {children}
  </nav>
)

export default Navbar
