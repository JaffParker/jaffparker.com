// @flow
import React from 'react'

const NavbarBrand =
  ({home = '/', center = true, children = ''}: {home: string, center: boolean, children: string}) =>
  (
    <span className="NavbarBrand navbar-brand" href={home} style={{
      margin: center ? '0 auto' : 'inherit'
    }}>{children}</span>
  )

export default NavbarBrand
