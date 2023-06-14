import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/atoms/Button";
import { Input } from "~/components/atoms/Input/Input";
import { TextArea } from "~/components/atoms/Input/TextArea";
import type { TournamentFm } from "../../../validation/tournamentSchema";
import { tournamentSchema } from "../../../validation/tournamentSchema";

interface Props {
  onSubmit: (tournament: TournamentFm) => void;
}

const TournamentForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TournamentFm>({
    resolver: zodResolver(tournamentSchema),
  });

  console.log({ errors });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 max-w-md"
    >
      <Input {...register("name")} type="text" />
      <TextArea {...register("description")} />
      <Button>Create</Button>
    </form>
  );
};

export { TournamentForm };
