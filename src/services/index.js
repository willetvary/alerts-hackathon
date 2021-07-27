const API_TOKEN = "536bc78a-7dd2-4543-9072-25b5d781914f";
const HOST = "http://localhost:8080";
const ALERTS_API_PATH = "/api/alerthierarchy/alert_hierarchy";

export const getAlerts = () => {
  const options = {
    headers: {
      authorization: `Bearer ${API_TOKEN}`
    }
  };
  return fetch(`${HOST}${ALERTS_API_PATH}`, options)
    .then(response => response.json())
    .then(data => data.response.alertHierarchy.topLevel);
};