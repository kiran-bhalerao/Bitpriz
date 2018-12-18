import { createStore } from "redux"

import reducer from "../reducers/countrySelector"

export default (initialState, options) => {
  return createStore(reducer, initialState)
}
