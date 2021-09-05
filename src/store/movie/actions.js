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