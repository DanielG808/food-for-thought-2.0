"use client";

import { motion } from "framer-motion";
import RecipeCard from "./recipe-card";
import { Recipe } from "../lib/validations/recipeSchema";

type RecipeCardContainerProps = {
  recipes: Recipe[];
};

export default function RecipeCardContainer({
  recipes,
}: RecipeCardContainerProps) {
  return (
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
