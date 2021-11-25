import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from "../actionTypes/movie";
const initialState = {
  loading: false,
  item: "",
  items: [],
  error: "",
};
export function movies(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return {
        ...state,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        items: action.payload?.response,
      };
    case GET_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
