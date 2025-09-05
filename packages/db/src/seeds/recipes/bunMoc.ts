import { SeedRecipe } from "../utils/recipes";

export const bunMoc: SeedRecipe = {
  title: "Bún Mọc",
  description:
    "A light Vietnamese noodle soup made with pork ribs, pork paste meatballs, and vegetables.",
  ingredients: [
    { name: "Pork spare ribs", amount: "1", unit: "kg" },
    {
      name: "Pork paste",
      amount: "500",
      unit: "g",
      notes: "season with salt, pepper, garlic powder, fish sauce",
    },
    { name: "Carrots", amount: "2", unit: "medium", notes: "sliced" },
    { name: "Daikon", amount: "1", unit: "medium", notes: "sliced" },
    { name: "Onions", amount: "2", unit: "medium", notes: "quartered" },
    { name: "Ginger", amount: "30", unit: "g", notes: "sliced" },
    {
      name: "Shiitake mushrooms",
      amount: "200",
      unit: "g",
      notes: "fresh or dried",
    },
    { name: "Chicken bouillon", amount: "1", unit: "tbsp" },
    { name: "Salt", amount: "1", unit: "tbsp" },
    { name: "Pepper", amount: "1", unit: "tsp" },
    { name: "Garlic powder", amount: "1", unit: "tsp" },
    { name: "Fish sauce", amount: "1", unit: "tbsp" },
    { name: "Vermicelli noodles", amount: "400", unit: "g" },
    { name: "Cilantro", amount: "1", unit: "bunch" },
    { name: "Scallions", amount: "1", unit: "bunch" },
    {
      name: "Lettuce",
      amount: "1",
      unit: "head",
      notes: "optional, for serving",
    },
    {
      name: "Lime",
      amount: "1",
      unit: "whole",
      notes: "for squeezing at the table",
    },
  ],
  body: {
    steps: [
      "Par-boil pork ribs, rinse clean, and set aside.",
      "Season pork paste lightly with salt, pepper, garlic powder, and fish sauce. Set aside.",
      "In a large stock pot, add ribs, salt, chicken bouillon, onions, and ginger. Simmer 30–45 minutes.",
      "Add sliced carrots and daikon. Continue simmering until vegetables are tender.",
      "Form pork paste into small balls and drop into the pot. Simmer 15 minutes, until cooked through. (Optional: fry some meatballs before adding.)",
      "Taste broth and adjust seasoning with more salt, fish sauce, or bouillon if needed.",
      "Cook vermicelli noodles separately according to package instructions.",
      "Assemble bowls with noodles, ladle over broth, ribs, and meatballs. Add shiitake mushrooms, herbs, lettuce, and a squeeze of lime before serving.",
    ],
  },
  prepTime: 25,
  cookTime: 60,
};
