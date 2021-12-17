const initialState = {
  type: null,
  msg: null,
};
const AlertDetails = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        type: action.payload.type,
        msg: action.payload.msg,
      };
    case 'RESET_ALERT_MSG':
      return initialState;
    default:
      return state;
  }
};
export default AlertDetails;
