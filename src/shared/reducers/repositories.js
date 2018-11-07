import {
  REQUEST_REPOSITORIES,
  RECEIVE_REPOSITORIES,
  REFRESH_DONE_FETCH
} from '../constants/actionTypes'

const initialStates = {
  isDoneFetch: false,
  isFetching: false,
  repositories: [],
  errors: null
}

export default (state = initialStates, action) => {
  console.log('------action------', action.type)
  switch (action.type) {
    case REQUEST_REPOSITORIES:
      return {
        ...state,
        isFetching: true,
        repositories: [],
        errors: null,
        isDoneFetch: action.payload.isDoneFetch
      }
    case RECEIVE_REPOSITORIES:
      return {
        ...state,
        isDoneFetch: action.payload.isDoneFetch,
        repositories: action.payload.data,
        errors: action.payload.errors,
        isFetching: false,
      }
    case REFRESH_DONE_FETCH:
      return {
        ...state,
        isDoneFetch: action.payload.isDoneFetch
      }
    default:
      return state
  }
}
