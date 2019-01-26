import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Bar, Radar} from 'react-chartjs-2'
import {fetchingTimesheets} from '../redux/action'

class NeedsContainer extends Component{

  constructor(props){
    super(props)
      this.state = {
    food: [],
    index: 0,
    }
  }

  componentDidMount() {
    this.props.fetchingTimesheets()
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
  return sort

}

text = () => {
  return this.show().map(data => [data.text])
}

  dates = () => {
    let bro = this.show().map(data => [data.date])
    return bro
  }

  getSum = (total, num) => {
  return total + num;
  }

  render(){
    console.log(this.show())
    let food = (this.show().map(data => data.food))
    let water = (this.show().map(data => data.water))
    let sleep = (this.show().map(data => data.hours_of_sleep))
    let poop = (this.show().map(data => data.bowel_movement))
    let friends = (this.show().map(data => data.friends))
    let family = (this.show().map(data => data.family))
    let text = (this.show().map(data => data.text))
    let dataObject = {

      meal: {
          labels: this.dates(),
          datasets: [{
          label: 'Meals Eaten',
          data: food,

          backgroundColor: ['rgba(230, 25, 75, 0.41)', 'rgba(245, 130, 48, .4)', 'rgba(255, 225, 25, .4)', 'rgba(210, 245, 60, .4)',
          'rgba(60, 180, 75, .4)', 'rgba(70, 240, 240, .4)', 'rgba(0, 130, 200, .4)', 'rgba(145, 30, 180, .4)',
           'rgba(240, 50, 230, .4)', 'rgba(128, 128, 128, .4)'],

          borderColor: ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'grey'],
          borderWidth: 1
          }]
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

   water: {
       labels: this.dates(),
       datasets: [{
       label: 'Waters Drank',
       data: water,

       backgroundColor: ['rgba(230, 25, 75, 0.41)', 'rgba(245, 130, 48, .4)', 'rgba(255, 225, 25, .4)', 'rgba(210, 245, 60, .4)',
       'rgba(60, 180, 75, .4)', 'rgba(70, 240, 240, .4)', 'rgba(0, 130, 200, .4)', 'rgba(145, 30, 180, .4)',
        'rgba(240, 50, 230, .4)', 'rgba(128, 128, 128, .4)'],

       borderColor: ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'grey'],
       borderWidth: 1
       }]
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
sleep: {
    labels: this.dates(),
    datasets: [{
    label: 'Hours of sleep',
    data: sleep,

    backgroundColor: ['rgba(230, 25, 75, 0.41)', 'rgba(245, 130, 48, .4)', 'rgba(255, 225, 25, .4)', 'rgba(210, 245, 60, .4)',
    'rgba(60, 180, 75, .4)', 'rgba(70, 240, 240, .4)', 'rgba(0, 130, 200, .4)', 'rgba(145, 30, 180, .4)',
     'rgba(240, 50, 230, .4)', 'rgba(128, 128, 128, .4)'],

    borderColor: ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'grey'],
    borderWidth: 1
    }]
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

poop: {
    labels: this.dates(),
    datasets: [{
    label: 'Pooped',
    data: poop,

    backgroundColor: ['rgba(230, 25, 75, 0.41)', 'rgba(245, 130, 48, .4)', 'rgba(255, 225, 25, .4)', 'rgba(210, 245, 60, .4)',
    'rgba(60, 180, 75, .4)', 'rgba(70, 240, 240, .4)', 'rgba(0, 130, 200, .4)', 'rgba(145, 30, 180, .4)',
     'rgba(240, 50, 230, .4)', 'rgba(128, 128, 128, .4)'],

    borderColor: ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'grey'],
    borderWidth: 1
    }]
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

friends: {
    labels: this.dates(),
    datasets: [{
    label: 'Hungout out with friends',
    data: friends,

    backgroundColor: ['rgba(230, 25, 75, 0.41)', 'rgba(245, 130, 48, .4)', 'rgba(255, 225, 25, .4)', 'rgba(210, 245, 60, .4)',
    'rgba(60, 180, 75, .4)', 'rgba(70, 240, 240, .4)', 'rgba(0, 130, 200, .4)', 'rgba(145, 30, 180, .4)',
     'rgba(240, 50, 230, .4)', 'rgba(128, 128, 128, .4)'],

    borderColor: ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'grey'],
    borderWidth: 1
    }]
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

family: {
    labels: this.dates(),
    datasets: [{
    label: 'Hungout out with family',
    data: family,

    backgroundColor: ['rgba(230, 25, 75, 0.41)', 'rgba(245, 130, 48, .4)', 'rgba(255, 225, 25, .4)', 'rgba(210, 245, 60, .4)',
    'rgba(60, 180, 75, .4)', 'rgba(70, 240, 240, .4)', 'rgba(0, 130, 200, .4)', 'rgba(145, 30, 180, .4)',
     'rgba(240, 50, 230, .4)', 'rgba(128, 128, 128, .4)'],

    borderColor: ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'grey'],
    borderWidth: 1
    }]
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

overall: {
    labels: ['Food', 'Water', 'Sleep', 'Poop', 'Friends', 'Family'],
    datasets: [{
    label: 'Overall',
    data: [],

    backgroundColor: ['rgba(230, 25, 75, 0.41)', 'rgba(245, 130, 48, .4)', 'rgba(255, 225, 25, .4)', 'rgba(210, 245, 60, .4)',
    'rgba(60, 180, 75, .4)', 'rgba(70, 240, 240, .4)', 'rgba(0, 130, 200, .4)', 'rgba(145, 30, 180, .4)',
     'rgba(240, 50, 230, .4)', 'rgba(128, 128, 128, .4)'],

    borderColor: ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'grey'],
    borderWidth: 1
    }]
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
      <div>

          <div className='static'>
          <button className='but1' onClick={(e)=> {this.previousBatch(e)} } >Prev</button>
          <button className='but1' onClick={(e)=> {this.nextBatch(e)} } >Next</button>
            {this.show().map(data => <p className='sticky'>{data.date}: {data.text}</p>)}
            <Link to={'/analytics'}>
            <button className='but'>Go back</button>
            </Link>
              <Link to={'/allneeds'}>
              <button className='but'>All Needs</button>
              </Link><br/>
            </div>
      </div>


      <div><br/><br/><br/>
      <h2 className='title2'>7 Day Needs Overview</h2>





      <Bar data={dataObject.meal} width={100}	height={50} options={
    { maintainAspectRatio: false },
    { title: {display: true, text: `How many Meals did I eat?`, fontsize: 25,fontColor: 'rgba(46, 18, 45, 0.96)', fontFamily: 'verdana'},  }
  }/>

  <br/><br/><br/>


      <Bar data={dataObject.water} width={100}	height={50} options={
    { maintainAspectRatio: false },
    { title: {display: true, text: `How many Cups of water did I drink?`, fontsize: 25,fontColor: 'rgba(46, 18, 45, 0.96)', fontFamily: 'verdana'},  }
      }/><br/><br/><br/>
      <Bar data={dataObject.sleep} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `How many hours I've slept.`, fontsize: 25,fontColor: 'rgba(46, 18, 45, 0.96)', fontFamily: 'verdana'},  }
      }/><br/><br/><br/>
      <Bar data={dataObject.poop} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `How many times I've had a bowel movement.`, fontsize: 25,fontColor: 'rgba(46, 18, 45, 0.96)', fontFamily: 'verdana'},  }
      }/><br/><br/><br/>
      <Bar data={dataObject.friends} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Hours spent with friends.`, fontsize: 25,fontColor: 'rgba(46, 18, 45, 0.96)', fontFamily: 'verdana', fontFamily: 'verdana'},  }
      }/><br/><br/><br/>
      <Bar data={dataObject.family} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Hours spent with family.`, fontsize: 35,fontColor: 'rgba(46, 18, 45, 0.96)', fontFamily: 'verdana'},  }
      }/><br/><br/><br/><br/><br/><br/><br/><br/>

      </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {allTimesheets: state.allTimesheets}
}

export default connect(mapStateToProps, {fetchingTimesheets})(NeedsContainer);
      // if(this.state.index < this.show().length -1){
// <br /><br />
//       {this.show().map(data => <p>{data.date}: {data.text}</p>)}
