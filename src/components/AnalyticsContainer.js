import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AnalyticsContainer extends Component{

  render(){
    return(
      <div className='Analytics'>
      <Link className='item' to={'/emotions'}>
      <button>See Emotions Analytic</button>
      </Link><br/>
      <Link className='item' to='/needs'>
        <button>See Needs Analytic</button>
      </Link>
      </div>
    )
  }
}

export default AnalyticsContainer
