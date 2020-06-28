import React, { Component } from "react";
import { connect } from "react-redux";

import Plotly from "plotly.js-gl3d-dist";
import createPlotlyComponent from "react-plotly.js/factory";

import "./results.css";

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const Plotly = require()
    const Plot = createPlotlyComponent(Plotly);

    return (
      <div className="resultsContainer">
        <Plot
          data={[
            {
              name: "data",
              x: this.props.data[0],
              y: this.props.data[1],
              type: "scatter",
              mode: "markers",
              marker: { color: "green" },
            },
            {
              name: "regression line",
              type: "scatter",
              x: this.props.data[0],
              y: this.props.predictions[0],
              mode: "lines",
              line: {
                color: "rgb(219, 64, 82)",
                width: 2,
              },
            },
          ]}
          layout={{
            width: "40vw",
            height: "40vh",
            title: "Data with regression",
          }}
          config={{ staticPlot: true }}
        />
        <Plot
          data={[
            {
              name: "data",
              z: [
                [1, 2, 3],
                [1, 2, 3],
                [1, 2, 3],
              ],
              type: "surface",
            },
          ]}
          layout={{ width: "40vw", height: "40vh", title: "3D" }}
          // config = {{staticPlot: true}}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.page.arrayData,
  predictions: state.page.predictions,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
