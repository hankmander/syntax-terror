import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

function Header (props) {
  return <>
    <h1>[ Syntax Terror }</h1>
    <Link to='/'>
      new
    </Link>
    <Link to='/profiles'>
      submit
    </Link>
  </>
}

export default withRouter(Header)
