import * as authActions from '@/store/auth/actions'

export default function (dispatch, error = {}) {
  console.log(error);
  if (error.status == 300)
    dispatch(authActions.logout())
  else
    dispatch(modalActions.showToast(error.message))
}