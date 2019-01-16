import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Bar, Line} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {fetchingTimesheets} from '../redux/action'
import {fetchingEmotions} from '../redux/action'

class AllEmotionsContainer extends Component{

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

  dates = () => {
    let bro = this.props.allTimesheets.map(data => [data.date])
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

handleToggle = () => {
    this.setState({
      notClicked: !this.state.notClicked
    })
  }

  render(){
 let stress = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Stressed').map(data => data.mood))
 let anger = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Angry').map(data => data.mood))
 let anxious = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Anxious').map(data => data.mood))
 let exhausted = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Exhausted').map(data => data.mood))
 let burnt = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Burnt out').map(data => data.mood))
 let okay = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Okay').map(data => data.mood))
 let content = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Content').map(data => data.mood))
 let excited = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Excited').map(data => data.mood))
 let happy = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Happy').map(data => data.mood))
 let best = this.props.allTimesheets.map(data => data.emotions.filter(data => data.mood == 'Best Day Ever').map(data => data.mood))
    console.log(this.convert(anger, 'Angry'))

    let dataObject = {

      anxious: {
          labels: this.dates(),
          datasets: [
        {
          label: "Negative",
          fill: true,
          backgroundColor: "rgba(217, 25, 25, 0.62)",
          borderColor: "rgba(217, 25, 25, 0.62)",
          borderWidth: .5,
          pointBorderColor: "#fff",
          pointBorderWidth: 'Dashed',
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointStyle: 'rect',
          data: this.convert(anxious, 'Anxious')
        }]
        },
        anger: {
            labels: this.dates(),
            datasets: [
          {
            label: "Negative",
            backgroundColor: "rgba(217, 25, 25, 0.62)",
            borderColor: "rgba(217, 25, 25, 0.62)",
            borderWidth: .5,
            pointBorderColor: "#fff",
            pointBorderWidth: 'Dashed',
            pointBackgroundColor: "rgba(255, 0, 0, 1)",
            pointStyle: 'rect',
              data: this.convert(anger, 'Angry')
          }]
          },
          stress: {
              labels: this.dates(),
              datasets: [
            {
              label: "Negative",
              backgroundColor: "rgba(217, 25, 25, 0.62)",
              borderColor: "rgba(217, 25, 25, 0.62)",
              borderWidth: .5,
              pointBorderColor: "#fff",
              pointBorderWidth: 'Dashed',
              pointBackgroundColor: "rgba(255, 0, 0, 1)",
              pointStyle: 'rect',
                data: this.convert(stress, 'Stressed')
            }]
            },
            exhausted: {
                labels: this.dates(),
                datasets: [
              {
                label: "Negative",
                backgroundColor: "rgba(217, 25, 25, 0.62)",
                borderColor: "rgba(217, 25, 25, 0.62)",
                borderWidth: .5,
                pointBorderColor: "#fff",
                pointBorderWidth: 'Dashed',
                pointBackgroundColor: "rgba(255, 0, 0, 1)",
                pointStyle: 'rect',
                  data: this.convert(exhausted, 'Exhausted')
              }]
              },
              burnt: {
                  labels: this.dates(),
                  datasets: [
                {
                  label: "Negative",
                  backgroundColor: "rgba(217, 25, 25, 0.62)",
                  borderColor: "rgba(217, 25, 25, 0.62)",
                  borderWidth: .5,
                  pointBorderColor: "#fff",
                  pointBorderWidth: 'Dashed',
                  pointBackgroundColor: "rgba(255, 0, 0, 1)",
                  pointStyle: 'rect',
                    data: this.convert(burnt, 'Burnt out')
                }]
                },

      options: {
       scales: { yAxes: [{   ticks: { beginAtZero: true } }]   }
   },
     okay: {
       labels: this.dates(),
       datasets: [
     {
       label: "Positive",
       fill: true,
       backgroundColor: "rgba(25, 96, 217, 0.62)",
       borderColor: "rgba(25, 96, 217, 0.62)",
       borderWidth: .5,
       pointBorderColor: "#fff",
       pointBorderWidth: 'Dashed',
       pointBackgroundColor: "rgba(25, 96, 217, 0.62)",
       pointStyle: 'rect',
       data: this.convert(okay, 'Okay')
     }]
     },
     content: {
         labels: this.dates(),
         datasets: [
       {
         label: "Positive",
         fill: true,
         backgroundColor: "rgba(25, 96, 217, 0.62)",
         borderColor: "rgba(25, 96, 217, 0.62)",
         borderWidth: .5,
         pointBorderColor: "#fff",
         pointBorderWidth: 'Dashed',
         pointBackgroundColor: "rgba(25, 96, 217, 0.62)",
         pointStyle: 'rect',
           data: this.convert(content, 'Content')
       }]
       },
       excited: {
           labels: this.dates(),
           datasets: [
         {
           label: "Positive",
           fill: true,
           backgroundColor: "rgba(25, 96, 217, 0.62)",
           borderColor: "rgba(25, 96, 217, 0.62)",
           borderWidth: .5,
           pointBorderColor: "#fff",
           pointBorderWidth: 'Dashed',
           pointBackgroundColor: "rgba(25, 96, 217, 0.62)",
           pointStyle: 'rect',
             data: this.convert(excited, 'Excited')
         }]
         },
         happy: {
             labels: this.dates(),
             datasets: [
           {
             label: "Positive",
             fill: true,
             backgroundColor: "rgba(25, 96, 217, 0.62)",
             borderColor: "rgba(25, 96, 217, 0.62)",
             borderWidth: .5,
             pointBorderColor: "#fff",
             pointBorderWidth: 'Dashed',
             pointBackgroundColor: "rgba(25, 96, 217, 0.62)",
             pointStyle: 'rect',
               data: this.convert(happy, 'Happy')
           }]
           },
           best: {
               labels: this.dates(),
               datasets: [
             {
               label: "Positive",
               fill: true,
               backgroundColor: "rgba(25, 96, 217, 0.62)",
               borderColor: "rgba(25, 96, 217, 0.62)",
               borderWidth: .5,
               pointBorderColor: "#fff",
               pointBorderWidth: 'Dashed',
               pointBackgroundColor: "rgba(25, 96, 217, 0.62)",
               pointStyle: 'rect',
                 data: this.convert(best, 'Best Day Ever')
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
      <div></div>
      <div>
      {this.state.notClicked ?
        <button
          onClick={this.handleToggle}>
            Click to see Positive
        </button>
        :
        <button
          onClick={this.handleToggle}>
            Click to see Negative
        </button>
      }

      {this.state.notClicked ?


        <Line data={dataObject.anxious} width={100}	height={50} options={
        { maintainAspectRatio: false },
        { title: {display: true, text: `Anxiety`, fontsize: 25},  }
      }/>

    :
                <Line data={dataObject.okay} width={100}	height={50} options={
                { maintainAspectRatio: false },
                { title: {display: true, text: `Okay`, fontsize: 25},  }
                }/>
              }





              {this.state.notClicked ?


                <Line data={dataObject.anger} width={100}	height={50} options={
                { maintainAspectRatio: false },
                { title: {display: true, text: `Anger`, fontsize: 25},  }
              }/>

            :
                        <Line data={dataObject.content} width={100}	height={50} options={
                        { maintainAspectRatio: false },
                        { title: {display: true, text: `Content`, fontsize: 25},  }
                        }/>
                      }

        {this.state.notClicked ?


          <Line data={dataObject.stress} width={100}	height={50} options={
          { maintainAspectRatio: false },
          { title: {display: true, text: `Stressed`, fontsize: 25},  }
        }/>

      :
                  <Line data={dataObject.excited} width={100}	height={50} options={
                  { maintainAspectRatio: false },
                  { title: {display: true, text: `Excited`, fontsize: 25},  }
                  }/>
                }

                {this.state.notClicked ?


                  <Line data={dataObject.exhausted} width={100}	height={50} options={
                  { maintainAspectRatio: false },
                  { title: {display: true, text: `Exhausted`, fontsize: 25},  }
                }/>

              :
                          <Line data={dataObject.happy} width={100}	height={50} options={
                          { maintainAspectRatio: false },
                          { title: {display: true, text: `Happy`, fontsize: 25},  }
                          }/>
                        }
                        {this.state.notClicked ?


                          <Line data={dataObject.anger} width={100}	height={50} options={
                          { maintainAspectRatio: false },
                          { title: {display: true, text: `Anger`, fontsize: 25},  }
                        }/>

                        :
                                  <Line data={dataObject.content} width={100}	height={50} options={
                                  { maintainAspectRatio: false },
                                  { title: {display: true, text: `Content`, fontsize: 25},  }
                                  }/>
                                }

                                {this.state.notClicked ?


                                  <Line data={dataObject.burnt} width={100}	height={50} options={
                                  { maintainAspectRatio: false },
                                  { title: {display: true, text: `Burnt out`, fontsize: 25},  }
                                }/>

                              :
                                          <Line data={dataObject.best} width={100}	height={50} options={
                                          { maintainAspectRatio: false },
                                          { title: {display: true, text: `Best Day Ever`, fontsize: 25},  }
                                          }/>
                                        }



<br /><br />
        <Link className='item' to={'/compare'}>
        <button>Compare</button>
        </Link><br/>
      </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {allTimesheets: state.allTimesheets, emotions: state.emotions}
}

export default connect(mapStateToProps, {fetchingTimesheets, fetchingEmotions})(AllEmotionsContainer);



// <Line data={dataObject.anxious} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Anxiety`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.anger} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Anger`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.stress} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Stressed`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.exhausted} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Exhaustion`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.burnt} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Burnt`, fontsize: 25},  }
// }/><br/><br/><br/>
//         :
//         <Line data={dataObject.okay} width={100}	height={50} options={
//         { maintainAspectRatio: false },
//         { title: {display: true, text: `Okay`, fontsize: 25},  }
//         }/><br/><br/><br/>
//         <Line data={dataObject.content} width={100}	height={50} options={
//         { maintainAspectRatio: false },
//         { title: {display: true, text: `Content`, fontsize: 25},  }
//         }/><br/><br/><br/>
//         <Line data={dataObject.excited} width={100}	height={50} options={
//         { maintainAspectRatio: false },
//         { title: {display: true, text: `Excited`, fontsize: 25},  }
//         }/><br/><br/><br/>
//         <Line data={dataObject.happy} width={100}	height={50} options={
//         { maintainAspectRatio: false },
//         { title: {display: true, text: `Happy`, fontsize: 25},  }
//         }/><br/><br/><br/>
//         <Line data={dataObject.best} width={100}	height={50} options={
//         { maintainAspectRatio: false },
//         { title: {display: true, text: `Best day ever!`, fontsize: 25},  }
//         }/><br/><br/><br/>





// , {
//   label: "Anger",
//   fill: false,
//   backgroundColor: "rgba(255,99,132,0.2)",
//   borderColor: "rgba(255,99,132,1)",
//   borderWidth: 1,
//   pointBorderColor: "#fff",
//   pointBackgroundColor: "rgba(255,99,132,1)",
//   pointBorderColor: "#fff",
//   data: this.convert(anger, 'Angry')
// }, {
//   label: "Stress",
//   fill: false,
//   backgroundColor: "rgba(240, 50, 230, 0.27)",
//   borderColor: "rgba(240, 50, 230, .4)",
//   borderWidth: 1,
//   pointBorderColor: "#fff",
//   pointBackgroundColor: "rgba(240, 50, 230, .4)",
//   pointBorderColor: "#fff",
//   data: this.convert(stress, 'Stressed')
// }, {
//   label: "Exhaustion",
//   fill: false,
//   backgroundColor: "rgba(70, 240, 240, 0.21)",
//   borderColor: "rgba(70, 240, 240, .4)",
//   borderWidth: 1,
//   pointBorderColor: "#fff",
//   pointBackgroundColor: "rgba(70, 240, 240, .4)",
//   pointBorderColor: "#fff",
//   data: this.convert(exhausted, 'Exhausted')
// }, {
//   label: "Burnt",
//   fill: false,
//   backgroundColor: "rgba(0, 130, 200, 0.27)",
//   borderColor: "rgba(0, 130, 200, .4)",
//   borderWidth: 1,
//   pointBorderColor: "#fff",
//   pointBackgroundColor: "rgba(0, 130, 200, .4)",
//   pointBorderColor: "#fff",
//   data: this.convert(burnt, 'Burnt out')
// },
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


// <h2>Overall Emotions</h2>
// <Line data={dataObject.anxious} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Anxiety`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.anger} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Anger`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.stress} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Stressed`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.exhausted} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Exhaustion`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.burnt} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Burnt`, fontsize: 25},  }
// }/><br/><br/><br/>
//
// <Line data={dataObject.okay} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Okay`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.content} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Content`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.excited} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Excited`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.happy} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Happy`, fontsize: 25},  }
// }/><br/><br/><br/>
// <Line data={dataObject.best} width={100}	height={50} options={
// { maintainAspectRatio: false },
// { title: {display: true, text: `Best day ever!`, fontsize: 25},  }
// }/><br/><br/><br/>

// this.props.allTimesheets.map(data => data.emotions.map(data => data))
// console.log(stress, anger, anxious, exhausted, burnt)
