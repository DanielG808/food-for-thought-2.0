import { SeedRecipe } from "../utils/recipes";

export const butterChickenMacAndCheese: SeedRecipe = {
  title: "Butter Chicken Mac And Cheese",
  description:
    "Diced chicken in a butter sauce with warm spices, folded with Greek yogurt and melty cheeses, then tossed with pasta shells.",
  ingredients: [
    // Base
    {
      name: "Chicken breast",
      amount: "900",
      unit: "g",
      notes: "≈32 oz, diced",
    },
    {
      name: "Onions",
      amount: "2",
      unit: "medium",
      notes: "sautéed until browned",
    },
    { name: "Tomato paste", amount: "30", unit: "g", notes: "≈2 Tbsp" },
    { name: "Garlic paste", amount: "30", unit: "g", notes: "≈2 Tbsp" },
    { name: "Ginger paste", amount: "15", unit: "g", notes: "≈1 Tbsp" },
    { name: "Butter", amount: "30", unit: "g", notes: "≈2 Tbsp" },
    {
      name: "Blended fire-roasted tomatoes",
      amount: "400",
      unit: "g",
      notes: "≈14 oz",
    },
    {
      name: "Sugar or zero-cal sweetener",
      amount: "15",
      unit: "g",
      notes: "≈1 Tbsp",
    },

    // Spice blend
    { name: "Paprika", amount: "2", unit: "tbsp" },
    { name: "Chili powder", amount: "1", unit: "tbsp" },
    { name: "Spicy curry powder", amount: "1", unit: "tbsp" },
    { name: "Ground cumin", amount: "2", unit: "tsp" },
    { name: "Salt", amount: "1", unit: "tbsp" },
    { name: "Black pepper", amount: "1", unit: "dash" },

    // Pasta + reserve
    {
      name: "Shell pasta",
      amount: "672",
      unit: "g",
      notes: "cook to 50% of box time",
    },
    {
      name: "Pasta water",
      amount: "240",
      unit: "ml",
      notes: "≈1 cup, reserve",
    },

    // Finishers
    { name: "Plain 0% Greek yogurt (FAGE)", amount: "400", unit: "g" },
    { name: "1/3 fat cream cheese", amount: "120", unit: "g" },
    { name: "Cilantro", amount: "to", unit: "taste", notes: "chopped" },
    { name: "Green onions", amount: "to", unit: "taste", notes: "chopped" },
    { name: "Extra sharp cheddar", amount: "227", unit: "g" },
    { name: "Reduced-fat mozzarella", amount: "80", unit: "g" },
    { name: "Garam masala", amount: "1", unit: "tsp" },
  ],
  body: {
    steps: [
      "Brown onions in a skillet with butter. Add to slow cooker with chicken, tomato paste, garlic paste, ginger paste, blended tomatoes, sugar, and all spices.",
      "Cook on High 2–3 hours or Low 3–4 hours, until chicken is tender.",
      "Cook shell pasta to 50% of its box time; reserve 1 cup pasta water.",
      "Stir yogurt, cream cheese, cilantro, green onions, cheddar, mozzarella, and garam masala into the slow cooker until creamy.",
      "Fold in par-cooked shells, loosening with reserved pasta water as needed. Heat gently until pasta is al dente and cheeses are melted.",
    ],
  },
  prepTime: 20,
  cookTime: 180,
};
