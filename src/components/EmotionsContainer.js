import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {fetchingTimesheets} from '../redux/action'
import {fetchingEmotions} from '../redux/action'

class EmotionsContainer extends Component{

  constructor(props){
    super(props)
      this.state = {
    food: [],
    index: 0,
    }
  }

  componentDidMount() {
    this.props.fetchingTimesheets()
    this.props.fetchingEmotions()
  }

  nextBatch = () => {
  this.setState({
    index: this.state.index + 3
  })
}

previousBatch = () => {
  this.setState({
    index: this.state.index - 3
  })
}

showTen = () => {
  return (this.props.allTimesheets.slice(this.state.index, this.state.index + 3))
}

  dates = () => {
    let bro = this.showTen().map(data => [data.date])
    return bro.sort()
  }

  moods = () => {
    let moods = this.props.emotions.map(data => data.mood)
    return moods
  }

  convert = (arr) => {
    return arr.map(data => data == 1 ? 1 : 0)
  }

  render(){
 let stress = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data ? 1 : 0))
 let anger = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Angry'))
 let anxious = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Anxious'))
 let exhausted = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Exhausted'))
 let burnt = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Burnt out'))
    console.log(this.convert(anxious))

    let dataObject = {

      negative: {
          labels: this.dates(),
          datasets: [
        {
          label: "Anxiety",
          fill: false,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [1,2,3]
        }, {
          label: "Anger",
          fill: false,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [2,3,4]
        }, {
          label: "Stress",
          fill: false,
          backgroundColor: "rgba(240, 50, 230, 0.27)",
          borderColor: "rgba(240, 50, 230, .4)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(240, 50, 230, .4)",
          pointBorderColor: "#fff",
          data: [3,4,5]
        }, {
          label: "Exhaustion",
          fill: false,
          backgroundColor: "rgba(70, 240, 240, 0.21)",
          borderColor: "rgba(70, 240, 240, .4)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(70, 240, 240, .4)",
          pointBorderColor: "#fff",
          data: [4,5,6]
        }, {
          label: "Burnt",
          fill: false,
          backgroundColor: "rgba(0, 130, 200, 0.27)",
          borderColor: "rgba(0, 130, 200, .4)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(0, 130, 200, .4)",
          pointBorderColor: "#fff",
          data: [5,6,7]
        },
          ]
        },

      options: {
       scales: { yAxes: [{   ticks: { beginAtZero: true } }]   }
   },
   positive: {
       labels: this.dates(),
       datasets: [
     {
       label: "Okay",
       fill: false,
       backgroundColor: "rgba(179,181,198,0.2)",
       borderColor: "rgba(179,181,198,1)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(179,181,198,1)",
       data: [1,0,1]
     }, {
       label: "Content",
       fill: false,
       backgroundColor: "rgba(255,99,132,0.2)",
       borderColor: "rgba(255,99,132,1)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(255,99,132,1)",
       pointBorderColor: "#fff",
       data: [1,1,0]
     }, {
       label: "Excited",
       fill: false,
       backgroundColor: "rgba(240, 50, 230, 0.27)",
       borderColor: "rgba(240, 50, 230, .4)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(240, 50, 230, .4)",
       pointBorderColor: "#fff",
       data: [0,1,1]
     }, {
       label: "Happy",
       fill: false,
       backgroundColor: "rgba(70, 240, 240, 0.21)",
       borderColor: "rgba(70, 240, 240, .4)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(70, 240, 240, .4)",
       pointBorderColor: "#fff",
       data: [0,1,0]
     }, {
       label: "Best Day",
       fill: false,
       backgroundColor: "rgba(0, 130, 200, 0.27)",
       borderColor: "rgba(0, 130, 200, .4)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(0, 130, 200, .4)",
       pointBorderColor: "#fff",
       data: [0,0,0]
     },
       ]
     },
   options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
},

 }

    return (
      <div className="chart">
      <div></div>
      <div>

      <Bar data={dataObject.negative} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Negative`, fontsize: 25},  }
      }/><br/><br/><br/>
      <Bar data={dataObject.positive} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Positive`, fontsize: 25},  }
      }/><br/><br/><br/>

        <Link className='item' to={'/allemotions'}>
        <button>See All Emotions Analytic</button>
        </Link><br/>
      </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {allTimesheets: state.allTimesheets, emotions: state.emotions}
}

export default connect(mapStateToProps, {fetchingTimesheets, fetchingEmotions})(EmotionsContainer);


// <Radar
//   data={this.state.chartData}
//   options={{
//     title:{
//       display:this.props.displayTitle,
//       text:'Stressed',
//       fontSize:25
//     },
//     legend:{
//       display:this.props.displayLegend,
//       position:this.props.legendPosition
//     }
//   }}
// />

// this.props.allTimesheets.map(data => data.emotions.map(data => data))
// console.log(stress, anger, anxious, exhausted, burnt)
