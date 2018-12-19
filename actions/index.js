import { CHANGE_COUNTRY } from "./types"

export const changeCountry = value => ({
  type: CHANGE_COUNTRY,
  payload: value
})
