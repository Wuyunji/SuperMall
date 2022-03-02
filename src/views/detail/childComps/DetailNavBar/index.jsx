
import React from 'react'
import NavBar from '../../../../components/common/NavBar'
import Left from './childComps/Left'
import Center from './childComps/Center'
import './index.css'

function DetailNavBar(props) {
  // console.log('DetailNavBar');

  return (
    <NavBar Left={<Left />} Center={<Center {...props}/>} />
  )
}

export default DetailNavBar
