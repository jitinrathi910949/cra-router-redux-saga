import * as actions from './types';

export function fetchTestList() {
  return { type: actions.FETCH_TEST_LIST };
}

export function testList() {
return {type: actions.TEST_LIST, testList};
}
