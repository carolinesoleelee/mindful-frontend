import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

class HomePageContainer extends Component{

  render(){
    console.log(this.props)
    return( this.props.currentUser ?
(      <div className='Homepage'>
      <h2>Hey {this.props.currentUser ? this.props.currentUser.name: null}!</h2>
      <Link className='item' to={'/analytics'}>
      <button>See Analytics</button>
      </Link><br/>
      <Link className='item' to='/timesheet'>
        <button>Enter Timesheet</button>
      </Link>
      </div>) : <Redirect to="/login" />
    )
  }
}

export default HomePageContainer

// <div className='Homepage'>
// <h2>Hey {this.props.currentUser ? this.props.currentUser.name: null}!</h2>
// <Link className='item' to={'/analytics'}>
// <button>See Analytics</button>
// </Link><br/>
// <Link className='item' to='/timesheet'>
//   <button>Enter Timesheet</button>
// </Link>
// </div>
