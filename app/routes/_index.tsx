import { type MetaFunction } from "react-router";
import { Link } from "~/components/atoms/Link";
import { pageTitle } from "~/util/meta";

export const meta: MetaFunction = () => {
  return [{ title: pageTitle("home") }];
};

export default function Index() {
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
