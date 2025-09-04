import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, Resolver } from "react-hook-form";
import { ZodTypeAny } from "zod/v3";

export function createDynamicZodResolver<T extends FieldValues>(
  getSchema: () => unknown
): Resolver<T> {
  const resolver = ((values, ctx, opts) =>
    (zodResolver(getSchema() as any) as Resolver<T>)(
      values,
      ctx,
      opts
    )) as Resolver<T>;
  return resolver;
}
