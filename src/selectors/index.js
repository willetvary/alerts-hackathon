export const getIsLoading = (state) => state.get("isLoading");

export const getHierarchy = (state) => state.get("hierarchy");

export const getNode = (state, id) => state.getIn(["alertLevels", id]);

export const getFilters = (state) => state.get("filters");

export const getActiveAlertsOnly = (state) => {
  console.log(">>> go here", state.toJS(), state.get("activeAlertsOnly"))
  return state.get("activeAlertsOnly");
}