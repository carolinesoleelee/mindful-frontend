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
    console.log(this.state.chosenEmotion, this.state.date, this.state.food, this.state.water,this.state.hours_of_sleep,this.state.bowel_movement, this.state.friends, this.state.family, this.state.text)
    return(this.props.currentUser ?
      (<div className='contain'>
      <div className='Timesheet'>
        <div></div>

        <div className='one'>
        <div></div>

        <div><h3>Todays Date</h3>
        <input className='date' type="date" min="2019-01-01" max="2019-12-31" value={this.state.date} onChange={e => this.setState({ date: e.target.value })}/>
        <div className='partone'>

              </div>
        </div>

        <div></div>
        </div>




  <div className='two'><div></div><div className='column'>{this.props.emotions.map(emo => <button className='butts' onClick ={(e)=> this.onClick(emo.id)}>{emo.mood}</button>)}</div><div></div></div>

  <div className='three'>
        <form onSubmit={(e)=> this.onSubmit(e)}>
          <label>

            <p className='question'>How many meals did you eat?</p>
              <input type="range" min="0" max="6" value={this.state.food} onChange={e => this.setState({ food: parseInt(e.target.value) })}/>
              <span class="range-slider__value">{this.state.food}</span>
            <br />



            <p className='question'>How many cups of water did you drink?</p>
            <input type="range" min="0" max="10" value={this.state.water} onChange={e => this.setState({ water: parseInt(e.target.value)})}/>
              <span class="range-slider__value">{this.state.water}</span>
            <br />



            <p className='question'>How many hours did you sleep?</p>
              <input type="range" min="0" max="10" value={this.state.hours_of_sleep} onChange={e => this.setState({ hours_of_sleep: parseInt(e.target.value) })}/>
                <span class="range-slider__value">{this.state.hours_of_sleep}</span>
            <br />



            <p className='question'>Number of bowel movements?</p>
            <input type="range" min="0" max="5" value={this.state.bowel_movement} onChange={e => this.setState({ bowel_movement: parseInt(e.target.value) })}/>
                <span class="range-slider__value">{this.state.bowel_movement}</span>
            <br />



            <p className='question'>Hours spent socializing with friends?</p>
              <input type="range" min="0" max="10" value={this.state.friends} onChange={e => this.setState({ friends: parseInt(e.target.value) })}/>
                <span class="range-slider__value">{this.state.friends}</span>
            <br />


            <p className='question'>Hours spent with family?</p>
            <input type="range" min="0" max="10" value={this.state.family} onChange={e => this.setState({ family: parseInt(e.target.value) })}/>
                                <span class="range-slider__value">{this.state.family}</span>
            <br /><br/>

            <label className='question'>Sum up your day in one sentence:</label><br/>
            <textarea rows="4" cols="50" value={this.state.text} onChange={e => this.setState({ text: e.target.value })}/><br/>


          </label>
          <input className='submit' type="submit" value="Submit" /><br />
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
