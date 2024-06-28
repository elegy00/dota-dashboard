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
    <>
      <div className="my-4">
        <a
          href="https://www.opendota.com/request"
          target="_blank"
          className="text-purple-500 underline underline-offset-2"
        >
          Request Analysis for more data before adding
        </a>
      </div>
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
            <p className="text-xs text-grey-700 mt-0">
              {errors.matchId.message}
            </p>
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
    </>
  );
};

export { MatchForm };
