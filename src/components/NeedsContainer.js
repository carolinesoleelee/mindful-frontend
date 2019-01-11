import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NeedsContainer extends Component{

  render(){
    return(
      <div className='Needs'>
      Each need charts go here<br/>
      <Link className='item' to={'/allneeds'}>
      <button>See All Needs Analytic</button>
      </Link><br/>
      </div>
    )
  }
}

export default NeedsContainer
