import actions from './types'

const initialState = {
  showToast: false,
  message: '',
  showModal: false,
  component: {},
  config: {}
};

export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {

    case actions.SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        message: payload
      };

    case actions.DISMIS_TOAST:
      return {
        ...state,
        showToast: false,
        message: ''
      };

    case actions.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        component: payload.component,
        config: payload.config
      };

    case actions.DISMIS_MODAL:
      return {
        ...state,
        showModal: false,
        component: {},
        config: {}
      };


    default:
      return state;
  }
};
