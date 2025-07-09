import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  // Root index route
  index("routes/_index.tsx"),

  // Tournament routes
  route("tournament", "routes/tournament._index.tsx", [
    // Nested tournament routes
    route("add", "routes/tournament.add._index.tsx"),
    route(":tournament_id", "routes/tournament.$tournament_id.tsx", [
      index("routes/tournament.$tournament_id._index.tsx"),
      route(
        "match/:match_id",
        "routes/tournament.$tournament_id.match.$match_id.tsx"
      ),
      route(
        "view/:view_id",
        "routes/tournament.$tournament_id.view.$view_id.tsx"
      ),
    ]),
  ]),

  // API routes
  ...prefix("api", [
    route("tournament", "routes/api.tournament._index.tsx", [
      route(
        ":tournament_id/match",
        "routes/api.tournament.$tournament_id.match._index.tsx"
      ),
    ]),
  ]),
] satisfies RouteConfig;
