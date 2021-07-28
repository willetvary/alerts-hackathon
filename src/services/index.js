const API_TOKEN = "536bc78a-7dd2-4543-9072-25b5d781914f";
const HOST = "http://localhost:8080";
const ALERTS_API_PATH = `${HOST}/api/alerthierarchy/alert_hierarchy`;
const ACKNOWLEDGE_API_PATH = `${HOST}/api/alerthierarchy/ack?alertId=`;
const ENABLE_API_PATH = `${HOST}/api/alerthierarchy/enable?alertId=`;

const getHeaders = () => ({
  headers: {
    authorization: `Bearer ${API_TOKEN}`
  }
});

const setAlertExpanded = (alert) => {
  alert.nodeId = `${Math.random()}`;
  alert.isExpanded = true;
  alert?.childern?.forEach(row => {
    setAlertExpanded(row);
  });
};

export const getAlerts = () => {
  return fetch(ALERTS_API_PATH, getHeaders())
    .then(response => response.json())
    .then(data => {
      data.response.alertHierarchy.topLevel.forEach(alert => {
        setAlertExpanded(alert)
      });
      return data.response.alertHierarchy.topLevel
    });
};

export const acknowledgeAlert = (id) => {
  return fetch(`${ACKNOWLEDGE_API_PATH}${id}`, getHeaders())
    .then(response => {
      console.log(">>> response", response)
    //   return response.json()
    // })
    // .then(data => {
    //   console.log(">>> data", data)
    //   return data
    })
};

export const enableAlert = (id) => {
  return fetch(`${ENABLE_API_PATH}${id}`, getHeaders())
    .then(response => {
      console.log(">>> response", response)
    //   return response.json()
    // })
    // .then(data => {
    //   console.log(">>> data", data)
    //   return data
    })
};