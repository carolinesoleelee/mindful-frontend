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
      if(this.showTen().length > 1){
    this.setState({
      index: this.state.index + 3
      })
    }
  }

previousBatch = () => {
    if(this.showTen().length >= 1){
  this.setState({
    index: this.state.index - 3
    })
  }
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

  convert = (arr, name) => {
    console.log(arr)
    return arr.map(data => data == name ? 1 : 0)
  }
// arr.map(data => data == "Anxious" ? 1 : 0)


  render(){
 let stress = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data.mood))
 let anger = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Angry').map(data => data.mood))
 let anxious = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Anxious').map(data => data.mood))
 let exhausted = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Exhausted').map(data => data.mood))
 let burnt = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Burnt out').map(data => data.mood))
 let okay = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Okay').map(data => data.mood))
 let content = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Content').map(data => data.mood))
 let excited = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Excited').map(data => data.mood))
 let happy = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Happy').map(data => data.mood))
 let best = this.showTen().map(data => data.emotions.filter(data => data.mood == 'Best Day Ever').map(data => data.mood))
    console.log(this.convert(anger, 'Angry'))

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
          data: this.convert(anxious, 'Anxious')
        }, {
          label: "Anger",
          fill: false,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: this.convert(anger, 'Angry')
        }, {
          label: "Stress",
          fill: false,
          backgroundColor: "rgba(240, 50, 230, 0.27)",
          borderColor: "rgba(240, 50, 230, .4)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(240, 50, 230, .4)",
          pointBorderColor: "#fff",
          data: this.convert(stress, 'Stressed')
        }, {
          label: "Exhaustion",
          fill: false,
          backgroundColor: "rgba(70, 240, 240, 0.21)",
          borderColor: "rgba(70, 240, 240, .4)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(70, 240, 240, .4)",
          pointBorderColor: "#fff",
          data: this.convert(exhausted, 'Exhausted')
        }, {
          label: "Burnt",
          fill: false,
          backgroundColor: "rgba(0, 130, 200, 0.27)",
          borderColor: "rgba(0, 130, 200, .4)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(0, 130, 200, .4)",
          pointBorderColor: "#fff",
          data: this.convert(burnt, 'Burnt out')
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
       data: this.convert(okay, 'Okay')
     }, {
       label: "Content",
       fill: false,
       backgroundColor: "rgba(255,99,132,0.2)",
       borderColor: "rgba(255,99,132,1)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(255,99,132,1)",
       pointBorderColor: "#fff",
       data: this.convert(content, 'Content')
     }, {
       label: "Excited",
       fill: false,
       backgroundColor: "rgba(240, 50, 230, 0.27)",
       borderColor: "rgba(240, 50, 230, .4)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(240, 50, 230, .4)",
       pointBorderColor: "#fff",
       data: this.convert(excited, 'Excited')
     }, {
       label: "Happy",
       fill: false,
       backgroundColor: "rgba(70, 240, 240, 0.21)",
       borderColor: "rgba(70, 240, 240, .4)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(70, 240, 240, .4)",
       pointBorderColor: "#fff",
       data: this.convert(happy, 'Happy')
     }, {
       label: "Best Day",
       fill: false,
       backgroundColor: "rgba(0, 130, 200, 0.27)",
       borderColor: "rgba(0, 130, 200, .4)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(0, 130, 200, .4)",
       pointBorderColor: "#fff",
       data: this.convert(best, 'Best Day Ever')
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
      <h2>3 Day Overview</h2>
      <Bar data={dataObject.negative} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Negative`, fontsize: 25},  }
      }/><br/><br/><br/>
      <button onClick={(e)=> {this.previousBatch(e)} } >Prev</button>
      <button onClick={(e)=> {this.nextBatch(e)} } >Next</button>
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
