//@flow
import React from 'react'
import {Logo} from '../Logo/Logo'
import MeImage from '../../../assets/AndreyBogdanov2.jpg'
import styles from './Welcome.scss'

export const Welcome = () =>
  <div className={styles.container}>

    <div>
      <img src={MeImage} className={styles.me} />
    </div>

    <div>
      <Logo />
    </div>

    <div>
      <p className="lead">
        Also known as Andrey Kamozin, I am a Montreal based professional web developer, aspiring writer and musician. I get very passionate about my projects and I really hope yours will be next.
      </p>
    </div>

  </div>
