import types from './types'

const initialState = {
  movie: [],
  row: 20,
  moviePage: {
    current_page: 0,
    total_pages: 0,
  },

  geners: [],
  generPage: {
    current_page: 0,
    total_pages: 0,
  },

};

export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {

    case types.GET_MOVIES:
      return {
        ...state,
      };

    case types.GET_GENERS:
      if (state.generPage.current_page < payload.current_page)
        return {
          ...state,
          geners: [...state.geners, ...payload.items], generPage: { current_page: payload.current_page, total_pages: payload.total_pages }
        };


    default:
      return state;
  }
};
