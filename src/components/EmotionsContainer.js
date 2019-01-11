import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Line, Radar} from 'react-chartjs-2'

class EmotionsContainer extends Component{


  render(){
    let dataObject = {
      data: {
          labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
          datasets: [{
              label: 'Pooped',
              data: [1,2,3,4,5,6,7,8],
              backgroundColor: [
                  'rgba(230, 25, 75, .4)',
                  'rgba(245, 130, 48, .4)',
                  'rgba(255, 225, 25, .4)',
                  'rgba(210, 245, 60, .4)',
                  'rgba(60, 180, 75, .4)',
                  'rgba(70, 240, 240, .4)',
                  'rgba(0, 130, 200, .4)',
                  'rgba(145, 30, 180, .4)',
                  'rgba(240, 50, 230, .4)',
                  'rgba(128, 128, 128, .4)'
              ],
              borderColor: [
                  'red',
                  'orange',
                  'yellow',
                  'lime',
                  'green',
                  'cyan',
                  'blue',
                  'purple',
                  'magenta',
                  'grey'
              ],
              borderWidth: 1
          }]
      }
    }

    return (
      <div className="chart">

      <Radar
                        data={dataObject.data}
                        width={750}
                        height={500}
                        options={{
                          title: {
                            display: true,
                            text: `Pooped`,
                            fontsize: 25
                          },
                          legend: {
                            display: false,
                            position: "bottom"
                          }
                        }}
                      />



        <Link className='item' to={'/allemotions'}>
        <button>See All Emotions Analytic</button>
        </Link><br/>
      </div>
    )
  }

}

export default EmotionsContainer

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
