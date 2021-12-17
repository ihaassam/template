
const defaultState = {
  token: ''
}


const UserData = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      localStorage.setItem('userData', JSON.stringify(action.payload));
      return { ...state, token: action.payload};
    case "CLEAR_USER_DATA":
      localStorage.removeItem('userData');
      return null;
    default:
      return state;
  }
};

export default UserData;
