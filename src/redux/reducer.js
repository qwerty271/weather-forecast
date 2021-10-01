import { FETCH_WEATHER, GET_DATA_WEATHER } from "./types";

const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
      };
    case GET_DATA_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
