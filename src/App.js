import Alerts from "./components";

import './App.scss';

function App() {
  return (
    <>
      <div className="page-header">
        <img src="/tanzu-logomark.svg" alt="" />
        <h1>Alerts</h1>
      </div>
      <Alerts />
    </>
  );
}

export default App;
