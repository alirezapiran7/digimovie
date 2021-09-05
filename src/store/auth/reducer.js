import types from './types'

const initialState = {
  startup: true,
  authenticating: false,
  authenticate: false,
};

export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {

    case types.AUTHENTICATING:
      return {
        ...state,
        startup: false,
        authenticating: true,
        authenticate: false,
      };

    case types.AUTHENTICATE:
      return {
        ...state,
        startup: false,
        authenticating: false,
        authenticate: true,
      };

    default:
      return state;
  }
};
