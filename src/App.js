import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GuestsList from './GuestsList';
import { getGuestsData, getDietData, getCommonStateData } from './redux/appReducer'
import { Routes, Route } from "react-router-dom"
import FeedbackForm from './FeedbackForm';

//const GuestsList = React.lazy(() => import('./GuestsList'))
//const FeedbackForm = React.lazy(() => import('./FeedbackForm'))

const App = ({ state }) => {

  useEffect(() => {
    if (state.party.length === 0) {
      getGuestsData()
    }
    if (state.party.length > 0) {
      getDietData(state.party.map(guest => guest.name).join(",").split(" ").join("%20"))
    }
    if (state.party.length > 0 && state.diet.length > 0) {
      getCommonStateData(state.party, state.diet)
    }
  }, [state])

  return (
    <div className="App">
        <Routes>
          <Route path='' element={<GuestsList state={state} />}>
            <Route path={`:urlName`} element={<FeedbackForm state={state} />} />
          </Route>
        </Routes>
    </div>
  );
}

const mapStateToProps = state => ({
  party: state.app.party,
  diet: state.app.diet
})

export default connect(mapStateToProps, { getGuestsData, getDietData, getCommonStateData })(App)
