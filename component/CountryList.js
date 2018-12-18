import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"

class CountryList extends Component {
  state = {
    countryName: ""
  }
  renderCountry = each => {
    return (
      <li
        className="items"
        key={each.currency}
        onClick={() => this.props.changeCountry(each.currency)}
      >
        {each.country}
      </li>
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
        <input
          type="text"
          value={this.state.countryName}
          onChange={this.handleChange}
        />
        <ul>
          {this.state.countryName
            ? this.props.countries
                .filter(each =>
                  each.country.toLowerCase().includes(this.state.countryName)
                )
                .map(each => this.renderCountry(each))
            : this.props.countries.map(each => this.renderCountry(each))}
        </ul>
        <style jsx="true">
          {`
            .items {
              cursor: pointer;
              width: 200px;
            }
          `}
        </style>
      </>
    )
  }
}
export default connect(
  null,
  actions
)(CountryList)
