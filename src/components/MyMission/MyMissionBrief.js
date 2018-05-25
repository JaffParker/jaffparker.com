//@flow
import React from 'react'
import faHandshake from '@fortawesome/fontawesome-free-solid/faHandshake'
import faUserTie from '@fortawesome/fontawesome-free-solid/faUserTie'
import faHandHoldingUsd from '@fortawesome/fontawesome-free-solid/faHandHoldingUsd'
import {IconCard} from '../Other/IconCard'

export const MyMissionBrief = () =>
  <div className="MyMissionBrief text-center">
    <h1>I resolve to...</h1>
    <div className="row">
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faHandshake}>Understand your business and be a collaborator, not just a contractor</IconCard>
      </div>
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faUserTie}>Continue being available even after the project is over</IconCard>
      </div>
      <div className="col-xs-12 col-md-4">
        <IconCard icon={faHandHoldingUsd}>Offer affordable prices for your local business</IconCard>
      </div>
    </div>
  </div>
