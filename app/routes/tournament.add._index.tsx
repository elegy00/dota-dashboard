import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Button } from "~/components/atoms/Button";
import { Input } from "~/components/atoms/Input/Input";
import { TournamentService } from "~/services";

interface CreateTournamentForm {
  name: string;
}

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const bodyOb = Object.fromEntries(body) as unknown as CreateTournamentForm;
  TournamentService.addTournament({ name: bodyOb.name, matches: [] });

  return redirect("/tournament");
}

export default function Tournament() {
  return (
    <main>
      <h1>Add Tournament</h1>

      <Form method="post">
        <Input
          type="text"
          name="name"
          className=""
        />
        {/* <input type="submit" t */}
        <Button>Create</Button>
      </Form>
    </main>
  );
}
