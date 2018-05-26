//@flow
import React from 'react'
import moment from 'moment'

export const Footer = () =>
  <div className="Footer text-center m-5">
    &copy; {moment().year()} - Jaff Parker
  </div>
