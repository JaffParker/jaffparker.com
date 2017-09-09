// @flow
import './SocialLink.scss'
import React from 'react'

const SocialLink =
  ({network, link}: {network: string, link: string}) =>
    (
      <a className='SocialLink' href={link}><i className={`fa fa-${network}`} /></a>
    )

export default SocialLink
