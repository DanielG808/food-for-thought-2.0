import type { RecipeFormData } from "../../../../../web/src/lib/validations/recipeSchema";

export const classicItalianMeatballs: RecipeFormData = {
  title: "Classic Italian Meatballs",
  description:
    "Tender baked meatballs made with ground beef, Italian sausage, herbs, parmesan, and breadcrumbs.",
  ingredients: [
    { name: "Ground beef", amount: "907", unit: "g", notes: "2 lbs" },
    {
      name: "Mild Italian sausage",
      amount: "482",
      unit: "g",
      notes: "1 lb 3 oz, 1 pack of 5 links, casings removed",
    },
    { name: "Parsley", amount: "4", unit: "tbsp", notes: "dried" },
    { name: "Basil", amount: "2", unit: "tbsp", notes: "dried" },
    { name: "Garlic", amount: "4-5", unit: "cloves", notes: "minced" },
    { name: "Salt", amount: "2", unit: "tsp" },
    { name: "Black pepper", amount: "1", unit: "tsp" },
    {
      name: "Parmesan cheese",
      amount: "50",
      unit: "g",
      notes: "≈1/2 cup shredded",
    },
    {
      name: "Breadcrumbs",
      amount: "100",
      unit: "g",
      notes: "≈1 cup, Italian seasoned preferred",
    },
    { name: "Eggs", amount: "1-2", unit: "large" },
  ],
  body: {
    steps: [
      "Preheat oven to 400°F (200°C).",
      "In a large mixing bowl, whisk together parsley, basil, garlic, breadcrumbs, parmesan cheese, salt, and pepper until blended.",
      "Remove sausage from casings and add both sausage and ground beef to the mixture. Mix until just combined (do not overmix to keep the meat tender).",
      "Line a baking sheet with aluminum foil. Form the mixture into 30–40 meatballs and place on the sheet.",
      "Bake for 20–25 minutes, then let cool for 5 minutes before removing from the baking sheet.",
    ],
  },
  prepTime: 20,
  cookTime: 25,
};
