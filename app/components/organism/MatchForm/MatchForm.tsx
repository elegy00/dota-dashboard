import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/atoms/Button";
import { Input } from "~/components/atoms/Input/Input";
import { TextArea } from "~/components/atoms/Input/TextArea";
import type { MatchFm } from "~/validation/matchSchema";
import { matchSchema } from "~/validation/matchSchema";

interface Props {
  onSubmit: (match: MatchFm) => void;
}

const MatchForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MatchFm>({
    resolver: zodResolver(matchSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 max-w-md"
    >
      <div className="w-full">
        <Input
          {...register("matchId", { valueAsNumber: true })}
          type="number"
          className="w-full"
        />
        {errors.matchId && (
          <p className="text-xs text-grey-700 mt-0">{errors.matchId.message}</p>
        )}
      </div>
      {/* <div className="w-full">
        <TextArea {...register("description")} className="w-full" />
        {errors.description && (
          <p className="text-xs text-grey-700 mt-0">
            {errors.description.message}
          </p>
        )}
      </div> */}
      <Button>Add</Button>
    </form>
  );
};

export { MatchForm };
