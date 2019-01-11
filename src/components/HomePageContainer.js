import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomePageContainer extends Component{

  render(){
    return(
      <div className='Homepage'>
      <Link className='item' to={'/analytics'}>
      <button>See Analytics</button>
      </Link><br/>
      <Link className='item' to='/timesheet'>
        <button>Enter Timesheet</button>
      </Link>
      </div>
    )
  }
}

export default HomePageContainer
