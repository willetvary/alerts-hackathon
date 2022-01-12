import {
  loadAlerts as loadAlertsService,
  acknowledgeAlert as acknowledgeAlertService,
  enableAlert as enableAlertService
} from "../services";
import {
  SET_FILTERS,
  UPDATE_FILTER,
  SET_IS_LOADING,
  SET_ALERTS,
  SET_ALERT_LEVELS,
  SET_NODE_IS_COLLAPSED,
  SET_ACTIVE_ALERTS_ONLY,
  SET_COLLAPSE_ALL
} from "./actionTypes";

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: { filters }
});

export const updateFilter = (origFilter, newFilter) => ({
  type: UPDATE_FILTER,
  payload: {
    origFilter,
    newFilter
  }
});

export const loadAlerts = () => (dispatch) => {
  loadAlertsService().then(data => {
    dispatch(setAlerts(data));
    dispatch(setIsLoading(false));
  });
};

export const acknowledgeAlert = (id) => (dispatch) => {
  acknowledgeAlertService(id).then(data => {
    dispatch({
      type: SET_ALERT_LEVELS,
      payload: data
    });
  });
};

export const enableAlert = (id) => (dispatch) => {
  enableAlertService(id).then(data => {
    dispatch({
      type: SET_ALERT_LEVELS,
      payload: data
    });
  });
};

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: { isLoading }
});

export const setAlerts = (alerts) => ({
  type: SET_ALERTS,
  payload: alerts
});

export const setNodeIsCollapsed = (id, isCollapsed) => ({
  type: SET_NODE_IS_COLLAPSED,
  payload: { id, isCollapsed }
});

export const setActiveAlertsOnly = (activeAlertsOnly) => ({
  type: SET_ACTIVE_ALERTS_ONLY,
  payload: { activeAlertsOnly }
});

export const setCollapseAll = () => ({
  type: SET_COLLAPSE_ALL
});