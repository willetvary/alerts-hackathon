import React from "react";
import { Spinner, MD } from "@tmc/clr-react";

export default function Loading() {
  return <Spinner size={MD} inline label="Loading Alerts" />;
}