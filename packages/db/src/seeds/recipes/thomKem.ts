import { SeedRecipe } from "../utils/recipes";

export const thomKhem: SeedRecipe = {
  title: "Thom Khem",
  description:
    "A savory-sweet Cambodian braised pork dish simmered with soy, fish sauce, spices, and eggs.",
  ingredients: [
    {
      name: "Pork belly (or preferred cut)",
      amount: "1",
      unit: "kg",
      notes: "cut into cubes",
    },
    { name: "Eggs", amount: "6", unit: "whole", notes: "boiled and peeled" },
    {
      name: "Ginger",
      amount: "30",
      unit: "g",
      notes: "sliced into thin julienne",
    },
    { name: "Shallots", amount: "2", unit: "medium", notes: "sliced" },
    { name: "Garlic", amount: "6", unit: "cloves", notes: "chopped" },
    { name: "Star anise", amount: "2", unit: "whole" },
    { name: "Fish sauce", amount: "1", unit: "tbsp" },
    { name: "Sweet or light soy sauce", amount: "1", unit: "tbsp" },
    { name: "Dark soy sauce", amount: "1", unit: "tbsp" },
    { name: "Sugar", amount: "120", unit: "g", notes: "≈½ cup, for caramel" },
    { name: "Salt", amount: "1", unit: "tsp" },
    { name: "Black pepper", amount: "1", unit: "tsp" },
    { name: "Vegetable oil", amount: "2", unit: "tbsp" },
    {
      name: "Water",
      amount: "enough",
      unit: "to cover",
      notes: "for braising",
    },
  ],
  body: {
    steps: [
      "Cut pork into cubes. Boil with salt for about 7 minutes, rinse, and set aside.",
      "Boil eggs, peel, and set aside.",
      "Chop garlic, slice shallots, and julienne ginger.",
      "In a heavy pot, heat vegetable oil and add sugar. Cook on medium-low until caramelized (dark, but not burnt).",
      "Add garlic, shallots, and ginger. Stir fry 1–2 minutes until fragrant.",
      "Add pork cubes, searing on all sides.",
      "Season with fish sauce, light soy sauce, dark soy sauce, black pepper, and sprinkle with salt.",
      "Add water to cover, along with star anise and eggs. Simmer 30–45 minutes until pork is tender.",
      "Taste broth and adjust seasoning before serving.",
    ],
  },
  prepTime: 20,
  cookTime: 60,
};
