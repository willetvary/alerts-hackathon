import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, HORIZONTAL } from "@tmc/clr-react";
import PropTypes from "prop-types";
import { loadAlerts } from "../actions";
import { getIsLoading } from "../selectors";
import Loading from "./Loading";
import FitlerContainer from "./Filter";
import AlertsContainer from "./Alerts/AlertsContainer";

import "./index.scss";

function Alerts({ isLoading, loadAlerts }) {

  useEffect(() => {
    loadAlerts();
  }, [loadAlerts]);

  return (
    <Form layout={HORIZONTAL} className="alerts">
      {isLoading ? <Loading /> : null}
      {!isLoading ? (
        <>
          <FitlerContainer />
          <AlertsContainer />
        </>
      ): null}
    </Form>
  );
}

Alerts.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadAlerts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state)
});

export default connect(mapStateToProps, { loadAlerts })(Alerts);