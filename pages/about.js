import Link from "next/link"
import React, { Component } from "react"
import Navbar from "../component/Navbar";
class about extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">This is about component.</div>
      </>
    )
  }
}
export default about
