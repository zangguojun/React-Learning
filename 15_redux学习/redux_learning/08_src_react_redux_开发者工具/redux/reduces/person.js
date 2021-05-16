import { ADD_PERSON } from "../constant"

const initialState = [
]

export default function personReducer (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_PERSON:
      return [payload, ...state]
    default:
      return state
  }
}
