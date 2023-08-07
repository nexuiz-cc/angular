import { createReducer, on } from '@ngrx/store';
import { success } from '../actions/movies.action';

export const initialState = {};
export const moviesReducer = createReducer(
  initialState,
  on(success, (state,data ) => ({
    ...state,
    state : data
  })
  )
);
