import { createSelector } from 'reselect';
import { actions } from './actions';

const initialState = {
  allMovies: [],
  movieDetail: [],
};

// Memorized  Selector Function
export const getAllMovieSelector = createSelector(
  state => state.homeReducer.allMovies,
  (allMovies) => allMovies
);

// Memorized  Selector Function
export const getMovieDetailSelector = createSelector(
  state => state.homeReducer.movieDetail,
  (movieDetail) => movieDetail
);

export default (state = initialState, payload = {}) => {
  switch (payload.type) {
    case actions.SAVE_MOVIES:
      return {
        ...state,
        allMovies: [payload.data],
      };
    
    case actions.SAVE_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: [payload.data],
    };

    default:
      return state;
  }
};