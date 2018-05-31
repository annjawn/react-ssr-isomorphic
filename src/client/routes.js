import React from 'react';
//import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

//Router configuration needs to be as an object type is
//because for data load for SSR using react-config library

/*export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UsersList} />
    </div>
  );
}*/

export default [
  {
    ...App,   //this is the root component which will display the header etc.
    routes: [
      {
        path: '/',
        // component: HomePage,
        ...HomePage,  //ES2015 spread syntax, gets everything in an object. Source and target keys must match
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        // loadData,
        path: '/users',
        ...UsersListPage
        // component: UsersListPage
      },
      {
        // loadData,
        ...NotFoundPage
        // component: UsersListPage
      }
    ]
  }
];
