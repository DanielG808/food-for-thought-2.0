import type { RecipeFormData } from "../../../../../web/src/lib/validations/recipeSchema";

export const chiliCrispChicken: RecipeFormData = {
  title: "Slow Cooker Chili Crisp Chicken and Rice",
  description:
    "Slow Cooker Chili Crisp Chicken with rice and optional spicy mayo.",
  ingredients: [
    { name: "Chicken breast", amount: "1360", unit: "g" },
    { name: "Chili crisp", amount: "100", unit: "g", notes: "≈7 Tbsp" },
    { name: "Honey", amount: "80", unit: "g", notes: "≈4 Tbsp" },
    { name: "Soy sauce", amount: "60", unit: "g", notes: "≈4 Tbsp" },
    { name: "Sriracha", amount: "30", unit: "g", notes: "≈2 Tbsp" },
  ],
  body: {
    steps: [
      "Add chicken breast, chili crisp, honey, soy sauce, and sriracha to the slow cooker.",
      "Cook on high for 3–4 hours or on low for 4–5 hours.",
      "Mix in green onions and sesame seeds before serving.",
    ],
  },
  prepTime: 20,
  cookTime: 300,
};
