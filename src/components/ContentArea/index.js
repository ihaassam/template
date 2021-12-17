import React from "react";
import "./contentArea.css";

function ContentArea({ ...props }) {
  return <div className="content-area">{props.children}</div>;
}
export default ContentArea;
