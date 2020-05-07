import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchTestList } from '../../store/actions/testAction';

class Test extends React.Component {

render(){
    return(
        <div className="App">
            <h1> This is test component </h1>
      </div>
    )
}
}
function mapStateToProps(state) {
  const { testReducer } = state;
  return {
    testList: testReducer.testList

  };
}
// mapping dispatch functions to the props of LoginForm component
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchTestListWatcher,
      // add other watcher sagas to this object to map them to props
    },
    dispatch
  )
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
