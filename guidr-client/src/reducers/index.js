import {
  FETCH_NEWSFEED_START,
  FETCH_NEWSFEED_SUCCESS,
  FETCH_NEWSFEED_FAIL
} from '../actions'


const initialState = {
    isFetchingFeed: false,
    adventures: [],
    error: null,

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_NEWSFEED_START:
  return{
    ...state,
    error: null,
    isFetchingFeed: true
  };
  case FETCH_NEWSFEED_SUCCESS:
  return{
    ...state,
    error: null,
    isFetchingFeed: false,
    adventures: payload
  };
  case FETCH_NEWSFEED_FAIL:
  return{
      ...state,
      isFetchingFeed: false,
      error: payload,
  };
  default:
    return state
  }
}
