import superagent from "superagent";

const API_TOKEN = "536bc78a-7dd2-4543-9072-25b5d781914f";
const HOST = "http://localhost:8080";
const ALERTS_API_PATH = `${HOST}/api/alerthierarchy/alert_hierarchy`;
const ACKNOWLEDGE_API_PATH = `${HOST}/api/alerthierarchy/ack?nodeId=`;
const ENABLE_API_PATH = `${HOST}/api/alerthierarchy/enable?nodeId=`;

const getHeaders = () => ({
  headers: {
    authorization: `Bearer ${API_TOKEN}`
  }
});

const setAlertExpanded = (alert) => {
  alert.nodeId = `${Math.random()}`;
  alert.isExpanded = true;
  alert?.children?.forEach(row => {
    setAlertExpanded(row);
  });
};

const getNodesStatus = (nodes, nodeIds = {}) => {
  nodes.forEach(({ id, disabled, children }) => {
    nodeIds[id] = disabled;
    children && getNodesStatus(children, nodeIds);
  });
  return nodeIds;
};

const updateNodesStatus = (nodes, nodesStatus) => {
  nodes.forEach(n => {
    n.disabled = nodesStatus[n.id];
    n.children && updateNodesStatus(n.children, nodesStatus);
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

export const refreshAlerts = (topLevelAlerts) => {
  return getAlerts().then(data => {
    const nodesStatus = getNodesStatus(data);
    updateNodesStatus(topLevelAlerts, nodesStatus);
    return [...topLevelAlerts];
  });
};

export const acknowledgeAlert = (id) => {
  return superagent.post(`${ACKNOWLEDGE_API_PATH}${id}`)
    .send({})
    .set("Authorization", `Bearer ${API_TOKEN}`)
    .set("Content-Type", "application/json")
    .then(data => {
      return data.text;
    });
};

export const enableAlert = (id) => {
  return superagent.post(`${ENABLE_API_PATH}${id}`)
    .send({})
    .set("Authorization", `Bearer ${API_TOKEN}`)
    .set("Content-Type", "application/json")
    .then(data => {
      return data.text;
    });
};