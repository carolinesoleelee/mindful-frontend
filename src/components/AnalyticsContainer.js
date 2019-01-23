import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AnalyticsContainer extends Component{

  render(){
    return(
      <div className='Analytics'>


      <div></div>

      <div className='work'>
      <div></div>
      <a href="http://localhost:3000/needs"  id="logo">
        <img src='https://i.imgur.com/bh4r6rT.png' className='ala' />
        <p className='al'>View Needs</p>
      </a>
      <div></div>
      <a href="http://localhost:3000/emotions"  id="logo">
        <img src='https://i.imgur.com/13aIf7Y.png' className='ala1'/>
        <p className='al'>View Emotions</p>
      </a>
      <div></div>
      </div>

      <div>
      <p className='rando'>"The human body has been designed to resist an infinite number of changes and attacks brought about by its environment. The secret of good health lies in successful adjustment to changing stresses on the body."</p>
      </div>


      </div>
    )
  }
}

export default AnalyticsContainer
