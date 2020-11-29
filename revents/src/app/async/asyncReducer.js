const ASYNC_ACTION_START = 'ASYNC_ACTION_START'
const ASYNC_ACTION_FINISH = 'ASYNC_ACTION_FINISH'
const ASYNC_ACTION_ERROR = 'ASYNC_ACTION_ERROR'

export function asyncActionStart() {
  return {
    type: ASYNC_ACTION_START,
  }
}
export function asyncActionFinish() {
  return {
    type: ASYNC_ACTION_FINISH,
  }
}
export function asyncActionError(error) {
  return {
    type: ASYNC_ACTION_ERROR,
    payload: error,
  }
}

const initilaState = {
  loading: false,
  error: null,
}

export default function asyncReducer(state = initilaState, { type, payload }) {
  switch (type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
        error: null,
      }
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: true,
        error: payload.error,
      }
    default:
      return state
  }
}
