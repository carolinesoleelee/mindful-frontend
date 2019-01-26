import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Line, Bar, Pie} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {fetchingTimesheets} from '../redux/action'
import {fetchingEmotions} from '../redux/action'

class Compare extends Component{

  constructor(props){
    super(props)
      this.state = {
    food: [],
    notClicked: true,
    }
  }

  componentDidMount() {
    this.props.fetchingTimesheets()
    this.props.fetchingEmotions()
  }

  handleToggle = () => {
      this.setState({
        notClicked: !this.state.notClicked
      })
    }


  dates = () => {
    let bro = this.props.allTimesheets.map(data => [data.date])
    return bro.sort()
  }

  moods = () => {
    let moods = this.props.emotions.map(data => data.mood)
    return moods
  }

  convert = (arr, name) => {
    return arr.map(data => data == name ? 1 : 0)
  }
// arr.map(data => data == "Anxious" ? 1 : 0)
   convert = (arr, name) => {
     return arr.map(data => data == name ? 1 : 0)
   }

  lowSleep = () => {
    return (this.props.allTimesheets.filter(data => data.hours_of_sleep < 6))
  }

  lowWater = () => {
    return (this.props.allTimesheets.filter(data => data.water < 3))
  }

  highSleep = () => {
    return (this.props.allTimesheets.filter(data => data.hours_of_sleep > 6))
  }

  highWater = () => {
    return (this.props.allTimesheets.filter(data => data.water > 3))
  }


