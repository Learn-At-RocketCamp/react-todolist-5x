import React from 'react';
import { useRoutes, Link, Outlet } from 'react-router-dom';

import PageHome from './pages/PageHome';
import PageTodos from './pages/PageTodos';
import PageDev from './pages/PageDev';
import PageNotFound from './pages/PageNotFound';
import PageLogin from './pages/PageLogin';
import PageSignup from './pages/PageSignup';

function Layout() {
  return (
    <>
      <nav>
        <ul className="text-sky-600">
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/signup">SIGNUP</Link>
          </li>

          <li>
            <Link to="/dev">DEV</Link>
          </li>

          <li>
            <Link to="/">HOME</Link>
            {/*
             * #XXX:
             * A control must be associated with a text label.
             * The href attribute requires a valid value to be accessible.
             * <a href=""></a>
             */}
          </li>
          <li>
            <Link to="/todos">TODOS</Link>
          </li>

          <li>
            <Link to="/idontknowwheretogo">404</Link>
          </li>
        </ul>
      </nav>

      <hr className="h-2 bg-gray-300" />

      <Outlet />
    </>
  );
}
/* end of App-Layout() */

function App() {
  /**
   * #NOTE: useRoutes() === Hook
   * Hooks can only be called inside of the body of a function component.
   */
  const routesConfig = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <PageHome /> },
        { path: '/login', element: <PageLogin /> },
        { path: '/signup', element: <PageSignup /> },

        { path: '/todos', element: <PageTodos /> },
        { path: '/dev', element: <PageDev /> },
        { path: '*', element: <PageNotFound /> },
      ],
    },
  ]);
  /* end of useRoutes([]) */

  return routesConfig;
}
/* end of App() */

export default App;
