import { getDataDiet, getDataGuests } from "../api"

//types
const GET_GUESTS = "GET_GUESTS"
const GET_DIET = "GET_DIET"

//ACs
const getGuests = (party) => ({ type: GET_GUESTS, party })
const getDiet = (diet) => ({type: GET_DIET, diet})

//thunkCreators
export const getGuestsData = () => async dispatch => {
  const response = await getDataGuests()
    dispatch(getGuests(response))
    localStorage.setItem("state", {})
    localStorage.state.setItem("party", response)
}
export const getDietData = (queryStr) => async dispatch => {
  const response = await getDataDiet(queryStr)
  dispatch(getDiet(response))
  localStorage.state.setItem("diet", response)
}

//reducer
const initialState = {
  party: [],
  diet: [],
  isFetched: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GUESTS: {
      return {
        ...state, party: action.party
      }
    }
    case GET_DIET: {
      return {
        ...state, diet: action.diet, isFetched: true
      }
    }
    default:
      return state
  }
}

export default appReducer