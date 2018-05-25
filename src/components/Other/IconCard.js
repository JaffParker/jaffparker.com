//@flow
import React from 'react'
import {Icon} from './Icon'
import './IconCard.scss'

type Props = {
  icon: Object,
  children: string
}

export const IconCard = ({icon, children}: Props) =>
  <div className="IconCard">
    <div className="icon d-flex flex-column justify-content-center align-items-center"><Icon icon={icon} size="4x" /></div>
    <p className="lead">{children}</p>
  </div>
