import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "~/components/atoms/Link";
import { pageTitle } from "~/util/meta";

const isAuthorized = (request: Request) => {
  const header = request.headers.get("Authorization");

  if (!header) return false;

  const base64 = header.replace("Basic ", "");
  const [username, password] = Buffer.from(base64, "base64")
    .toString()
    .split(":");

  console.log({
    username,
    password,
    usr: process.env.USERNAME,
    pw: process.env.PASSWORD,
  });
  return username === process.env.AUTH_USERNAME && password === process.env.AUTH_PASSWORD;
};

export const headers = () => ({
  "WWW-Authenticate": "Basic",
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (!isAuthorized(request)) {
    return json({ authorized: false }, { status: 401 });
  }

  // Load data for password-protected page here.

  return json({
    authorized: true,
    // Include extra data for password-protected page here.
  });
};

export const meta: MetaFunction = () => {
  return [{ title: pageTitle("home") }];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  if (!data.authorized) {
    return <p>Unauthorized</p>;
  }

  return (
    <div>
      <h1>Welcome to the dota2 dashboard</h1>
      <p>Browse some tournaments to view details</p>
      <ul>
        <li>
          <Link to="/tournament">Tournament</Link>
        </li>
      </ul>
    </div>
  );
}
