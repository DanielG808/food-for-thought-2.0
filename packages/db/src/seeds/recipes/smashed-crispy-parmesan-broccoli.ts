import { SeedRecipe } from "../utils/recipes";

export const smashedCrispyParmesanBroccoli: SeedRecipe = {
  title: "Smashed Crispy Parmesan Broccoli",
  description:
    "Tender-then-crispy broccoli smashed on a tray with olive oil, herbs, spices, and plenty of parmesan. Bake or air-fry.",
  ingredients: [
    {
      name: "Broccoli",
      amount: "2",
      unit: "heads",
      notes: "cut into large florets",
    },
    { name: "Olive oil", amount: "2", unit: "tbsp" },
    { name: "Oregano", amount: "1", unit: "tsp", notes: "dried" },
    { name: "Garlic powder", amount: "1", unit: "tsp" },
    { name: "Black pepper", amount: "1/2", unit: "tsp" },
    { name: "Salt", amount: "1/2", unit: "tsp" },
    { name: "Ground cumin", amount: "1/2", unit: "tsp" },
    { name: "Paprika", amount: "1/2", unit: "tsp" },
    { name: "All-purpose seasoning", amount: "1", unit: "tsp" },
    {
      name: "Parmesan",
      amount: "60",
      unit: "g",
      notes: "≈1/2 cup grated, plus extra for topping",
    },
  ],
  body: {
    steps: [
      "Bring a pot of salted water to a boil. Add broccoli and cook 10–15 minutes until just slightly soft. Drain and set aside.",
      "Line a sheet with baking paper. Drizzle with olive oil and sprinkle with oregano, garlic powder, pepper, salt, cumin, paprika, all-purpose seasoning, and a little parmesan.",
      "Place broccoli florets on the tray and smash each one flat (use the bottom of a glass). Top with more parmesan and a pinch of seasonings.",
      "Bake or air-fry at 185°C / 365°F for 15–30 minutes, until edges are browned and crispy to your liking.",
      "Remove from the tray and serve as a side. Season to taste if needed.",
    ],
  },
  prepTime: 10,
  cookTime: 30,
};
