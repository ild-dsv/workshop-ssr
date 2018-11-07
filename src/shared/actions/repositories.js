import {
  REQUEST_REPOSITORIES,
  RECEIVE_REPOSITORIES,
  REFRESH_DONE_FETCH
} from '../constants/actionTypes'
import {
  GIT_API_ROOT
} from '../constants/conts'
import Axios from 'axios';


export const fetchRepositories = (isDoneFetch = false) => async dispatch => {
  try {
    dispatch({
      type: REQUEST_REPOSITORIES,
      payload: {
        isDoneFetch,
      }
    })
    const res = await Axios.get(`${GIT_API_ROOT}/repositories?q=stars:>=10000+language:go&sort=stars&order=desc`)
    dispatch({
      type: RECEIVE_REPOSITORIES,
      payload: {
        isDoneFetch,
        data: res.data.items,
        errors: null
      }
    })
  } catch (e) {
    dispatch({
      type: RECEIVE_REPOSITORIES,
      payload: {
        isDoneFetch,
        data: [],
        errors: e
      }
    })
  }
}

export const refreshDoneFetch = () => async dispatch => {
  dispatch({
    type: REFRESH_DONE_FETCH,
    payload: {
      isDoneFetch: false
    }
  })
}
