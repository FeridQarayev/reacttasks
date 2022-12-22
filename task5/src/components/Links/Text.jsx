import React from 'react'
import {Link} from 'react-router-dom'
import './Link.css'
const Text = ({link}) => {
  return (
    <Link className='link' to={`/${link}`}>{link}</Link>
  )
}

export default Text