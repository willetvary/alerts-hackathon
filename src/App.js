import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { Subtext } from "@tmc/clr-react";
import rootReducers from "./reducers";
import Alerts from "./components";

import './App.scss';

const store = createStore(rootReducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="page-header">
        <img src="/tanzu-logomark.svg" alt="" />
        <div>
          <h1>Alert Levels</h1>
          <Subtext>Radio 2022</Subtext>
        </div>
      </div>
      <Alerts />
    </Provider>
  );
}

export default App;
