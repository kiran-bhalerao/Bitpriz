import React, { Component } from "react"
class CountryList extends Component {
  state = {
    countryName: ""
  }
  renderCountry = each => {
    return (
      <li
        className="items"
        key={each.currency}
        onClick={() => this.props.handleClick(each.currency)}
      >
        {each.country}
      </li>
    )
  }
  handleChange = e => {
    console.log(e.target.value)

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
export default CountryList
