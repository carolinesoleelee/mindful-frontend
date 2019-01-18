import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Bar, Line} from 'react-chartjs-2'
import {fetchingTimesheets} from '../redux/action'

class AllNeedsContainer extends Component{

  constructor(props){
    super(props)
      this.state = {
    food: [],
    }
  }

  componentDidMount() {
    this.props.fetchingTimesheets()
  }

showTen = () => {
  let sort = (this.props.allTimesheets.slice(this.state.index, this.state.index + 7))
  return sort.sort()
}

  dates = () => {
    let bro = this.props.allTimesheets.map(data => [data.date])
    return bro.sort()
  }

  getSum = (total, num) => {
  return total + num;
  }

  render(){
    let food = (this.props.allTimesheets.map(data => data.food))
    let water = (this.props.allTimesheets.map(data => data.water))
    let sleep = (this.props.allTimesheets.map(data => data.hours_of_sleep))
    let poop = (this.props.allTimesheets.map(data => data.bowel_movement))
    let friends = (this.props.allTimesheets.map(data => data.friends))
    let family = (this.props.allTimesheets.map(data => data.family))
    let text = (this.props.allTimesheets.map(data => data.text))
    console.log(this.props.allTimesheets)
    let dataObject = {

      meal: {
          labels: this.dates(),
          datasets: [{
          label: 'Meals Eaten',
          data: food,

          backgroundColor: ['rgba(230, 25, 75, 0)'],

          borderColor: ['red'],
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

       backgroundColor: ['rgba(230, 25, 75, 0)'],

       borderColor: ['red'],
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

    backgroundColor: ['rgba(230, 25, 75, 0)'],

    borderColor: ['red'],
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

    backgroundColor: ['rgba(230, 25, 75, 0)'],

    borderColor: ['red'],
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

    backgroundColor: ['rgba(230, 25, 75, 0)'],

    borderColor: ['red'],
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

    backgroundColor: ['rgba(230, 25, 75, 0)'],

    borderColor: ['red'],
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
      <div className="chart2">
      <div >

      <div className='stick'>

      </div>
      </div>


      <div>
      <h2>Overall Needs</h2>




      <Line data={dataObject.meal} width={100}	height={50} options={
    { maintainAspectRatio: false },
    { title: {display: true, text: `How many Meals did I eat?`, fontsize: 25},  }
  }/>

  <br/><br/><br/>


      <Line data={dataObject.water} width={100}	height={50} options={
    { maintainAspectRatio: false },
    { title: {display: true, text: `How many Cups of water did I drink?`, fontsize: 25},  }
      }/><br/><br/><br/>
      <Line data={dataObject.sleep} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `How many hours I've slept.`, fontsize: 25},  }
      }/><br/><br/><br/>
      <Line data={dataObject.poop} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `How many times I've had a bowel movement.`, fontsize: 25},  }
      }/><br/><br/><br/>
      <Line data={dataObject.friends} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Hours spent with friends.`, fontsize: 25},  }
      }/><br/><br/><br/>
      <Line data={dataObject.family} width={100}	height={50} options={
      { maintainAspectRatio: false },
      { title: {display: true, text: `Hours spent with family.`, fontsize: 25},  }
      }/><br/><br/><br/>

      <Link className='item' to={'/needs'}>
      <button>Go back</button>
      </Link><br/>

        <Link className='item' to={'/allneeds'}>
        <button>See Needs Monthly Analytics?</button><br/>
        <button>See Needs Yearly Analytics?</button>
        </Link><br/>
      </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {allTimesheets: state.allTimesheets}
}

export default connect(mapStateToProps, {fetchingTimesheets})(AllNeedsContainer);
