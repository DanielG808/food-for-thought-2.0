import { SeedRecipe } from "../utils/recipes";

export const ranchBaconJalapenoChickenPasta: SeedRecipe = {
  title: "Slow Cooker Chicken Bacon Ranch Pasta",
  description:
    "Creamy high-protein chicken, bacon, ranch pasta in a cottage-cheese parmesan sauce.",
  ingredients: [
    // Cooker base
    { name: "Chicken breast", amount: "896", unit: "g", notes: "≈32 oz" },
    { name: "Turkey bacon", amount: "6", unit: "slices" },
    { name: "Ranch seasoning", amount: "1", unit: "packet" },
    { name: "Hot honey", amount: "30", unit: "g", notes: "≈1.5 Tbsp" },
    { name: "Fresh dill", amount: "1", unit: "tbsp", notes: "chopped" },
    { name: "Garlic powder", amount: "to", unit: "taste" },
    { name: "Black pepper", amount: "to", unit: "taste" },
    { name: "Red chili flakes", amount: "to", unit: "taste" },

    // Aromatics + liquid
    { name: "Sweet onions", amount: "3", unit: "whole" },
    {
      name: "Jalapeños or Fresno chilis",
      amount: "6",
      unit: "whole",
      notes: "seed to taste",
    },
    { name: "Garlic", amount: "8", unit: "cloves", notes: "minced" },
    { name: "Chicken bone broth", amount: "450", unit: "ml", notes: "≈16 oz" },

    // Blended sauce
    { name: "2% cottage cheese", amount: "800", unit: "g" },
    { name: "Parmigiano Reggiano", amount: "160", unit: "g" },
    { name: "Fat-free milk", amount: "420", unit: "g" },
    { name: "Garlic powder", amount: "1", unit: "tsp" },
    { name: "Onion powder", amount: "1", unit: "tsp" },
    { name: "Salt & pepper", amount: "to", unit: "taste" },

    // Pasta + toppings
    {
      name: "Pasta",
      amount: "672",
      unit: "g",
      notes: "cook to 50% of box time",
    },
    {
      name: "Centercut bacon",
      amount: "10",
      unit: "slices",
      notes: "bake 400°F / 204°C for ~16 min",
    },
    { name: "Chives", amount: "to", unit: "garnish", notes: "chopped" },
  ],
  body: {
    steps: [
      "Add chicken, onions, jalapeños, garlic, broth, ranch seasoning, hot honey, dill, and seasonings to slow cooker.",
      "Cook on High 2–3 hours or Low 3–4 hours until chicken shreds.",
      "Blend cottage cheese, parmesan, milk, garlic powder, onion powder; season to taste.",
      "Cook pasta to 50% of box time. Bake centercut bacon until crisp; chop.",
      "Stir blended sauce into slow cooker, add pasta, and cook briefly until pasta is al dente and sauce is creamy.",
      "Top with chopped bacon and chives to serve.",
    ],
  },
  prepTime: 25,
  cookTime: 210,
};
