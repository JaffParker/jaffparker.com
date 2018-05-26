//@flow
import React from 'react'
import {IconCard} from '../Other/IconCard'
import faIdCard from '@fortawesome/fontawesome-free-solid/faIdCard'
import faDumbbell from '@fortawesome/fontawesome-free-solid/faDumbbell'
import faSubway from '@fortawesome/fontawesome-free-solid/faSubway'
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic'
import faPlane from '@fortawesome/fontawesome-free-solid/faPlane'
import faLaptop from '@fortawesome/fontawesome-free-solid/faLaptop'

export const AboutMe = () =>
  <div className="AboutMe text-center">
    <h1>Fun Facts About Me</h1>
    <div className="row">
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faIdCard}>Andrey Kamozin, 23 y.o.<br/>Lives in Montreal, Canada</IconCard>
      </div>
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faDumbbell}>Favorite pass-time: working out.<br/>It might not show at first, but I really do.</IconCard>
      </div>
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faSubway}>I'm oddly passionate about trains. Don't ask why, I don't know.</IconCard>
      </div>
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faMusic}>I love music.<br/>Also for years I've been semi-successfully learning to play guitar.</IconCard>
      </div>
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faPlane}>I want to see places.<br/>If I work with you, you will indirectly sponsor my adventures :)</IconCard>
      </div>
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faLaptop}>I've been a developer since 2011, but I've been passionate about it since I was 5 and working as one since I was 16.</IconCard>
      </div>
    </div>
  </div>
