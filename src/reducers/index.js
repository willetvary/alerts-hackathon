import { fromJS, List, Map } from "immutable";
import {
  SET_FILTERS,
  UPDATE_FILTER,
  SET_IS_LOADING,
  SET_ALERTS,
  SET_ALERT_LEVELS,
  SET_NODE_IS_COLLAPSED,
  SET_ACTIVE_ALERTS_ONLY,
  SET_COLLAPSE_ALL
} from "../actions/actionTypes";

window._fromJS = fromJS
window._Map = Map

const defaultState = fromJS({
  isLoading: true,
  hierarchy: [],
  alertLevels: {},
  filters: new List(),
  activeAlertsOnly: false
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
};

const setCollapseAll = (state) => {
  console.log(">>> go here", state)
  return state.withMutations(state => {
    const alertLevels = state.get("alertLevels").toJS();
    const values = Object.values(alertLevels);
    values.forEach(v => {
      v.isCollapsed = true;
    });
    state.set("alertLevels", fromJS(alertLevels))
  });
};


export default function alertLevels(state = defaultState, { type, payload }) {
  switch (type) {
  case SET_FILTERS:
      return state.set("filters", payload.filters);
  case UPDATE_FILTER: {
    const filters = state.get("filters");
    const index = filters.findIndex(row => row.text === payload.origFilter);
    if (index > -1) {
      const newFilters = [...filters];
      newFilters[index] = {
        ...filters[index],
        text: payload.newFilter
      };
      return state.set("filters", newFilters);
    } else {
      return state;
    }
  }
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
  case SET_ACTIVE_ALERTS_ONLY:
    return state.set("activeAlertsOnly", payload.activeAlertsOnly);
  case SET_COLLAPSE_ALL:
    return setCollapseAll(state);
  default:
    return state;
  }
};