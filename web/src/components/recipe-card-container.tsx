"use client";

import { motion } from "framer-motion";
import RecipeCard from "./recipe-card";
import { Recipe } from "../lib/validations/recipeSchema";

type RecipeCardContainerProps = {
  recipes: Recipe[];
  showsNoMatches: boolean;
};

export default function RecipeCardContainer({
  recipes,
  showsNoMatches,
}: RecipeCardContainerProps) {
  return showsNoMatches ? (
    <p className="border border-foreground-dark/45 bg-foreground-dark/10 text-black/65 p-3 rounded-md">
      There aren&apos;t any recipes that match your search query! Try entering a
      new one.
    </p>
  ) : (
    <motion.ul
      className="grid grid-cols-3 gap-4"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {recipes.map((recipe) => (
        <motion.li
          key={recipe.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RecipeCard recipe={recipe} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
