/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faGithub, faLinkedin, faInstagram, faTwitter)


const Footer = () => {
  return (
    <footer id="footer">
    <ul className="icons">


        <li>
            <a href="https://www.linkedin.com/in/essid-mohamed-amine-b9b40321a/" target='_blank' className="icon">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" /> 
                Linkedin
            </a>
        </li>

        <li>
            <a href="https://github.com/MedAmineED" target='_blank' className="icon">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                Github
            </a>
        </li>

        <li>
                <a href="https://www.facebook.com/" target='_blank' className="icon">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    Facebook
                </a>
        </li>

        <li>
                <a href="https://twitter.com/" target='_blank' className="icon">
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    Twitter
                </a>
        </li>

        <li>
                <a href="https://www.instagram.com/" target='_blank' className="icon">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                     Instagram
                </a>
        </li>

    </ul>
    <ul className="copyright">
      <li>&copy; Essid Mohamed Amine</li><li>Design: <a href="#">UI Design</a></li>
    </ul>
  </footer>
  )
}

export default Footer
