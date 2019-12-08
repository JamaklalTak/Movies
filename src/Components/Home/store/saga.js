import axios from 'axios';
/* eslint-disable no-plusplus */
import { put, takeLatest } from 'redux-saga/effects';

import {
  actions,
  saveMovies,
  saveMovieDetail
} from './actions';

function* getAllMoviesWorker({ requestBody }) {
  try {
    // yield put(showAppLoading());
    const userData = yield axios.get(`http://www.omdbapi.com/?apikey=29c0f1ab&s=${requestBody.key}&page=${requestBody.page}`);
    yield put(saveMovies(userData.data));
    // yield put(hideAppLoading());
  } catch (e) {
    // yield put(hideAppLoading());
    // yield put(showAlertMessage('error', e.message));
  }
}

export function* getAllMoviesWatcher() {
  yield takeLatest(actions.GET_ALL_MOVIES, getAllMoviesWorker);
}

function* getMovieDetailWorker({ requestBody }) {
  try {
    // yield put(showAppLoading());
    const movieData = yield axios.get(`http://www.omdbapi.com/?apikey=29c0f1ab&i=${requestBody.id}`);
    yield put(saveMovieDetail(movieData.data));
    // yield put(hideAppLoading());
  } catch (e) {
    // yield put(hideAppLoading());
    // yield put(showAlertMessage('error', e.message));
  }
}

export function* getMovieDetailWatcher() {
  yield takeLatest(actions.GET_MOVIE_DETAIL, getMovieDetailWorker);
}