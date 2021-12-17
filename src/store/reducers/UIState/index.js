import { combineReducers } from 'redux';
import activeTab from './ActiveTab';
import alert from './Alert'

export default combineReducers({
  activeTab,
  alert,
});
