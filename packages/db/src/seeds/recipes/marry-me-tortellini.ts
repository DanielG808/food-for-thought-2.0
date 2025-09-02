import { SeedRecipe } from "../utils/recipes";

export const marryMeTortellini: SeedRecipe = {
  title: "Marry Me Tortellini",
  description:
    "A rich and comforting soup made with sun-dried tomatoes, cheese tortellini, spinach, and parmesan in a creamy broth.",
  ingredients: [
    { name: "Olive oil", amount: "2", unit: "tbsp" },
    { name: "Garlic", amount: "6", unit: "cloves", notes: "minced" },
    {
      name: "Sun-dried tomatoes in oil",
      amount: "120",
      unit: "ml",
      notes: "≈1/2 cup with oil",
    },
    { name: "Italian seasoning", amount: "1", unit: "tsp" },
    { name: "Red pepper flakes", amount: "1", unit: "pinch" },
    { name: "Flour", amount: "2", unit: "tbsp" },
    { name: "Vegetable broth", amount: "480", unit: "ml", notes: "2 cups" },
    {
      name: "Cheese tortellini",
      amount: "567",
      unit: "g",
      notes: "20 oz (≈5 cups)",
    },
    { name: "Heavy cream", amount: "120", unit: "ml", notes: "≈1/2 cup" },
    { name: "Fresh spinach", amount: "60", unit: "g", notes: "≈2 cups" },
    {
      name: "Parmigiano",
      amount: "100",
      unit: "g",
      notes: "≈1 cup, grated",
    },
    { name: "Salt & pepper", amount: "", unit: "", notes: "to taste" },
  ],
  body: {
    steps: [
      "Add olive oil, garlic, sun-dried tomatoes (with their oil), Italian seasoning, and red pepper flakes to a heavy-bottomed pot.",
      "Cook for 3–4 minutes or until garlic is tender and fragrant.",
      "Add flour and cook for 3 minutes to create a roux.",
      "Pour in vegetable broth and bring to a boil. Let thicken for 3–5 minutes, then add tortellini and a pinch of salt. Stir to combine.",
      "Turn off the heat and stir in heavy cream, parmigiano, and spinach until spinach is wilted.",
      "Season with salt and pepper to taste before serving.",
    ],
  },
  prepTime: 15,
  cookTime: 25,
};
