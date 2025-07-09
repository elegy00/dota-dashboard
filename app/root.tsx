import type { LinksFunction, LoaderFunctionArgs } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import { ColorContext, useColorThemeState } from "./state/colorContext";
import { Layout } from "./components/organism/Layout";

import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const isAuthorized = (request: Request) => {
  const header = request.headers.get("Authorization");
  if (!header) return false;

  const base64 = header.replace("Basic ", "");
  const [username, password] = Buffer.from(base64, "base64")
    .toString()
    .split(":");

  return (
    username === process.env.AUTH_USERNAME &&
    password === process.env.AUTH_PASSWORD
  );
};

export const headers = () => ({
  "WWW-Authenticate": "Basic",
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (!isAuthorized(request)) {
    throw new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Dota Dashboard"',
      },
    });
  }

  // Load data for password-protected page here.

  return {
    authorized: true,
    // Include extra data for password-protected page here.
  };
};

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
