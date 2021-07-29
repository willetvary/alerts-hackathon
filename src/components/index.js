import React, { useCallback, useEffect, useState } from "react";
import { Form, HORIZONTAL } from "@tmc/clr-react";
import { getAlerts, refreshAlerts as refreshAlertsService } from "../services";
import Loading from "./Loading";
import Filter from "./Filter";
import TopLevelAlerts from "./TopLevelAlerts";

import "./index.scss";

export default function Alerts() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [topLevelAlerts, setTopLevelAlerts] = useState(null);

  useEffect(() => {
    getAlerts().then(data => {
      setTopLevelAlerts(data);
      setIsLoading(false);
    });
  }, [setTopLevelAlerts, setIsLoading]);

  const refreshAlerts = useCallback(() => {
    refreshAlertsService(topLevelAlerts).then(data => {
      setTopLevelAlerts(data);
    });
  }, [topLevelAlerts, setTopLevelAlerts]);

  return (
    <Form layout={HORIZONTAL} className="alerts">
      {isLoading ? <Loading /> : null}
      {!isLoading ? (
        <>
          <Filter value={filterText} setValue={setFilterText} />
          <TopLevelAlerts topLevelAlerts={topLevelAlerts} filterText={filterText} refreshAlerts={refreshAlerts} />
        </>
      ): null}
    </Form>
  );
}