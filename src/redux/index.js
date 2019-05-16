import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  REQUEST_POSTS, RECEIVE_POSTS,USER_INFO
  
} from './actions.js'
import Api from '../public/util/http'
const Maxios = (state = {}) => {
    return Api
}
const UserInfo = (state = {}, action) => {
  console.log(state,action)
  switch (action.type) {
    case USER_INFO:
      return action.subreddit
    default:
      return state
  }
}
const layoutMenu = (state = {}, action) => {
    // console.log(action)
    switch (action.type) {
      case 'ROUTERMENU':
        return action.data
      default:
        return state
    }
  }
const selectedSubreddit = (state = 0, action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

const posts = (state = { isFetching: false, didInvalidate: false, items: []}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsBySubreddit = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  layoutMenu,
  UserInfo,
  Maxios
})

export default rootReducer