  render(){
 let lowSleep = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data.mood))
 let lowSleep1 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Angry').map(data => data.mood))
 let lowSleep2 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Anxious').map(data => data.mood))
 let lowSleep3 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Exhausted').map(data => data.mood))
 let lowSleep4 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Burnt out').map(data => data.mood))
 let lowSleep5 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Okay').map(data => data.mood))
 let lowSleep6 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Content').map(data => data.mood))
 let lowSleep7 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Excited').map(data => data.mood))
 let lowSleep8 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Happy').map(data => data.mood))
 let lowSleep9 = this.lowSleep().map(data => data.emotions.filter(data => data.mood == 'Best Day Ever').map(data => data.mood))

 let lowWater = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data.mood))
 let lowWater1 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Angry').map(data => data.mood))
 let lowWater2 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Anxious').map(data => data.mood))
 let lowWater3 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Exhausted').map(data => data.mood))
 let lowWater4 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Burnt out').map(data => data.mood))
 let lowWater5 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Okay').map(data => data.mood))
 let lowWater6 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Content').map(data => data.mood))
 let lowWater7 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Excited').map(data => data.mood))
 let lowWater8 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Happy').map(data => data.mood))
 let lowWater9 = this.lowWater().map(data => data.emotions.filter(data => data.mood == 'Best Day Ever').map(data => data.mood))

 let highSleep = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data.mood))
 let highSleep1 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Angry').map(data => data.mood))
 let highSleep2 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Anxious').map(data => data.mood))
 let highSleep3 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Exhausted').map(data => data.mood))
 let highSleep4 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Burnt out').map(data => data.mood))
 let highSleep5 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Okay').map(data => data.mood))
 let highSleep6 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Content').map(data => data.mood))
 let highSleep7 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Excited').map(data => data.mood))
 let highSleep8 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Happy').map(data => data.mood))
 let highSleep9 = this.highSleep().map(data => data.emotions.filter(data => data.mood == 'Best Day Ever').map(data => data.mood))

 let highWater = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data.mood))
 let highWater1 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Angry').map(data => data.mood))
 let highWater2 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Anxious').map(data => data.mood))
 let highWater3 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Exhausted').map(data => data.mood))
 let highWater4 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Burnt out').map(data => data.mood))
 let highWater5 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Okay').map(data => data.mood))
 let highWater6 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Content').map(data => data.mood))
 let highWater7 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Excited').map(data => data.mood))
 let highWater8 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Happy').map(data => data.mood))
 let highWater9 = this.highWater().map(data => data.emotions.filter(data => data.mood == 'Best Day Ever').map(data => data.mood))

 let lSSum = this.convert(lowSleep, 'Stressed').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum1 = this.convert(lowSleep1, 'Angry').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum2 = this.convert(lowSleep2, 'Anxious').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum3 = this.convert(lowSleep3, 'Exhausted').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum4 = this.convert(lowSleep4, 'Burnt out').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum5 = this.convert(lowSleep5, 'Okay').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum6 = this.convert(lowSleep6, 'Content').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum7 = this.convert(lowSleep7, 'Excited').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum8 = this.convert(lowSleep8, 'Happy').reduce(function (memo, num) {  return memo + num}, 0)
 let lSSum9 = this.convert(lowSleep9, 'Best Day Ever').reduce(function (memo, num) {  return memo + num}, 0)

 let lWSum = this.convert(lowWater, 'Stressed').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum1 = this.convert(lowWater1, 'Angry').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum2 = this.convert(lowWater2, 'Anxious').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum3 = this.convert(lowWater3, 'Exhausted').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum4 = this.convert(lowWater4, 'Burnt out').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum5 = this.convert(lowWater5, 'Okay').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum6 = this.convert(lowWater6, 'Content').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum7 = this.convert(lowWater7, 'Excited').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum8 = this.convert(lowWater8, 'Happy').reduce(function (memo, num) {  return memo + num}, 0)
 let lWSum9 = this.convert(lowWater9, 'Best Day Ever').reduce(function (memo, num) {  return memo + num}, 0)

 let hSSum = this.convert(highSleep, 'Stressed').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum1 = this.convert(highSleep1, 'Angry').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum2 = this.convert(highSleep2, 'Anxious').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum3 = this.convert(highSleep3, 'Exhausted').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum4 = this.convert(highSleep4, 'Burnt out').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum5 = this.convert(highSleep5, 'Okay').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum6 = this.convert(highSleep6, 'Content').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum7 = this.convert(highSleep7, 'Excited').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum8 = this.convert(highSleep8, 'Happy').reduce(function (memo, num) {  return memo + num}, 0)
 let hSSum9 = this.convert(highSleep9, 'Best Day Ever').reduce(function (memo, num) {  return memo + num}, 0)

 let hWSum = this.convert(highWater, 'Stressed').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum1 = this.convert(highWater1, 'Angry').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum2 = this.convert(highWater2, 'Anxious').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum3 = this.convert(highWater3, 'Exhausted').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum4 = this.convert(highWater4, 'Burnt out').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum5 = this.convert(highWater5, 'Okay').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum6 = this.convert(highWater6, 'Content').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum7 = this.convert(highWater7, 'Excited').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum8 = this.convert(highWater8, 'Happy').reduce(function (memo, num) {  return memo + num}, 0)
 let hWSum9 = this.convert(highWater9, 'Best Day Ever').reduce(function (memo, num) {  return memo + num}, 0)
      console.log(this.lowWater())
    let dataObject = {

      lowSleepNeg: {
        labels: ["Stressed", "Angry", "Anxious", "Exhausted", "Burnt out"],
      datasets: [{
          label: '# of Votes',
          data: [lSSum, lSSum1, lSSum2, lSSum3, lSSum4],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',

          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
      }]
      },
      lowSleepPos: {
        labels: ["Okay", 'Content', 'Excited', 'Happy', 'Best Day Ever'],
      datasets: [{
          label: '# of Votes',
          data: [lSSum5, lSSum6, lSSum7, lSSum8, lSSum9],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',

          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
      }]
      },
      lowWaterNeg: {
        labels: ["Stressed", "Angry", "Anxious", "Exhausted", "Burnt out"],
      datasets: [{
          label: '# of Votes',
          data: [lWSum, lWSum1, lWSum2, lWSum3, lWSum4],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',

          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
      }]
      },
      lowWaterPos: {
        labels: ["Okay", 'Content', 'Excited', 'Happy', 'Best Day Ever'],
      datasets: [{
          label: '# of Votes',
          data: [lWSum5, lWSum6, lWSum7, lWSum8, lWSum9],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',

          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
      }]
    },
    highSleepNeg: {
      labels: ["Stressed", "Angry", "Anxious", "Exhausted", "Burnt out"],
    datasets: [{
        label: '# of Votes',
        data: [hSSum, hSSum1, hSSum2, hSSum3, hSSum4],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',

        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
    },
    highSleepPos: {
      labels: ["Okay", 'Content', 'Excited', 'Happy', 'Best Day Ever'],
    datasets: [{
        label: '# of Votes',
        data: [hSSum5, hSSum6, hSSum7, hSSum8, hSSum9],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',

        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
    },
    highWaterNeg: {
      labels: ["Stressed", "Angry", "Anxious", "Exhausted", "Burnt out"],
    datasets: [{
        label: '# of Votes',
        data: [hWSum, hWSum1, hWSum2, hWSum3, hWSum4],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',

        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
    },
    highWaterPos: {
      labels: ["Okay", 'Content', 'Excited', 'Happy', 'Best Day Ever'],
    datasets: [{
        label: '# of Votes',
        data: [hWSum5, hWSum6, hWSum7, hWSum8, hWSum9],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',

        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
    }
 }

    return (
      <div className="out">

      <div>
      <br/>
      <br/>
      <h3 className='title2'>Emotions Based on Hours of Sleep</h3>
      {this.state.notClicked ?
        <Pie data={dataObject.lowSleepNeg} width={100}	height={50} options={{
                     title: {
                     text: 'Less than 6 [Negative]',
                     display: true,
                     fontsize: 200
                   },
                   legend: {
                   display: true,
                   position: "top"
                     },
                 }}/>
    :

    <Pie data={dataObject.lowSleepPos} width={100}	height={50} options={{
               title: {
                 text: 'Less than 6 [Positive]',
                 display: true,
                 fontsize: 200
               },
               legend: {
                 display: true,
                 position: "top"
               }
             }}/>}

    {this.state.notClicked ?
      <Pie data={dataObject.highSleepNeg} width={100}	height={50} options={{
                 title: {
                   text: 'More than 6 [Negative]',
                   display: true,
                   fontsize: 200
                 },
                 legend: {
                   display: false,
                   position: "bottom"
                 }
               }}/>
    :
    <Pie data={dataObject.highSleepPos} width={100}	height={50} options={
    { maintainAspectRatio: false },
    { title: {display: true, text: `More than 6 [Positive]`, fontsize: 25},  }
    }/>}

      </div>
      <div>
      <br/>
      <br/>
      {this.state.notClicked ?
        <button className='comp'
          onClick={this.handleToggle}>
            See Positive Effects
        </button>
        :
        <button className='comp'
          onClick={this.handleToggle}>
            See Negative Effects
        </button>
      }
      <h3 className='title2'>Emotions Based on Water intake</h3>
      {this.state.notClicked ?
        <Pie data={dataObject.lowWaterNeg} width={100}	height={50} options={{
                   title: {
                     text: 'Less than 3 [Negative]',
                     display: true,
                     fontsize: 200
                   },
                   legend: {
                     display: true,
                     position: "top"
                   }
                 }}/>
      :
      <Pie data={dataObject.lowWaterPos} width={100}	height={50} options={{
                 title: {
                   text: 'Less than 3 [Positive]',
                   display: true,
                   fontsize: 200
                 },
                 legend: {
                   display: true,
                   position: "top"
                 }
               }}/>}

      {this.state.notClicked ?
        <Pie data={dataObject.highWaterNeg} width={100}	height={50} options={{
                   title: {
                     text: 'More than 3 [Negative]',
                     display: true,
                     fontsize: 200
                   },
                   legend: {
                     display: false,
                     position: "bottom"
                   }
                 }}/>
      :
      <Pie data={dataObject.highWaterPos} width={100}	height={50} options={{
                 title: {
                   text: 'More than 3 [Positive]',
                   display: true,
                   fontsize: 200,
                 },
                 legend: {
                   display: false,
                   position: "bottom"
                 }
               }}/>}
<br/><br/>

      </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {allTimesheets: state.allTimesheets, emotions: state.emotions}
}

export default connect(mapStateToProps, {fetchingTimesheets, fetchingEmotions})(Compare);
// let stress = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data.mood))
// let anger = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Angry').map(data => data.mood))
// let anxious = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Anxious').map(data => data.mood))
// let exhausted = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Exhausted').map(data => data.mood))
// let burnt = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Burnt out').map(data => data.mood))
// let okay = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Okay').map(data => data.mood))
// let content = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Content').map(data => data.mood))
// let excited = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Excited').map(data => data.mood))
// let happy = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Happy').map(data => data.mood))
// let best = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Best Day Ever').map(data => data.mood))
