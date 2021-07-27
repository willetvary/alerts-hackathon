import React, { useEffect, useState } from "react";
import { Form, HORIZONTAL } from "@tmc/clr-react";
import { getAlerts } from "../services";
import Filter from "./Filter";
import Buttons from "./Buttons";
import Loading from "./Loading";
import TopLevelAlerts from "./TopLevelAlerts";

import "./index.scss";

export default function Alerts() {
  const [isLoading, setIsLoading] = useState(true);
  const [topLevelAlerts, setTopLevelAlerts] = useState(null);

  useEffect(() => {
    getAlerts().then((data) => {
      setTopLevelAlerts(data);
      setIsLoading(false);
    });
  }, [setTopLevelAlerts, setIsLoading]);

  return (
    <Form layout={HORIZONTAL} className="alerts">
      <div className="page-header">
        <Filter />
        <Buttons topLevelAlerts={topLevelAlerts} />
      </div>
      {isLoading ? <Loading /> : null}
      {!isLoading ? <TopLevelAlerts topLevelAlerts={topLevelAlerts} /> : null}
    </Form>
  );
}