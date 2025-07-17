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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 max-w-md"
    >
      <div className="w-full">
        <Input {...register("name")} type="text" className="w-full" />
        {errors.name && (
          <p className="text-xs text-gray-700 mt-0">{errors.name.message}</p>
        )}
      </div>
      {/* <div className="w-full">
        <TextArea {...register("description")} className="w-full" />
        {errors.description && (
          <p className="text-xs text-gray-700 mt-0">
            {errors.description.message}
          </p>
        )}
      </div> */}
      <Button>Create</Button>
    </form>
  );
};

export { TournamentForm };
