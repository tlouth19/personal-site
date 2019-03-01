import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

injectGlobal`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`

const Body = styled('main')`
  height: 100vh;
  width: 100vw;
  background: #5fbc5e;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Layout = ({ children }) => (
  <Body>
    {children}
  </Body>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
