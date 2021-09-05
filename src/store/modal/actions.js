import actions from './types'

export const showToast = (message) => {
    return async (dispatch) => {
        dispatch({
            type: actions.SHOW_TOAST,
            payload: message
        })
    };
};

export const dismisToast = () => {
    return async (dispatch) => {
        dispatch({
            type: actions.DISMIS_TOAST,
        })
    };
};

export const showModal = ({ component, config }) => {
    return async (dispatch) => {
        dispatch({
            type: actions.SHOW_MODAL,
            payload: { component, config }
        })
    };
};

export const dismisModal = () => {
    return async (dispatch) => {
        dispatch({
            type: actions.DISMIS_MODAL,

        })
    };
};

