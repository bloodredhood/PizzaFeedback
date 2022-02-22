import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GuestsList from './GuestsList';
import { getGuestsData, getDietData, getCommonStateData } from './redux/appReducer'
import {Suspense, Routes, Route} from "react-router-dom"
import FeedbackForm from './FeedbackForm';

const App = ({state}) => {

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
      {state.isFetched ? "LOADING"
        : 
        <Suspense fallback={"LOADING"}>
              <Routes>
                <Route path='/*' element={<GuestsList state={state} />}>
                  <Route path={`:userId`} element={<FeedbackForm state={state}/>}/>
                </Route>
              </Routes>
            </Suspense>
        }
    </div>
  );
}

const mapStateToProps = state => ({
  party: state.app.party,
  diet: state.app.diet
})

export default connect(mapStateToProps, { getGuestsData, getDietData, getCommonStateData })(App)
