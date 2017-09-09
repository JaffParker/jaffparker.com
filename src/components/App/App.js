// @flow
import './App.scss'
import React from 'react'
import Logo from '../Logo/Logo'
import {connect} from 'react-redux'
import SocialLink from '../SocialLinks/SocialLink'

const socialLinks = [
  {
    network: 'github',
    link: 'https://github.com/JaffParker/'
  },
  {
    network: 'twitter',
    link: 'https://twitter.com/jaffparker'
  },
  {
    network: 'linkedin',
    link: 'https://www.linkedin.com/in/andreykamozin/'
  }
]


const App = () => (
  <div className={'App'}>
    <Logo />
    <p>A paragraph about me</p>
    <div className={'SocialLinkContainer'}>
      {socialLinks.map(item =>
        (<SocialLink key={item.network} network={item.network} link={item.link}/>)
      )}
    </div>
  </div>
)

export default connect()(App)
