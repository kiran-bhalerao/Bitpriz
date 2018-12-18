import React, { Component } from "react"
import Navbar from "../component/Navbar"
import axios from "axios"
import Details from "../component/Details"
import CountryList from "../component/CountryList"
import { connect } from "react-redux"
import * as actions from "../actions"
class index extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          {this.props.selectedCountry ? (
            <Details code={this.props.selectedCountry} />
          ) : (
            <CountryList countries={this.props.countries} />
          )}
        </div>
      </>
    )
  }
}
index.getInitialProps = async () => {
  const res = await axios.get(
    "https://api.coindesk.com/v1/bpi/supported-currencies.json"
  )
  return {
    countries: res.data
  }
}
const mapStateToProps = state => {
  return {
    selectedCountry: state
  }
}

export default connect(
  mapStateToProps,
  actions
)(index)
