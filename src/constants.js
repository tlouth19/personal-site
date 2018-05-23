import React from 'react'

export const TYPIST_DEFAULTS = {
  show: true,
  blink: false,
  element: <div className="code-placeholder" />,
  hideWhenDone: true,
  hideWhenDoneDelay: 100
}

export const CODE_LINES = [
  {
    text: 'Hello! 😄',
  },
  {
    text: `I'm Tyson, a full-stack developer based in Toronto, Canada.`,
  },
  {
    text:
      'My interests are mostly in front-end tools, especially React and Vue. 🔥🔥',
  },
  {
    text: `I'm currently the Lead Front-End Developer at BitCine Technologies.`,
  },
  {
    text: 'How to find me:',
  },
  {
    text: (
      <a
        target="_blank"
        title="Email me"
        rel="nofollow noreferrer"
        href="mailto:tysonlouth@gmail.com"
      >
        tysonlouth@gmail.com
      </a>
    ),
  },
  {
    text: (
      <a
        target="_blank"
        title="Visit my Github page"
        rel="nofollow noreferrer"
        href="https://github.com/tlouth19"
      >
        github.com/tlouth19
      </a>
    ),
  },
  {
    text: (
      <a
        target="_blank"
        title="Visit my LinkedIn page"
        rel="nofollow noreferrer"
        href="https://ca.linkedin.com/in/tyson-louth-816b6aa9"
      >
        linkedin.com/tyson-louth
      </a>
    ),
  },
  {
    text: (
      <a
        target="_blank"
        title="Visit my Twitter page"
        rel="nofollow noreferrer"
        href="https://twitter.com/louther18?lang=en"
      >
        twitter.com/louther18
      </a>
    ),
  },
]