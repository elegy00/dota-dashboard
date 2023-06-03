import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/tournament">Tournament</Link>
        </li>
      </ul>
    </div>
  );
}
