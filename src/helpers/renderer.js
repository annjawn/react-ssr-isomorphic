import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/routes';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript'; //to prevent XSS attacks

//this file does the server side rendering

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  //HTML template for client
  //we send the data that was pulled by the server side redux as plain JSON
  //in window.INITIAL_STATE and use this at initialization of redux store in client side

  //we use serialize instead of JSON.stringify to avoid XSS (Cross Server Script)
  //attack using which the JSON could be injected with malicious Script
  //which could get executed in browser. serialize will convert all symbols in
  //the json data to unicode thus preventing any malicious script tags from
  //getting executed.

  return `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
