import React from 'react'
import { icons } from '../constants'

const IndexPage = () => (
  <div className="wrap flex items-center justify-center">
    <div className="card">
      <h1>Tyson Louth</h1>
      <strong>Full Stack Developer</strong>
      <p>
        Software developer at Teaching.com.<br/>I work remote from Orillia, Ontario!
      </p>
      <div className="icons">
        {icons.map((icon, index) => (
          <a
            key={icon.key}
            href={icon.to}
            target="_blank"
            style={{ animationDelay: `2.${index}s` }}
            rel="noopener noreferrer"
          >
            <img src={icon.icon} alt={icon.label} title={icon.label} />
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default IndexPage
