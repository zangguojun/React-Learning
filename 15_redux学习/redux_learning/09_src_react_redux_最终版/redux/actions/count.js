import {INCREMENT, DECREMENT} from '../constant'
export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})
export const incrementAsync = (data,time) => (dispatch)=>{
  setTimeout(() => {
    dispatch(increment(data))
  }, time);
}