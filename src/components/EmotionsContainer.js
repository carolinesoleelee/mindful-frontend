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
    if(this.show().length > 1){
    this.setState({
      index: this.state.index + 3
      })
   }
}


previousBatch = () => {
    if(this.state.index > 0){
  this.setState({
    index: this.state.index - 3
    })
  }
}

list = () =>{
  let arr;
  arr = this.props.allTimesheets.sort((a,b) => {
    let first = new Date(a.date)
    let last = new Date(b.date)
    return last - first
 })
 return arr
}

show = () => {
  let sort = (this.list().slice(this.state.index, this.state.index + 7))
  return sort.sort()

}

  dates = () => {
    let bro = this.show().map(data => [data.date])
    return bro
  }

  moods = () => {
    let moods = this.props.emotions.map(data => data.mood)
    return moods
  }

  convert = (arr, name) => {
    return arr.map(data => data == name ? 1 : 0)
  }
// arr.map(data => data == "Anxious" ? 1 : 0)


  render(){
 let stress = this.show().map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data.mood))
 let anger = this.show().map(data => data.emotions.filter(data => data.mood == 'Angry').map(data => data.mood))
 let anxious = this.show().map(data => data.emotions.filter(data => data.mood == 'Anxious').map(data => data.mood))
 let exhausted = this.show().map(data => data.emotions.filter(data => data.mood == 'Exhausted').map(data => data.mood))
 let burnt = this.show().map(data => data.emotions.filter(data => data.mood == 'Burnt out').map(data => data.mood))
 let okay = this.show().map(data => data.emotions.filter(data => data.mood == 'Okay').map(data => data.mood))
 let content = this.show().map(data => data.emotions.filter(data => data.mood == 'Content').map(data => data.mood))
 let excited = this.show().map(data => data.emotions.filter(data => data.mood == 'Excited').map(data => data.mood))
 let happy = this.show().map(data => data.emotions.filter(data => data.mood == 'Happy').map(data => data.mood))
 let best = this.show().map(data => data.emotions.filter(data => data.mood == 'Best Day Ever').map(data => data.mood))
    console.log(this.show().length > 1)

    let dataObject = {

      negative: {
          labels: this.dates(),
          datasets: [
        {
          label: "Anxiety",
          fill: false,
          backgroundColor: "rgba(238, 69, 64, 0.61)",
          borderColor: "rgba(238, 69, 64, 1)",
          borderWidth: 1,
          fontColor: 'white',
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: this.convert(anxious, 'Anxious')
        }, {
          label: "Anger",
          fill: false,
          backgroundColor: "rgb(201, 42, 66, 0.61)",
          borderColor: "rgb(201, 42, 66, 1)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: this.convert(anger, 'Angry')
        }, {
          label: "Stress",
          fill: false,
          backgroundColor: "rgb(128, 19, 54, 0.61)",
          borderColor: "rgb(128, 19, 54, 1)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(240, 50, 230, .4)",
          pointBorderColor: "#fff",
          data: this.convert(stress, 'Stressed')
        }, {
          label: "Exhaustion",
          fill: false,
          backgroundColor: "rgb(82, 10, 50, 0.61)",
          borderColor: "rgb(82, 10, 50, 1)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(70, 240, 240, .4)",
          pointBorderColor: "#fff",
          data: this.convert(exhausted, 'Exhausted')
        }, {
          label: "Burnt",
          fill: false,
          backgroundColor: "rgb(45, 20, 44, 0.61)",
          borderColor: "rgb(45, 20, 44, 1)",
          borderWidth: 1,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(0, 130, 200, .4)",
          pointBorderColor: "#fff",
          data: this.convert(burnt, 'Burnt out')
        },
          ]
        },
   positive: {
       labels: this.dates(),
       datasets: [
     {
       label: "Okay",
       fill: false,
       backgroundColor: "rgb(174, 204, 102, 0.61)",
       borderColor: "rgb(174, 204, 102, 1)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(179,181,198,1)",
       data: this.convert(okay, 'Okay')
     }, {
       label: "Content",
       fill: false,
       backgroundColor: "rgb(142, 177, 105, 0.61)",
       borderColor: "rgb(142, 177, 105, 1)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(255,99,132,1)",
       pointBorderColor: "#fff",
       data: this.convert(content, 'Content')
     }, {
       label: "Excited",
       fill: false,
       backgroundColor: "rgb(110, 150, 108, 0.61)",
       borderColor: "rgb(110, 150, 108, 1)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(240, 50, 230, .4)",
       pointBorderColor: "#fff",
       data: this.convert(excited, 'Excited')
     }, {
       label: "Happy",
       fill: false,
       backgroundColor: "rgb(77, 122, 110, 0.61)",
       borderColor: "rgb(77, 122, 110, 1)",
       borderWidth: 1,
       pointBorderColor: "#fff",
       pointBackgroundColor: "rgba(70, 240, 240, .4)",
       pointBorderColor: "#fff",
       data: this.convert(happy, 'Happy')
     }, {
       label: "Best Day",
       fill: false,
       backgroundColor: "rgb(45, 96, 113, 0.61)",
       borderColor: "rgb(45, 96, 113, 1)",
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
                fontFamily: "Verdana"
            }
        }]
    }
},

 }


    return (
      <div className="chart">

      <div >

      <div className='static'>

      <button className='but1' onClick={(e)=> {this.previousBatch(e)} } >Prev</button>
      <button className='but1' onClick={(e)=> {this.nextBatch(e)} } >Next</button>
            {this.show().map(data => <p className='sticky'>{data.date}: {data.text}</p>)}
            <Link to={'/analytics'}>
            <button className='but'>Go back</button>
            </Link>
              <Link to={'/allemotions'}>
              <button className='but'>All Emotions</button>
              </Link>
      </div>

      </div>

      <div><br/><br/>
      <h2 className='title2'>7 Day Emotions Overview</h2>
      <Bar data={dataObject.negative} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Negative`, fontsize: 25, fontColor: 'rgba(46, 18, 45, 0.96)', fontFamily: 'verdana'},  }
      }/><br/><br/>

      <Bar data={dataObject.positive} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Positive`, fontsize: 25, fontColor: 'rgba(46, 18, 45, 0.96)', fontFamily: 'verdana'},  }
      }/><br/><br/><br/>

      <br/><br/><br/><br/><br/>
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
