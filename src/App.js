import { Subtext } from "@tmc/clr-react";
import Alerts from "./components";

import './App.scss';

function App() {
  return (
    <>
      <div className="page-header">
        <img src="/tanzu-logomark.svg" alt="" />
        <div>
          <h1>Alert Levels</h1>
          <Subtext>Hackathon Team: Zone3</Subtext>
        </div>
      </div>
      <Alerts />
    </>
  );
}

export default App;
