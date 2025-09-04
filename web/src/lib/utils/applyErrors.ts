import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import {
  applyClerkErrorsToForm,
  extractClerkErrors,
  mapClerkErrors,
  type FieldMap,
} from "../utils/mapClerkErrors";

export function applyClerkErrorBundle<TValues extends FieldValues>(
  setError: UseFormSetError<TValues>,
  fieldMap: FieldMap<Path<TValues> & string>,
  fallbackField: Path<TValues>
) {
  return (err: unknown) => {
    const clerk = extractClerkErrors(err);
    const mapped = mapClerkErrors(clerk, fieldMap, fallbackField as string);

    applyClerkErrorsToForm<TValues, Path<TValues>>(
      setError,
      mapped as Partial<Record<Path<TValues>, string>>
    );
  };
}
