import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <h3 className="center-align" style={{ marginTop: '200px' }}>
      Oops, route not found...
    </h3>
  );
}

export default {
  component: NotFoundPage
}
