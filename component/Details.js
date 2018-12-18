import React, { Component } from "react"
import axios from "axios"

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
      <>
        <h1>{this.props.code}</h1>
        <p>{this.state.data && this.state.data[this.props.code].rate}</p>
        <button onClick={this.props.clearSelection}>back</button>
      </>
    )
  }
}

export default Details
