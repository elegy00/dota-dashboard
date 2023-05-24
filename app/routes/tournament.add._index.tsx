import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { TournamentService } from "~/services";

interface CreateTournamentForm {
  name: string;
}

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const bodyOb = Object.fromEntries(body) as unknown as CreateTournamentForm;
  TournamentService.addTournament({ name: bodyOb.name });

  return redirect("/tournament");
}

export default function Tournament() {
  return (
    <main>
      <h1>Add Tournament</h1>

      <Form method="post">
        <input type="text" name="name" />
        {/* <input type="submit" t */}
        <button>Create</button>
      </Form>
    </main>
  );
}
