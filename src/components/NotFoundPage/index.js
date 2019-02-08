import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const NotFoundPage = ({
  match: {
    params: { unfoundLocation }
  }
}) => (
  <div className="not-found-page page-wrapper">
    <p>Oops... location "{unfoundLocation}" is not found.</p>
  </div>
);

NotFoundPage.propTypes = {
  unfoundLocation: PropTypes.object
};

export default NotFoundPage;
