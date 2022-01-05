import { fromJS, List, Map } from "immutable";
import {
  SET_FILTERS,
  SET_IS_LOADING,
  SET_ALERTS,
  SET_ALERT_LEVELS,
  SET_NODE_IS_COLLAPSED
} from "../actions/actionTypes";

window._fromJS = fromJS
window._Map = Map

const defaultState = fromJS({
  isLoading: true,
  hierarchy: [],
  alertLevels: {},
  filters: new List()
});

const setNodeIsCollapsed = (state, { id, isCollapsed }) => state.setIn(["alertLevels", id, "isCollapsed"], isCollapsed);

const setAlertLevelsStatus = (state, { alertLevels }) => {
  const currentAlertLevels = state.get("alertLevels").toJS();
  return state.withMutations(state => {
    for(const key in alertLevels) {
      if (currentAlertLevels[key].disabled !== alertLevels[key].disabled) {
        state.setIn(["alertLevels", key, "disabled"], alertLevels[key].disabled)
      }
    }
  });
}

export default function alertLevels(state = defaultState, { type, payload }) {
  switch (type) {
  case SET_FILTERS:
      return state.set("filters", payload.filters);
  case SET_IS_LOADING:
    return state.set("isLoading", payload.isLoading);
  case SET_ALERTS:
    return state.withMutations(state => {
      state.set("hierarchy", new List(payload.hierarchy));
      state.set("alertLevels", fromJS(payload.alertLevels));
    });
  case SET_ALERT_LEVELS:
    return setAlertLevelsStatus(state, payload);
  case SET_NODE_IS_COLLAPSED:
    return setNodeIsCollapsed(state, payload);
  default:
    return state;
  }
};