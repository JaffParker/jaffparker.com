//@flow
import React from 'react'
import styles from './ContactForm.scss'
import {Icon} from '../Other/Icon'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'

const socialLinks = [
  {
    title: 'Email me',
    icon: faEnvelope,
    link: 'mailto:andreykamozin@gmail.com',
  },
  {
    title: 'See my code on GitHub',
    icon: faGithub,
    link: 'https://github.com/JaffParker/',
  },
  {
    title: 'Follow me on Twitter',
    icon: faTwitter,
    link: 'https://twitter.com/jaffparker',
  },
  {
    title: 'Check out my LinkedIn profile',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/andreykamozin/',
  },
]

export const ContactForm = () =>
  <div className={styles.ContactForm}>
    <h1>Contact Me</h1>
    <ul className="nav justify-content-center">
      {socialLinks.map(contact =>
        <li className="nav-item" key={contact.title}>
          <a className="nav-link" href={contact.link} target="_blank">
            <Icon icon={contact.icon} />{' '}
            {contact.title}
          </a>
        </li>)}
    </ul>
  </div>
