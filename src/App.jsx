import React, { useState } from 'react';
import { useRoutes, Link, Outlet } from 'react-router-dom';

import logo from './logo.svg';
import poweredBy from './powered-by-vitawind-dark.png';

function PageHome() {
  return (
    <main>
      <h3>PAGE-Home</h3>
    </main>
  );
}

function PageTodos() {
  return (
    <main>
      <h3>PAGE-Todos</h3>
    </main>
  );
}

// const PageHome = () => {
// #NOTE: `Function component is not a function declaration.`
//   return <h3>Home</h3>;
// };
// const PageHome = () => <h3>Home</h3>;

function PageNotFound() {
  return (
    <main>
      <h3>404</h3>
      <p>PAGE-NOT-FOUND</p>
    </main>
  );
}
/* end of Pages-fn() */

function Layout() {
  return (
    <>
      <nav>
        <ul className="text-sky-600">
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
  const [count, setCount] = useState(0);

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
        { path: '/todos', element: <PageTodos /> },
        { path: '*', element: <PageNotFound /> },
      ],
    },
  ]);
  /* end of useRoutes([]) */

  return (
    <div className="text-center selection:bg-green-900">
      {routesConfig}

      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <img
          src={logo}
          className="animate-speed h-60 motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            '\
            .animate-speed{\
              animation-duration:20s;\
            }\
          '
          }
        </style>

        <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
          Vite + React + Tailwindcss v3
        </p>

        <p className="mt-3">
          <button
            type="button"
            className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            count is:
            {count}
          </button>
        </p>

        <p>
          Edit
          <code className="text-[#8d96a7]">App.jsx</code>
          and save to test HMR updates.
        </p>

        <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}

          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>

        <img src={poweredBy} className="mx-auto my-8" alt="powered-by" />
      </header>
    </div>
  );
}
/* end of App() */

export default App;
