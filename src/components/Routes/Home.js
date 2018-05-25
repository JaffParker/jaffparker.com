//@flow
import React from 'react'
import {Welcome} from '../Welcome/Welcome'
import './Home.scss'
import {Icon} from '../Other/Icon'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'
import {MyMissionBrief} from '../MyMission/MyMissionBrief'
import {AboutMe} from '../AboutMe/AboutMe'
import {ContactForm} from '../ContactForm/ContactForm'

export const Home = () =>
  <div className="Home mb-5">

    <div className="Welcome-container">
      <Welcome />
      <div className="scrollDown">
        Scroll for more<br />
        <Icon icon={faChevronDown} />
      </div>
    </div>
    <hr/>

    <div className="container my-5">
      <AboutMe />
    </div>
    <hr/>

    <div className="container my-5">
      <MyMissionBrief />
    </div>
    <hr/>

    <div className="container my-5">
      <ContactForm />
    </div>

  </div>
