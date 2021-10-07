import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import MainLayout from "layout";

const Router = (props) => {
  const { component: Component, title, ...rest } = props;

  useEffect(() => {
    document.title = title + " - Quran";
  }, [title]);

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

Router.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Router;
