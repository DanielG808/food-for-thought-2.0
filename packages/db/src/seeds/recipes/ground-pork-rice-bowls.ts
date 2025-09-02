import { SeedRecipe } from "../utils/recipes";

export const groundPorkRiceBowls: SeedRecipe = {
  title: "Hoison Sriracha Ground Pork Rice Bowls",
  description:
    "Savory ground pork cooked with hoisin, soy, sesame, and sriracha, served over rice with carrots, scallions, and peanuts.",
  ingredients: [
    { name: "Ground pork", amount: "454", unit: "g", notes: "1 pound" },
    { name: "Ginger", amount: "2", unit: "tsp", notes: "grated" },
    { name: "Garlic", amount: "2", unit: "tsp", notes: "minced" },
    { name: "Soy sauce", amount: "15", unit: "ml", notes: "1 Tbsp" },
    { name: "Sesame oil", amount: "15", unit: "ml", notes: "1 Tbsp" },
    { name: "Hoisin sauce", amount: "80", unit: "ml", notes: "1/3 cup" },
    { name: "Sriracha", amount: "10", unit: "ml", notes: "2 tsp" },
    { name: "Water", amount: "30", unit: "ml", notes: "2 Tbsp" },
    { name: "Carrots", amount: "75", unit: "g", notes: "3/4 cup julienned" },
    {
      name: "Scallions (white parts)",
      amount: "1/3",
      unit: "cup",
      notes: "chopped",
    },
    { name: "Peanuts", amount: "1/4", unit: "cup", notes: "chopped" },
    {
      name: "Scallions (green parts)",
      amount: "",
      unit: "",
      notes: "for garnish",
    },
    { name: "Basmati rice", amount: "2", unit: "cups", notes: "cooked" },
  ],
  body: {
    steps: [
      "On medium heat, brown the pork until fully cooked and no pink remains.",
      "In a small bowl, combine the ginger, garlic, sesame oil, soy sauce, hoisin sauce, sriracha, and water. Whisk to combine the sauce until all incorporated.",
      "In the final couple minutes of cooking, add in the carrots, white parts of the scallions, and the sauce to the pan. Cook until heated. The sauce will be absorbed. Remove from heat.",
      "Garnish with peanuts and green parts of scallions.",
      "For meal prep bowls: distribute the pork evenly into containers. Add 1/2 cup cooked rice to each bowl. Refrigerate up to 4 days, or freeze up to 3 months.",
      "To reheat: Allow the meal to thaw overnight in the fridge, and microwave for 2 minutes until warm throughout.",
    ],
  },
  prepTime: 5,
  cookTime: 10,
};
