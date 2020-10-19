import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AccountView from 'src/views/account/AccountView';
import UserListView from 'src/views/user/UserListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import InitiativeListView from 'src/views/initiatives/InitiativeListView';
import InitiativeView from 'src/views/initiatives/InitiativeListView/initiative';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <DashboardView /> },
      // { path: 'account', element: <AccountView /> },
      { path: 'users', element: <UserListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'initiatives', element: <InitiativeListView /> },
      { path: 'initiative/:id', element: <InitiativeView /> },
      // { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  // {
  //   path: '/',
  //   element: <LoginView />,
  //   exact: true,
  //   children: [
  //     { path: 'login', element: <LoginView /> },
  //   ]
  // }
  // ,
  // {
  //   path: '/register',
  //   element: <RegisterView />,
  //   exact: true
  // },
  {
    element: <NotFoundView />
  }
];

export default routes;
