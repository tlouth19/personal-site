import React from 'react'
import twitter from './media/twitter.svg'
import instagram from './media/instagram.svg'
import github from './media/github.svg'
import mail from './media/mail.svg'
import phone from './media/phone.svg'
import linkedin from './media/linkedin.svg'

export const icons = [
  {
    key: 'github',
    label: 'GitHub',
    to: 'https://github.com/tlouth19',
    icon: github,
    alt: "Tyson Louth's Github profile"
  },
  {
    key: 'dev.to',
    label: 'dev.to',
    to: 'https://dev.to/tlouth19',
    icon: 'https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg',
    alt: "Tyson Louth's dev.to profile"
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    to: 'https://ca.linkedin.com/in/tyson-louth-816b6aa9',
    icon: linkedin,
    alt: "Tyson Louth's LinkedIn profile"
  },
  {
    key: 'instagram',
    label: 'Instagram',
    to: 'https://instagram.com/tlouth19',
    icon: instagram,
    alt: "Tyson Louth's Instagram profile"
  },
  {
    key: 'twitter',
    label: 'Twitter',
    to: 'https://twitter.com/louther18',
    icon: twitter,
    alt: "Tyson Louth's Twitter profile"
  },
  {
    key: 'mail',
    label: 'Email',
    to: 'mailto:tysonlouth@gmail.com',
    icon: mail,
    alt: "Email Tyson Louth"
  },
]
