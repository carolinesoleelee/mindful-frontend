import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchingEmotions} from '../redux/action'
import {creatingTimesheets} from '../redux/action'
import {Redirect, withRouter} from 'react-router-dom'


class TimesheetContainer extends Component{
  constructor(props){
    super(props)
      this.state = {
        user_id: 1,
        date: '',
        text: '',
        food: 0,
        water: 0,
        hours_of_sleep: 0,
        bowel_movement: 0,
        friends: 0,
        family: 0,
        chosenEmotion: [],
      }
    }

    componentDidMount() {
      this.props.fetchingEmotions()
    }

    onClick = (obj) => {
      if(!this.state.chosenEmotion.includes(obj)) {
      this.setState({
        chosenEmotion: [...this.state.chosenEmotion, obj]
      })
    }
  }
    onSubmit = (e) => {
      e.preventDefault()
      this.props.creatingTimesheets(this.state)
      this.props.history.push('/analytics')
    }

    convert = (id) => {
      let arr = []
      this.props.emotions.filter(data => data.id == id ? arr.push(data.mood) : null)
      return arr
    }

  render(){
    console.log(this.convert(this.state.chosenEmotion), this.props.emotions)
    return(this.props.currentUser ?
      (<div className='contain'><div className='Timesheet'>
        <div></div>

        <div className='one'>
        <div></div>
        <p> “Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open.”</p>

        <div><h3>Todays Date</h3>
        <input type="date" min="2019-01-01" max="2019-12-31" value={this.state.date} onChange={e => this.setState({ date: e.target.value })}/>
        <div className='partone'>
              <Link className='button1' to={'/analytics'}>
              <button>See Analytics</button>
              </Link>
              </div>
        </div>
        <p>"The root of all health is in the brain. The trunk of it is in emotion. The branches and leaves are the body. The flower of health blooms when all parts work together."</p>

        <div></div>
        </div>




  <div className='two'><div></div><div><h2>How do you feel today?</h2>{this.props.emotions.map(emo => <button className='butts' onClick ={(e)=> this.onClick(emo.id)}>{emo.mood}</button>)}</div><div></div></div>

  <div className='three'>
        <form onSubmit={(e)=> this.onSubmit(e)}>
          <label>

            How many meals did you eat?:
            <select value={this.state.food} onChange={e => this.setState({ food: parseInt(e.target.value) })}>
            <option value='0'>0</option><option value='1'>1</option>
            <option value='2'>2</option><option value='3'>3</option><option value='4'>4+</option></select>
            <br />



            How many cups of water did you drink?:
            <select value={this.state.water} onChange={e => this.setState({ water: parseInt(e.target.value)})}>
            <option value='0'>0</option><option value='1'>1</option>
            <option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>
            <option value='5'>5</option><option value='6'>6</option><option value='7'>7</option></select>
            <br />



            How many hours did you sleep?:
            <select value={this.state.hours_of_sleep} onChange={e => this.setState({ hours_of_sleep: parseInt(e.target.value) })}>
            <option value='0'>0</option><option value='1'>1</option>
            <option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>
            <option value='5'>5</option><option value='6'>6</option><option value='7'>7</option></select>
            <br />



            Bowel Movements?:
            <select value={this.state.bowel_movement} onChange={e => this.setState({ bowel_movement: parseInt(e.target.value) })}>
            <option value='0'>0</option><option value='1'>1</option>
            <option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>
            <option value='5'>5</option></select>
            <br />



            Hours spent with friends?:
            <select value={this.state.friends} onChange={e => this.setState({ friends: parseInt(e.target.value) })}>
            <option value='0'>0</option><option value='1'>1</option>
            <option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>
            <option value='5'>5</option><option value='6'>6</option><option value='7'>7</option>
            </select>
            <br />


            Hours spent with family?:
            <select value={this.state.family} onChange={e => this.setState({ family: parseInt(e.target.value) })}>
            <option value='0'>0</option><option value='1'>1</option>
            <option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>
            <option value='5'>5</option><option value='6'>6</option><option value='7'>7</option>
            </select>
            <br />

            <label>Sum up your day in one sentence:</label><br/>
            <textarea value={this.state.text} onChange={e => this.setState({ text: e.target.value })}/><br/>


          </label>
          <input type="submit" value="Submit" /><br />
            <Link to='/analytics'>
            </Link>
        </form>
        </div>
      </div> </div>) : <Redirect to="/login" />

    )
  }
}

const mapStateToProps = (state) => {
  return {emotions: state.emotions}
}

export default withRouter(connect(mapStateToProps, {fetchingEmotions, creatingTimesheets})(TimesheetContainer));

// console.log(this.state.chosenEmotion, this.state.date, this.state.food,
//   this.state.water,this.state.hours_of_sleep,this.state.bowel_movement, this.state.friends, this.state.family, this.state.text)

// class TimesheetContainer extends Component{
//   constructor(){
//     super()
//       this.state = {
//         user_id: 0,
//         date: '',
//         text: '',
//         food: 0,
//         water: 0,
//         hours_of_sleep: 0,
//         bowel_movement: 0,
//         friends: 0,
//         family: 0
//       }
//     }
//
//   render(){
//     console.log(this.state)
//     return(
//       <div className='Timesheet'>
//         <p>How many meals did you eat? {this.state.food}</p>
//         <p>How many cups of water did you drink? {this.state.water}</p>
//         <p>How many hours did you sleep? {this.state.hours_of_sleep}</p>
//         <p>Bowl Movements? {this.state.bowel_movement}</p>
//         <p>Hungout with friends? {this.state.friends}</p>
//         <p>Hungout with family? {this.state.family}</p>
//       </div>
//     )
//   }
// }
//
// export default TimesheetContainer
