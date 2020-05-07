import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import * as actions from '../actions/types'
import axios from 'utils/axios'
import urls from 'utils/urls'
import { testList } from '../actions/testAction'


function fetchTestList () {
  return axios.request({
    method: 'get',
    url: "http://localhost:3000/test",
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function * fetchTestListActionEffect () {
  try {
    const { data } = yield call(fetchTestList)

    if (!isEmpty(data)) {
      console.log('Test Data fetched')

      yield put(testList(data))
    } else {
      // reject(data);
    }
  } catch (e) {
    //   alert.error(e.message || 'Authentication Error');
    //   yield put(authError(e));
    console.log('Error found while fetching test')
    // if (reject) reject(e);
  }
}

export function * fetchTestListActionWatcher () {
  yield takeLatest(actions.FETCH_TEST_LIST, fetchTestListActionEffect)
}

export default function * rootSaga() {
  yield all([
    fork(fetchTestListActionWatcher),

  ])
}
