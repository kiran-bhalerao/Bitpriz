import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import * as actions from "../actions"
class Details extends Component {
  state = {
    data: null
  }
  UNSAFE_componentWillMount = async () => {
    const res = await axios.get(
      `https://api.coindesk.com/v1/bpi/currentprice/${this.props.code}.json`
    )
    this.setState({
      data: res.data.bpi
    })
    console.log(res.data.bpi)
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <div className="price-card">
            <h1>{this.props.code}</h1>
            <div>
              <span class="badge badge-danger">Price</span>
              <span className="price-span">
                {this.state.data && this.state.data[this.props.code].rate.slice(0,10)}
              </span>
            </div>
            <p className="mt-2">
              {this.state.data && this.state.data[this.props.code].description}
            </p>
          </div>
        </div>
        <div className="col-md-2"><h1>VS</h1></div>
        <div className="col-md-5">
          <div className="price-card">
            <h1>USD</h1>
            <div>
              <span class="badge badge-danger">Price</span>
              <span className="price-span">
                {this.state.data && this.state.data.USD.rate}
              </span>
            </div>
            <p className="mt-2">
              {this.state.data && this.state.data.USD.description}
            </p>
          </div>
        </div>
        <button
          className="btn btn-lg btn-block btn-warning mt-4"
          onClick={() => this.props.changeCountry(null)}
        >
          back
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  actions
)(Details)
