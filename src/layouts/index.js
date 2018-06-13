import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title='Tyson Louth'
      meta={[
        { name: 'description', content: 'The personal website of Tyson Louth.' }
      ]}>
      <html lang="en" />
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

