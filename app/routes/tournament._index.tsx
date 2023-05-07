import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  });
};

export default function Tournament() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Tournament</h1>

      <Link to="/game/7142274878">Game 7142274878</Link>

      {posts.map((p) => (
        <div key={p.slug}>{p.title}</div>
      ))}
    </main>
  );
}
