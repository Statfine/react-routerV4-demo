import React from 'react';
import { renderRoutes } from 'react-router-config';

// import HomeLayout from './containers//HomeLayout';

const Root = ({ route }) => ( // eslint-disable-line
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

const Home = ({ route }) => ( // eslint-disable-line
  <div>
    <h2>Home</h2>
  </div>
);

const Child = ({ route }) => ( // eslint-disable-line
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
  </div>
);

const GrandChild = ({ someProp }) => ( // eslint-disable-line
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);

export const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      { path: '/child/:id',
        component: Child,
        routes: [
          {
            path: '/child/:id/grand-child',
            component: GrandChild,
          },
        ],
      },
    ],
  },
];
