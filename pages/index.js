import React, { Component } from "react"
import Navbar from "../component/Navbar"
import axios from "axios"
import Details from "../component/Details"
import CountryList from "../component/CountryList"

class index extends Component {
  state = {
    selectedCountry: null
  }
  clearSelection = () => {
    this.setState({
      selectedCountry: null
    })
  }
  handleClick = code => {
    this.setState({
      selectedCountry: code
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          {this.state.selectedCountry ? (
            <Details
              clearSelection={this.clearSelection}
              code={this.state.selectedCountry}
            />
          ) : (
            <CountryList
              countries={this.props.countries}
              handleClick={this.handleClick}
            />
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
export default index
