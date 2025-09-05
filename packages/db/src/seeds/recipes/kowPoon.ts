import { SeedRecipe } from "../utils/recipes";

export const kowPoon: SeedRecipe = {
  title: "Kow Poon",
  description:
    "A spicy, aromatic Lao curry noodle soup made with shredded chicken, coconut milk, herbs, and quail eggs.",
  ingredients: [
    {
      name: "Chicken",
      amount: "1.5",
      unit: "kg",
      notes: "boiled with salt, ginger, and onion",
    },
    { name: "Ginger", amount: "30", unit: "g", notes: "sliced" },
    { name: "Galangal", amount: "30", unit: "g", notes: "sliced" },
    {
      name: "Lemongrass",
      amount: "3",
      unit: "stalks",
      notes: "smashed or sliced",
    },
    { name: "Red chilies", amount: "4", unit: "whole", notes: "or to taste" },
    { name: "Shallots", amount: "3", unit: "medium", notes: "sliced" },
    { name: "Garlic", amount: "5", unit: "cloves", notes: "sliced" },
    { name: "Kaffir lime leaves", amount: "5", unit: "whole", notes: "torn" },
    { name: "Red curry paste", amount: "2", unit: "cans" },
    { name: "Coconut milk", amount: "600", unit: "ml", notes: "≈1 ½ cans" },
    { name: "Fish sauce", amount: "2", unit: "tbsp" },
    { name: "Brown sugar", amount: "1", unit: "tbsp" },
    { name: "Chicken bouillon", amount: "1", unit: "tbsp" },
    { name: "Quail eggs", amount: "12", unit: "whole", notes: "boiled" },
    { name: "Bamboo shoots", amount: "200", unit: "g", notes: "sliced" },
    { name: "Oil", amount: "2", unit: "tbsp" },
    {
      name: "Onion",
      amount: "1",
      unit: "whole",
      notes: "used for initial chicken broth",
    },
    { name: "Salt", amount: "1", unit: "tbsp" },
    {
      name: "Chicken broth",
      amount: "1",
      unit: "liter",
      notes: "reserved from cooking chicken",
    },
  ],
  body: {
    steps: [
      "Boil chicken with salt, ginger, and onion until fully cooked. Remove, shred, and reserve broth.",
      "Prepare aromatics: slice ginger, galangal, shallots, garlic, and chilies. Smash lemongrass and tear kaffir lime leaves.",
      "In a pot, heat oil and quickly stir fry shallots, garlic, kaffir lime leaves, chilies, and lemongrass.",
      "Add curry paste and sauté 5 minutes until fragrant.",
      "Stir in coconut milk and cook another 5 minutes.",
      "Add ginger, galangal, and shredded chicken. Mix well.",
      "Season with fish sauce, brown sugar, and chicken bouillon.",
      "Pour in reserved chicken broth and bring to a simmer.",
      "Add bamboo, quail eggs, and any additional ingredients you like. Simmer 45–60 minutes to develop flavor.",
      "Taste and adjust seasoning before serving with noodles and herbs.",
    ],
  },
  prepTime: 30,
  cookTime: 90,
};
