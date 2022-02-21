import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {someAction} from './redux/appReducer'

const App = (props) => {

  useEffect(() => {

  },[])

  return (
    <div className="App">
      { !props.state.isFetched ? "LOADING"
      :<div>

      </div>

      }
    </div>
  );
}

const mapStateToProps = state => ({
  party: state.app.party,
  diet: state.app.diet
})

export default connect(mapStateToProps, {someAction})(App)
