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
import { darkColors, lightColors, themeClass } from "./styles/theme/colors.css";
import { ColorContext, useColorThemeState } from "./state/colorContext";
import { Layout } from "./components/organism/Layout";

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [
        { rel: "stylesheet", href: cssBundleHref },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
        },
      ]
    : []),
];

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
            contextState.theme === "light" ? lightColors : darkColors
          } ${themeClass} `}
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
