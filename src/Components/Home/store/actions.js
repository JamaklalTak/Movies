export const actions = {
    GET_ALL_MOVIES: 'GET_ALL_MOVIES',
    SAVE_MOVIES: 'SAVE_MOVIES',
    GET_MOVIE_DETAIL: 'GET_MOVIE_DETAIL',
    SAVE_MOVIE_DETAIL: 'SAVE_MOVIE_DETAIL',
};
  
export const getAllMovies = (requestBody) => ({
    type: actions.GET_ALL_MOVIES,
    requestBody
});

export const getMovieDetail = (requestBody) => ({
    type: actions.GET_MOVIE_DETAIL,
    requestBody
});

export const saveMovies = (data) => ({
    type: actions.SAVE_MOVIES,
    data
});

export const saveMovieDetail = (data) => ({
    type: actions.SAVE_MOVIE_DETAIL,
    data
})