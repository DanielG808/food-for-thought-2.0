import { SeedRecipe } from "../utils/recipes";

export const honeySrirachaTurkeyMeatballs: SeedRecipe = {
  title: "Honey Sriracha Turkey Meatballs",
  description:
    "Lean ground turkey meatballs baked and tossed in a sweet-spicy sriracha sauce served with rice and veggie.",
  ingredients: [
    { name: "Lean ground turkey", amount: "907", unit: "g" },
    { name: "Whole wheat panko breadcrumbs", amount: "1", unit: "cup" },
    { name: "Eggs", amount: "2", unit: "each" },
    { name: "Green onions", amount: "1/4", unit: "cup", notes: "chopped" },
    { name: "Garlic powder", amount: "1/2", unit: "tsp" },
    { name: "Salt", amount: "1/2", unit: "tsp" },
    { name: "Black pepper", amount: "1/2", unit: "tsp" },
    { name: "Sriracha", amount: "1/4", unit: "cup" },
    { name: "Soy sauce", amount: "3", unit: "Tbsp" },
    { name: "Rice vinegar", amount: "3", unit: "Tbsp" },
    { name: "Honey", amount: "3", unit: "Tbsp" },
    { name: "Fresh ginger", amount: "1", unit: "Tbsp", notes: "grated" },
    { name: "Garlic", amount: "3", unit: "cloves", notes: "minced" },
    { name: "Sesame oil", amount: "1/2", unit: "tsp" },
  ],
  body: {
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Mix turkey, breadcrumbs, eggs, onions, and spices into meatball mixture.",
      "Shape into ~1.5 inch meatballs and arrange on a baking sheet.",
      "Bake 20–25 minutes until cooked through.",
      "Meanwhile, whisk sauce ingredients in a saucepan and simmer until thickened.",
      "Toss cooked meatballs with sauce and serve with rice.",
    ],
  },
  prepTime: 20,
  cookTime: 35,
};
