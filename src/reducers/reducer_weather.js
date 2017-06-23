import {FETCH_WEATHER} from '../actions/index';

export default function(state= [], action){
  switch(action.type){
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //es6
    //  return state.concat([action.payload.data]); //better than push as it creates new array(not mutating the state)
  }
  return state;
}
