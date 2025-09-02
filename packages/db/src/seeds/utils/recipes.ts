import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import z from "zod";

import {
  recipeCreateSchema,
  type RecipeFormData,
} from "@web/lib/validations/recipeSchema";

const recipeSeedSchema = recipeCreateSchema
  .extend({
    userId: z.string().optional(),
    prepTime: z.coerce.number().int().nonnegative(),
    cookTime: z.coerce.number().int().nonnegative(),
  })
  .strip();
export type SeedRecipe = Omit<RecipeFormData, "userId"> & { userId?: string };

export async function loadAllRecipesFromDir(
  dirRelativeToThisFile: string
): Promise<SeedRecipe[]> {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const absDir = path.resolve(here, dirRelativeToThisFile);

  const entries = await fs.readdir(absDir, { withFileTypes: true });

  const files = entries
    .filter((e) => {
      if (!e.isFile()) return false;
      if (/^index\./i.test(e.name)) return false;
      const ext = path.extname(e.name).toLowerCase();
      return ext === ".ts" || ext === ".js";
    })
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => path.join(absDir, name));

  const valid: SeedRecipe[] = [];
  const problems: { file: string; reason: string }[] = [];

  for (const abs of files) {
    try {
      const mod = await import(pathToFileURL(abs).href);
      const candidates = [
        ...(mod.default ? [mod.default] : []),
        ...Object.values(mod),
      ];

      let matched = 0;
      for (const c of candidates) {
        const parsed = recipeSeedSchema.safeParse(c);
        if (parsed.success) {
          valid.push(parsed.data as SeedRecipe);
          matched++;
        } else {
          problems.push({
            file: abs,
            reason: parsed.error.issues
              .map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`)
              .join("; "),
          });
        }
      }

      if (matched === 0) {
        problems.push({
          file: abs,
          reason: "no exports matched recipeSeedSchema",
        });
      }
    } catch (error) {
      const reason =
        error && typeof error === "object" && "message" in error
          ? String((error as { message: unknown }).message)
          : typeof error === "string"
          ? error
          : JSON.stringify(error);
      problems.push({ file: abs, reason });
    }
  }

  if (problems.length) {
    console.warn(
      "[utils] Some recipe files were skipped: \n" +
        problems.map((p) => `- ${p.file}: ${p.reason}`).join("\n")
    );
  }

  return valid;
}
