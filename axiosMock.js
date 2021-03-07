import './mockData.js'
import axios from 'axios'

export const moack1 = (fn) => {
  axios.get('/xx').then((res) => {
    fn(res.data)
  })
}
export const moack2 = () => {
  return new Promise((resolve, reject) => {
    resolve(111)
  })
}
export const moack3 = (fn) => {
  return axios.get('/xx')
}

export const moack4 = ()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(404)
    }, 1000 * 1);
  })
}
