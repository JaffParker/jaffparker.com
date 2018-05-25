//@flow
import React from 'react'
import {Logo} from '../Logo/Logo'
import MeImage from '../../../assets/AndreyBogdanov2.jpg'
import './Welcome.scss'

export const Welcome = () =>
  <div className="Welcome d-flex flex-column text-center justify-content-center">

    <div>
      <img src={MeImage} className="me" />
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
