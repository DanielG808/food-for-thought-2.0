import { SeedRecipe } from "../utils/recipes";

export const spicyPeanutChickenNoodles: SeedRecipe = {
  title: "Spicy Peanut Chicken Noodles",
  description:
    "Meal-prep peanut noodles with diced chicken, garlic/green onions, and a sweet-heat peanut sauce.",
  ingredients: [
    // Chicken
    {
      name: "Chicken breast",
      amount: "567",
      unit: "g",
      notes: "≈20 oz, diced",
    },
    { name: "Soy sauce", amount: "2", unit: "tbsp" },
    { name: "Sriracha", amount: "1.5", unit: "tbsp" },
    { name: "Lime juice", amount: "1/2", unit: "lime" },
    { name: "Salt", amount: "to", unit: "taste" },
    { name: "Garlic powder", amount: "to", unit: "taste" },
    { name: "Onion powder", amount: "to", unit: "taste" },
    { name: "Red chili flakes", amount: "to", unit: "taste" },

    // Aromatics
    { name: "Garlic", amount: "10", unit: "cloves", notes: "minced" },
    {
      name: "Green onions (whites only)",
      amount: "5",
      unit: "stalks",
      notes: "reserve greens for garnish",
    },

    // Sauce
    { name: "Creamy peanut butter", amount: "100", unit: "g" },
    { name: "Soy sauce", amount: "40", unit: "g" },
    { name: "Sriracha", amount: "20", unit: "g" },
    { name: "Honey", amount: "75", unit: "g" },
    { name: "Lime juice", amount: "1", unit: "lime" },

    // Noodles
    { name: "Noodles or pasta of choice", amount: "300", unit: "g" },

    // Finishing
    {
      name: "Reserved pasta water",
      amount: "80",
      unit: "ml",
      notes: "≈1/3 cup, as needed",
    },
    { name: "Green onion tops", amount: "to", unit: "garnish" },
  ],
  body: {
    steps: [
      "Season diced chicken with 2 Tbsp soy sauce, 1.5 Tbsp sriracha, lime juice, salt, garlic powder, onion powder, and chili flakes.",
      "Sauté chicken until cooked through; add minced garlic and green onion whites and cook briefly until fragrant. Remove chicken from pan.",
      "Cook noodles per package. Before draining, reserve ~1/3 cup pasta water.",
      "Whisk peanut butter, soy sauce, sriracha, honey, and lime juice into a smooth sauce.",
      "Add peanut sauce to the pan, loosen with reserved pasta water, then toss in cooked noodles until coated.",
      "Top each portion with the cooked chicken mixture instead of mixing it into the pan. Garnish with green onion greens.",
      "Split into 5 even servings.",
    ],
  },
  prepTime: 20,
  cookTime: 20,
};
