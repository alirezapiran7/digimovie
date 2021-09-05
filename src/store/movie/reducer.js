import types from './types'

const initialState = {


  row: 20,
  movies: [],
  moviePage: {
    current_page: 0,
    total_pages: 1,
  },

  geners: [],
  generPage: {
    current_page: 0,
    total_pages: 1,
  },

  search: [],
  searchPage: {
    current_page: 0,
    total_pages: 1,
  },

};

export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {

    case types.GET_GENERS:
      if (state.generPage.current_page < payload.current_page)
        return {
          ...state,
          geners: [...state.geners, ...payload.items], generPage: { current_page: payload.current_page, total_pages: payload.total_pages }
        };

    case types.GET_MOVIES:
      if (state.moviePage.current_page < payload.current_page)
        return {
          ...state,
          movies: [...state.movies, ...payload.items], moviePage: { current_page: payload.current_page, total_pages: payload.total_pages }
        };

    case types.SEARCH_MOVIES:
      if (state.searchPage.current_page < payload.current_page)
        return {
          ...state,
          geners: [...state.geners, ...payload.items], searchPage: { current_page: payload.current_page, total_pages: payload.total_pages }
        };

    default:
      return state;
  }
};
