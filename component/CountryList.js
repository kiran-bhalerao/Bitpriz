import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"
import "../style.css"

class CountryList extends Component {
  state = {
    countryName: ""
  }
  renderCountry = each => {
    return (
      <div
        className="items bg-warning"
        key={each.currency}
        onClick={() => this.props.changeCountry(each.currency)}
      >
        {each.country.slice(0, 20)}
      </div>
    )
  }
  handleChange = e => {
    this.setState({
      countryName: e.target.value
    })
  }
  render() {
    return (
      <>
        <h1 className="mb-5">Welcome to Bitpriz</h1>
        <input
          type="text"
          value={this.state.countryName}
          onChange={this.handleChange}
          className="form-control form-control-lg"
          placeholder="Enter Your Country Name"
        />
        {this.state.countryName && (
          <div className="container">
            {this.state.countryName
              ? this.props.countries
                  .filter(each =>
                    each.country.toLowerCase().includes(this.state.countryName)
                  )
                  .map(each => this.renderCountry(each))
              : this.props.countries.map(each => this.renderCountry(each))}
          </div>
        )}
      </>
    )
  }
}
export default connect(
  null,
  actions
)(CountryList)
