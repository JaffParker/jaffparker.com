//@flow
import React from 'react'
import {Icon} from './Icon'
import styles from './IconCard.scss'

type Props = {
  icon: Object,
  children: string
}

export const IconCard = ({icon, children}: Props) =>
  <div>
    <div className={styles.icon}><Icon icon={icon} size="4x" /></div>
    <p className="lead">{children}</p>
  </div>
