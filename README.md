# An isomorphic react app with Server Side rendering (SSR)



### Overview

This single page application (SPA) demonstrates how to achieve server side rendering (SSR) using react and react-router. The App primarily accesses some API endpoints, some of which require authentication using Google's OAuth. The app uses react-router for it's routing capabilities.

#### Technology Stack
This app makes use of the following Technologies

1. React JS framework
2. React-redux framework
3. Redux-Thunk middleware
4. Axios for Ajax requests
5. Express JS, Express HTTP Proxy and NodeMon.
6. Redux-Promise middleware
7. Helmet for OpenGraph SEO meta tags

#### How it works
The app demonstrates the simple capability of server side rendering using React `renderToString()` methods (can be expanded to use `renderToNodeStream` to improve TTFB). The App uses Express server to proxy API requests to the server side to fetch responses from the API and render the HTML in the server side and pushed down to the client. The app also handles authentication on both the browser (client) and the server side using Cookies in order to authenticate either the user on the browser to be able to access the restricted API end points, or authenticate from the server side using cookies sent in the client request in order to access restricted end points. The app also uses React-router to do routing and authentication exception handling. The app contains separate client and server webpack configurations in order to build specific bundle.js files.
