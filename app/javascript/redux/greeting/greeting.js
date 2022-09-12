import fetchGreeting from "../../components/fetchGreeting";

const FETCH_GREETING = 'helloworld/greeting/GET_GREETING'

export const getGreeting = () => async (dispatch) => {
  const data = await fetchGreeting()
  dispatch({
    type: FETCH_GREETING,
    data
  })
}

const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return { ...state, ...action.data };
      default:
      return state;
  }
}

export default greetingReducer;