import axios from 'axios'
import React from 'react'
import { updatedObj } from '../shared/util'

const API_URL = 'https://api.mustofa.id/v1/love' // TODO: Make your own API 😠
const LS_LOVE_KEY = '0bUrD7c32P-wnqilz5Opn-griddy.netlify.com'
const act = {
  START: 'start',
  FETCH: 'fetch',
  PUSH: 'push',
  ERROR: 'error',
  CLEAR: 'clear',
  LOVED: 'loved'
}

const LoveContext = React.createContext()

const initialState = {
  count: 0,
  loading: false,
  message: null,
  loved: false
}

const loveReducer = (state, action) => {
  switch (action.type) {
    case act.START:
      return updatedObj(state, { loading: true })
    case act.FETCH:
      return updatedObj(state, { count: action.count, loading: false })
    case act.PUSH:
      return updatedObj(state, {
        loading: false,
        loved: true,
        message: 'Thank you! 😍',
        count: state.count + 1
      })
    case act.ERROR:
      return updatedObj(state, { loading: false, message: action.error })
    case act.CLEAR:
      return updatedObj(state, { message: null })
    case act.LOVED:
      return updatedObj(state, { loved: true })
    default:
      return state
  }
}

const fetchLoves = (dispatch, postId) => {
  dispatch({ type: act.START })
  axios
    .get(API_URL, { params: { postId } })
    .then(res => {
      if (res.status === 200) {
        const { count } = res.data
        dispatch({ type: act.FETCH, count })
        if (count > 0) {
          if (isLoved(postId)) {
            dispatch({ type: act.LOVED })
          }
        }
      }
    })
    .catch(error => {
      if (error) {
        dispatch({ type: act.ERROR, error: 'Something went wrong! 😓' })
        dismiss(dispatch)
      }
    })
}

const postLove = (dispatch, love) => {
  dispatch({ type: act.START })
  axios
    .post(API_URL, love)
    .then(res => {
      dispatch({ type: act.PUSH })
      setLoves(love.postId)
      dismiss(dispatch)
    })
    .catch(error => {
      if (error) {
        dispatch({ type: act.ERROR, error: 'Something went wrong! 😓' })
        dismiss(dispatch)
      }
    })
}

const setLoves = postId => {
  if (typeof window !== 'undefined') {
    const items = [...getLoves(), postId]
    window.localStorage.setItem(LS_LOVE_KEY, JSON.stringify(items))
  }
}

const getLoves = () => {
  if (typeof window !== 'undefined') {
    const items = window.localStorage.getItem(LS_LOVE_KEY)
    return !items ? [] : JSON.parse(items)
  }
  return []
}

const isLoved = postId => {
  return getLoves().includes(postId)
}

const dismiss = dispatch => {
  setTimeout(() => dispatch({ type: act.CLEAR }), 2000)
}

export { LoveContext, loveReducer, initialState, fetchLoves, postLove }
