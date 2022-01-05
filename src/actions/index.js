import {
  loadAlerts as loadAlertsService,
  acknowledgeAlert as acknowledgeAlertService,
  enableAlert as enableAlertService
} from "../services";
import {
  SET_FILTERS,
  SET_IS_LOADING,
  SET_ALERTS,
  SET_ALERT_LEVELS,
  SET_NODE_IS_COLLAPSED
} from "./actionTypes";

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: { filters }
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