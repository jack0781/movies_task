import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from "./../actionTypes/movie";
import { api_url } from "./../config";
const axios = require("axios");

export const getMovies = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${api_url}/movie/upcoming?api_key=ba4f3decbd81cc38175b3d6fbc4ac143&language=en-US&page=1`
    );
    console.log("res", response.data.results);
    return response.data.results;
  } catch (error) {
    return error;
  }
};

// export function getMovies() {
//   return (dispatch) => {
//     dispatch({ type: GET_MOVIE_REQUEST });
//     axios
//       .get(
//         `${api_url}/movie/upcoming?api_key=ba4f3decbd81cc38175b3d6fbc4ac143&language=en-US&page=1`
//       )
//       .then(function (res) {
//         console.log("res =>", res);
//         dispatch({
//           type: GET_MOVIE_SUCCESS,
//           payload: res.data,
//         });
//       })
//       .catch(function (error) {
//         const { response } = error;
//         console.log("err", response);
//         if (response !== undefined) {
//           dispatch({
//             type: GET_MOVIE_FAILURE,
//             payload: response?.data,
//           });
//         }
//       });
//   };
// }
