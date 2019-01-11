import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchingEmotions} from '../redux/action'
import {creatingTimesheets} from '../redux/action'

class TimesheetContainer extends Component{
  constructor(props){
    super(props)
      this.state = {
        user_id: 0,
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
    answers = (e) => {
      console.log('works!')
    }

  render(){
    console.log(this.state.food,this.state.water,this.state.hours_of_sleep,this.state.bowel_movement, this.state.friends, this.state.family)
    return(
      <div className='Timesheet'>
        {this.props.emotions.map(emo => <button onClick ={(e)=> this.onClick(emo.id)}>{emo.mood}</button>)}
        <form>
          <label>


            How many meals did you eat?:
            <select value={this.state.food} onChange={e => this.setState({ food: parseInt(e.target.value) })}>
            <option value='0'>0</option><option value='1'>1</option>
            <option value='2'>2</option><option value='3'>3</option><option value='4'>3+</option></select>
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



            Bowl Movements?:
            <select value={this.state.bowel_movement} onChange={e => this.setState({ bowel_movement: parseInt(e.target.value) })}>
            <option value='0'>0</option><option value='1'>1</option>
            <option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>
            <option value='5'>5</option></select>
            <br />



            Hungout with friends?:
            <select value={this.state.friends} onChange={e => this.setState({ friends: parseInt(e.target.value) })}>
            <option value='0'>No</option><option value='1'>Yes</option>
            </select>
            <br />


            Hungout with family?:
            <select value={this.state.family} onChange={e => this.setState({ family: parseInt(e.target.value) })}>
            <option value='0'>No</option><option value='1'>Yes</option>
            </select>
            <br />


          </label>
          <input type="submit" value="Submit" /><br />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {emotions: state.emotions}
}

export default connect(mapStateToProps, {fetchingEmotions})(TimesheetContainer);

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
