import { CHANGE_COUNTRY } from "../actions/types"
const INITAIL_STATE = null

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case CHANGE_COUNTRY:
      return action.payload
    default:
      return state
  }
}
