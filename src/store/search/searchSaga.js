import {takeLatest, put, select, call, apply} from '@redux-saga/core/effects';
import {URL_API} from '../../api/const';
import {SEARCH_REQUEST, searchRequestError, searchRequestSuccess} from './searchAction';
// import {searchRequestError, searchRequestSuccess} from './searchAction';
// import {postSlice} from '../post/postSlice';

// import {postRequestAsing} from '../post/postAction';

function* fetchSearch(search) {
  const token = yield select(state => state.tokenReducer.token);

  try {
    const request = yield call(fetch, `${URL_API}/search?q=${search}&limit=10`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    const respons = yield apply(request, request.json);

    yield put(searchRequestSuccess(respons.data));
  } catch (error) {
    yield put(searchRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
  // yield takeLatest(postRequestAsing.fulfilled.type, fetchSearch);
  // yield takeLatest(postRequestAsing.fulfilled.type, fetchSearch);
}
