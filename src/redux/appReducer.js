import { getCommonStateFunc, getDataDiet, getDataGuests } from "../api"

//types
const GET_GUESTS = "GET_GUESTS"
const GET_DIET = "GET_DIET"
const GET_COMMON_STATE = "GET_COMMON_STATE"
const GET_FORM_INFO = "GET_FORM_INFO"

//ACs
const getGuests = (party) => ({ type: GET_GUESTS, party })
const getDiet = (diet) => ({type: GET_DIET, diet})
const getCommonState = (commonState) => ({type: GET_COMMON_STATE, commonState})
export const getFormInfo = (name, formInfo) => ({type: GET_FORM_INFO, name, formInfo})

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
export const getCommonStateData = (party, diet) => async dispatch => {
  !party.length && !diet.length
  ? getCommonStateData(party, diet)
  : dispatch(getCommonState(getCommonStateFunc(party, diet)))
}

//reducer
let initialState
!localStorage.state.commonState 
? initialState = {
  party: [],
  diet: [],
  isFetched: false
}
: initialState = localStorage.state


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GUESTS: {
      return {
        ...state, party: action.party, isFetched: true
      }
    }
    case GET_DIET: {
      return {
        ...state, diet: action.diet
      }
    }
    case GET_COMMON_STATE: {
      return {
        ...state, commonState: action.commonState, isFetched: false
      }
    }
    case GET_FORM_INFO: {
      return {
        ...state, commonState: state.commonState.find(guest => guest.name === action.name).formInfo = action.formInfo
      }
    }
    default:
      return state
  }
}

export default appReducer