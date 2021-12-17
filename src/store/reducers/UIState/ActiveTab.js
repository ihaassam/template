const defaultState = null;

const activeTab = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return action.payload;
    default:
      return state;
  }
};
export default activeTab;
