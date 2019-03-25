import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Navbar from '../../containers/Navbar';

const Layout = ({ children }) => (
  <div id="page">
    <Navbar />
    <div className="content">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export const LayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

LayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
