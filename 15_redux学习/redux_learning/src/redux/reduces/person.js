import { ADD_PERSON } from "../constant"

const initialState = [
  {id:'001', name:'tom', age:18}
]

export default function personReducer (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_PERSON:
      return [payload, ...state]
    default:
      return state
  }
}
