import { SeedRecipe } from "../utils/recipes";

export const curriedCrabs: SeedRecipe = {
  title: "Curried Crabs 🦀🍛",
  description:
    "Rich, aromatic crab curry with coconut milk, red curry paste, and fresh herbs.",
  ingredients: [
    {
      name: "Crabs",
      amount: "4",
      unit: "whole",
      notes: "cleaned, cracked in half",
    },
    { name: "Red curry paste", amount: "60", unit: "g", notes: "≈4 Tbsp" },
    { name: "Coconut milk", amount: "400", unit: "ml", notes: "≈1 can" },
    { name: "Sugar", amount: "1", unit: "tbsp" },
    { name: "Salt", amount: "1", unit: "tsp" },
    { name: "Fish sauce", amount: "1", unit: "tbsp" },
    { name: "Vegetable or chicken bouillon", amount: "1", unit: "tsp" },
    { name: "Onion", amount: "1", unit: "medium", notes: "sliced" },
    { name: "Celery", amount: "100", unit: "g", notes: "optional, sliced" },
    {
      name: "Eggs",
      amount: "2",
      unit: "whole",
      notes: "optional, cracked into curry",
    },
    { name: "Basil", amount: "1", unit: "bunch", notes: "fresh, for topping" },
  ],
  body: {
    steps: [
      "Clean and prepare the crabs: boil briefly, remove gills, crack in half, and save roe-filled shells if any.",
      "In a pan, sauté red curry paste for 5 minutes until fragrant.",
      "Stir in coconut milk, let it thicken, and season with sugar, salt, fish sauce, and bouillon.",
      "Add crabs and mix well so they absorb the curry flavors.",
      "Add sliced onions and optional celery, simmer over medium heat until crabs are fully cooked.",
      "Optionally crack in eggs and stir gently into the curry.",
      "Finish with fresh basil on top before serving.",
    ],
  },
  prepTime: 20,
  cookTime: 30,
};
