import * as actions from '../actions/types';

const testReducer = (state = initialState, action) => {

  switch (action.type) {

    case actions.TEST_LIST:
      return {
        ...state,
        testList: action.testList,
      };
       default:
      return state;
      }
}
export default testReducer;
