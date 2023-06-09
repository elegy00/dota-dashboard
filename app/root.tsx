import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import {
//   darkColors,
//   lightColors,
//   theme,
//   themeClass,
// } from "./styles/theme/colors.css";
import { ColorContext, useColorThemeState } from "./state/colorContext";
import { Layout } from "./components/organism/Layout";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const contextState = useColorThemeState();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        <Meta />
        <Links />
      </head>
      <ColorContext.Provider value={contextState}>
        <body
          className={`${
            contextState.theme === "light" ? "light-mode" : "dark-mode"
          } bg-grey-100 text-grey-900`}
          // style={{ backgroundColor: theme.grey[100] }}
        >
          <Layout>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </Layout>
        </body>
      </ColorContext.Provider>
    </html>
  );
}
