import React from 'react'
import { icons } from '../constants'

const IndexPage = () => (
  <div className="wrap flex items-center justify-center">
    <div className="card">
      <h1>Tyson Louth</h1>
      <strong>Full Stack Developer</strong>
      <p>
        Currently the Lead Front End Developer at BitCine Technologies,
        building&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cinesend.com/"
        >
          CineSend
        </a>,&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.festily.com/"
        >
          Festily
        </a>&nbsp;&amp;&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://piracydetector.com/"
        >
          Piracy Detector
        </a>.
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
