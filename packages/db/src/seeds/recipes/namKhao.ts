import { SeedRecipe } from "../utils/recipes";

export const namKhao: SeedRecipe = {
  title: "Nam Khao",
  description:
    "A crispy Lao rice salad made with fried rice balls, herbs, and fermented pork sausage (som moo).",
  ingredients: [
    { name: "Rice", amount: "500", unit: "g", notes: "cooked and cooled" },
    { name: "Som moo (fermented pork sausage)", amount: "300", unit: "g" },
    { name: "Cilantro", amount: "1", unit: "bunch", notes: "chopped" },
    { name: "Scallions", amount: "1", unit: "bunch", notes: "sliced" },
    { name: "Limes", amount: "2", unit: "whole", notes: "juiced at serving" },
    { name: "Red curry paste", amount: "2", unit: "tbsp" },
    {
      name: "Kaffir lime leaves",
      amount: "3",
      unit: "whole",
      notes: "finely chopped",
    },
    { name: "Eggs", amount: "2", unit: "whole" },
    { name: "Fish sauce", amount: "2", unit: "tbsp" },
    { name: "Salt", amount: "1", unit: "tsp" },
    { name: "Sugar", amount: "1", unit: "tsp" },
    { name: "Chicken bouillon", amount: "1", unit: "tsp" },
    { name: "Oil", amount: "enough", unit: "for frying" },
  ],
  body: {
    steps: [
      "Cook rice and allow to cool completely.",
      "Mix cooled rice with red curry paste, eggs, chopped kaffir lime leaves, salt, sugar, and chicken bouillon.",
      "Form mixture into balls and deep fry until golden and crispy.",
      "Crumble fried rice balls into a large bowl.",
      "Add som moo, scallions, cilantro, lime juice, and fish sauce. Toss gently to combine.",
      "Adjust seasoning to taste before serving.",
    ],
  },
  prepTime: 30,
  cookTime: 30,
};
