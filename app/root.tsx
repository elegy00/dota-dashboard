import type { LinksFunction } from "@remix-run/node";
import {
  Links,
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

import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const contextState = useColorThemeState();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

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
            {/* <LiveReload /> */}
          </Layout>
        </body>
      </ColorContext.Provider>
    </html>
  );
}
