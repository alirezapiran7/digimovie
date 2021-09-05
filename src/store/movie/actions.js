import types from './types'
import movieServices from '@/services/api/movie'
import handleError from '@/utils/handleError';


export const getGenres = (page) => {
    return async (dispatch, state) => {
        try {
            const res = await movieServices.getGenres({ rows: state().movie.row, page: page })

            if (res.data.status != 200)
                return handleError(dispatch, res.data)

            const data = res.data.data
            dispatch({
                type: types.GET_GENERS,
                payload: {
                    items: data.genres,
                    ...data.pager.pager
                }
            })

        } catch (error) {
            console.log('error', error);
            // console.log(error.response.data);
            handleError(dispatch, error)
            throw error
        }
    };
}

export const getMovies = (page) => {
    return async (dispatch, state) => {
        try {
            const res = await movieServices.getMovies({ rows: state().movie.row, page: page })

            if (res.data.status != 200)
                return handleError(dispatch, res.data)

            const data = res.data.data
            dispatch({
                type: types.GET_MOVIES,
                payload: {
                    items: data.movies,
                    ...data.pager.pager
                }
            })

        } catch (error) {
            console.log('error', error);
            // console.log(error.response.data);
            handleError(dispatch, error)
            throw error
        }
    };
}


export const searchMovie = ({ title, genre, page }) => {
    return async (dispatch, state) => {
        try {
            const param = {}
            param['title'] = title || state().movie.searchMovie
            param['genre[0]'] = genre || state().movie.selectedGener
            // param['page'] = page || state().movies.searchPage.current_page
            // param['rows'] = state().movie.row
            console.log('searchMovie', genre, param);

            const res = await movieServices.getMovies(param)
            if (res.data.status != 200)
                return handleError(dispatch, res.data)

            const data = res.data.data
            dispatch({
                type: types.SEARCH_MOVIES,
                payload: {
                    items: data.movies,
                    searchText: param['title'],
                    selectedGener: param['genre[0]'],
                    ...data.pager.pager
                }
            })

        } catch (error) {
            console.log('error', error);
            // console.log(error.response.data);
            handleError(dispatch, error)
            throw error
        }
    };
}

export const clearSearch = () => {
    return async (dispatch, state) => {
        dispatch({
            type: types.SEARCH_MOVIES,
            payload: {
                items: [],
                searchText: '',
                selectedGener: '',
                current_page: 0,
                total_pages: 1,
            }
        })
    };
}