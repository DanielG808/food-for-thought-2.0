import { SeedRecipe } from "../utils/recipes";

export const chipotleChickenPastaBake: SeedRecipe = {
  title: "Chipotle Chicken Pasta ",
  description:
    "Smoky chipotle chicken cooked low and slow, folded with a creamy blended cottage-cheese sauce and pasta.",
  ingredients: [
    // Cooker base
    { name: "Chicken breast", amount: "793", unit: "g", notes: "≈28 oz" },
    { name: "Adobo sauce", amount: "4", unit: "tbsp" },
    {
      name: "Chipotle peppers in adobo",
      amount: "4-5",
      unit: "whole",
      notes: "minced",
    },
    { name: "Garlic", amount: "2", unit: "tsp" },
    { name: "Onion powder", amount: "2", unit: "tsp" },
    { name: "Salt", amount: "1", unit: "tbsp" },
    { name: "Chicken bouillon", amount: "1", unit: "tsp" },
    { name: "Water", amount: "300", unit: "ml" },

    // Pasta + reserve
    {
      name: "Pasta",
      amount: "672",
      unit: "g",
      notes: "cook to 50% of box time",
    },
    {
      name: "Pasta water",
      amount: "120",
      unit: "ml",
      notes: "≈1/2 cup, add as needed",
    },

    // Blended sauce
    { name: "2% cottage cheese (blended)", amount: "600", unit: "g" },
    { name: "1/3-fat cream cheese", amount: "120", unit: "g" },
    { name: "Parmigiano Reggiano", amount: "50", unit: "g" },
    { name: "Mozzarella", amount: "50", unit: "g" },
    { name: "Honey", amount: "50", unit: "g" },
    { name: "Milk", amount: "300", unit: "ml" },
    { name: "Salt & pepper", amount: "to", unit: "taste" },

    // Finish
    { name: "Chives", amount: "to", unit: "garnish", notes: "chopped" },
  ],
  body: {
    steps: [
      "Add chicken, adobo sauce, minced chipotles, garlic, onion powder, salt, bouillon, and water to slow cooker.",
      "Cook on High 2–3 hours or Low 5–6 hours. Shred chicken.",
      "Cook pasta to 50% of box time; reserve ~1/2 cup pasta water.",
      "Blend cottage cheese, cream cheese, parmesan, mozzarella, honey, milk; season with salt and pepper.",
      "Combine shredded chicken, blended sauce, and par-cooked pasta; loosen with pasta water and cook 15–20 minutes until pasta is al dente and sauce is creamy.",
      "Top with chives. Portion into 10 equal containers for meal prep.",
    ],
  },
  prepTime: 25,
  cookTime: 240,
};
