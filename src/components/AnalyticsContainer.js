import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AnalyticsContainer extends Component{

  render(){
    return(
      <div className='Analytics'>
      <Link className='item' to={'/emotions'}>
      <button className='lo'>See Emotions Analytic</button>
      </Link><br/>
      <Link className='item' to='/needs'>
        <button className='li'>See Needs Analytic</button>
      </Link>

      <p className='rando'>"The human body has been designed to resist an infinite number of changes and attacks brought about by its environment. The secret of good health lies in successful adjustment to changing stresses on the body."</p>
      </div>
    )
  }
}

export default AnalyticsContainer
