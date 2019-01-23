import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

class HomePageContainer extends Component{

  render(){
    console.log(this.props)
    return( this.props.currentUser ?
(      <div className='Homepage'>

<div className='lol'>
        <h1 className='title'>Physical and Mental Well-being</h1>
        <p className='intro'>A clear distinction is often made between 'mind' and 'body'. But when considering mental health and physical health, the two should not be thought of as separate. Use this tool to log your day and find out how the two relate for you on a personal level!</p>
        <Link  to={'/analytics'}>
        <button className='button1'>View Analytics</button>
        </Link>
        <Link className='item' to='/timesheet'>
          <button className='button2' >Log Today</button>
        </Link>
      </div>
        <p></p>
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
