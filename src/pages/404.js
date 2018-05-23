import React from 'react'
import Terminal from '../components/terminal'

const NotFoundPage = () => (
  <Terminal codeLines={[{ text: 'Whoops! 404 Error.', error: true }]} />
)

export default NotFoundPage
