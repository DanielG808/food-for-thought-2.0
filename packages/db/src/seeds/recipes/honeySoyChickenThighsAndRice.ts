import { SeedRecipe } from "../utils/recipes";

export const honeySoyChickenThighsAndRice: SeedRecipe = {
  title: "Honey-Soy Chicken Thighs with Rice & Low-Cal Yum-Yum",
  description:
    "Slow-cooked chicken thighs in soy, dark soy, honey, and mirin; thickened with a cornstarch slurry and served over sushi rice with a light yum-yum sauce.",
  ingredients: [
    // Chicken
    {
      name: "Boneless skinless chicken thighs",
      amount: "1360",
      unit: "g",
      notes: "≈48 oz",
    },
    { name: "Soy sauce", amount: "75", unit: "g", notes: "≈5 Tbsp" },
    { name: "Dark soy sauce", amount: "30", unit: "g", notes: "≈2 Tbsp" },
    { name: "Honey", amount: "80", unit: "g", notes: "≈4 Tbsp" },
    { name: "Mirin", amount: "60", unit: "g", notes: "≈4 Tbsp" },
    { name: "Ginger paste", amount: "30", unit: "g", notes: "≈2 Tbsp" },
    { name: "Garlic paste", amount: "15", unit: "g", notes: "≈1 Tbsp" },

    // Slurry
    { name: "Cornstarch", amount: "3", unit: "tbsp" },
    { name: "Cold water", amount: "4", unit: "tbsp" },

    // Rice
    {
      name: "Short-grain or sushi rice (dry)",
      amount: "480",
      unit: "g",
      notes: "≈2.5 cups",
    },

    // Low-cal yum-yum
    { name: "Low-fat mayo", amount: "100", unit: "g" },
    { name: "0% Greek yogurt", amount: "100", unit: "g" },
    { name: "Sriracha", amount: "75", unit: "g", notes: "≈5 Tbsp" },
    { name: "Salt, pepper, garlic powder", amount: "to", unit: "taste" },
    { name: "Milk", amount: "as", unit: "needed", notes: "for consistency" },

    // Garnish
    { name: "Green onions", amount: "2", unit: "stalks", notes: "chopped" },
  ],
  body: {
    steps: [
      "Add chicken thighs, soy sauce, dark soy, honey, mirin, ginger paste, and garlic paste to slow cooker.",
      "Cook on High 4–5 hours or Low 5+ hours until tender.",
      "Mix cornstarch with cold water. Stir slurry into hot sauce; let sit uncovered 15–20 minutes to thicken.",
      "Cook rice according to package.",
      "Whisk low-fat mayo, Greek yogurt, sriracha, seasonings, and a splash of milk until smooth.",
      "Serve chicken and sauce over rice with yum-yum drizzled on top; garnish with chopped green onions.",
    ],
  },
  prepTime: 15,
  cookTime: 300,
};
