import superagent from "superagent";

const API_TOKEN = "536bc78a-7dd2-4543-9072-25b5d781914f";
const HOST = "http://localhost:8080";
const ALERTS_API_PATH = `${HOST}/api/alerthierarchy/alert_hierarchy`;
const ACKNOWLEDGE_API_PATH = `${HOST}/api/alerthierarchy/ack?nodeId=`;
const ENABLE_API_PATH = `${HOST}/api/alerthierarchy/enable?nodeId=`;

const buildAlertLevels = (alertLevels, acc = {}) => {
  for(let i = 0; i < alertLevels.length; i++) {
    const { id, children, ...node } = alertLevels[i];
    acc[id] = node;
    alertLevels[i] = { id, children };
    if (children) {
      acc = buildAlertLevels(children, acc);
    }
  }
  return acc;
};

export const loadAlerts = () => {
  return superagent.get(ALERTS_API_PATH)
    .set("Authorization", `Bearer ${API_TOKEN}`)
    .set("Content-Type", "application/json")
    .send()
    .then(data => {
      const topLevel = data.body.response.alertHierarchy.topLevel;
      return {
        hierarchy: topLevel,
        alertLevels: buildAlertLevels(topLevel)
      };
    });
};

export const acknowledgeAlert = (id, alertLevels) => {
  return superagent.post(`${ACKNOWLEDGE_API_PATH}${id}`)
    .set("Authorization", `Bearer ${API_TOKEN}`)
    .set("Content-Type", "application/json")
    .send({})
    .then(() => {
      return loadAlerts();
    });
};

export const enableAlert = (id, alertLevels) => {
  return superagent.post(`${ENABLE_API_PATH}${id}`)
    .send({})
    .set("Authorization", `Bearer ${API_TOKEN}`)
    .set("Content-Type", "application/json")
    .then(() => {
      return loadAlerts();
    });
};