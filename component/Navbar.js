import React, { Component } from "react"
import Link from "next/link"
import Head from "next/head"

class Navbar extends Component {
  render() {
    return (
      <>
        <Head>
          <title>BitPriz</title>
          <link rel="shortcut icon" href="#" />
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/lumen/bootstrap.min.css"
          />
        </Head>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Bitpriz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mr-3">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
export default Navbar
