import React, { Component } from 'react'
import {Line, Radar} from 'react-chartjs-2'

class AllNeedsContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartData:{labels: ['A', 'B', 'C', 'D', 'E'],
                 datasets: [{label:'Numbers', data: [0,7,15,6,14,12]}]}
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Weekly Overview',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Radar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Weekly Overview',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default AllNeedsContainer
