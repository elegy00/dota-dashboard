import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "~/components/atoms/Link";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to the dota dashboard</h1>
      <ul>
        <li>
          <Link to="/tournament">Tournament</Link>
        </li>
      </ul>
    </div>
  );
}
