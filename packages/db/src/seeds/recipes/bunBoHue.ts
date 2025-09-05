import { SeedRecipe } from "../utils/recipes";

export const bunBoHue: SeedRecipe = {
  title: "Bún Bò Huế",
  description:
    "A spicy Vietnamese noodle soup with beef shank, lemongrass broth, and aromatic sate.",
  ingredients: [
    // Noodles
    {
      name: "BBH noodles",
      amount: "1",
      unit: "pack",
      notes: "Soak 15–20 min before cooking",
    },

    // Broth base
    { name: "Beef bones", amount: "1.5", unit: "kg" },
    { name: "Beef neck bones", amount: "1", unit: "kg" },
    { name: "Beef shank", amount: "1", unit: "kg" },
    { name: "Onion", amount: "1", unit: "large" },
    { name: "Fuji apple", amount: "1", unit: "whole" },
    { name: "Shallot", amount: "2", unit: "whole" },
    { name: "Garlic", amount: "6", unit: "cloves" },
    { name: "Ginger", amount: "30", unit: "g", notes: "sliced" },
    { name: "Lemongrass", amount: "4", unit: "stalks", notes: "smashed" },
    { name: "Sugar", amount: "2", unit: "tbsp" },
    { name: "Sea salt", amount: "2", unit: "tbsp" },
    { name: "Vegetable bouillon powder", amount: "2", unit: "tbsp" },
    { name: "Fish sauce", amount: "2", unit: "tbsp" },

    // Sate
    { name: "Oil", amount: "2", unit: "tbsp" },
    { name: "Garlic", amount: "1", unit: "head", notes: "minced" },
    { name: "Shallots", amount: "3-4", unit: "large", notes: "minced" },
    {
      name: "Chopped lemongrass",
      amount: "3",
      unit: "tbsp",
      notes: "frozen or fresh",
    },
    { name: "Crushed chili", amount: "2", unit: "tbsp" },
    { name: "Paprika", amount: "2", unit: "tbsp" },
    { name: "Shrimp paste", amount: "1", unit: "tbsp", notes: "optional" },

    // Toppings
    { name: "Cilantro", amount: "1", unit: "bunch" },
    { name: "Scallions", amount: "1", unit: "bunch" },
    { name: "Bean sprouts", amount: "200", unit: "g" },
    { name: "Cabbage", amount: "1/2", unit: "head" },
    { name: "Vietnamese coriander", amount: "1", unit: "bunch" },
    { name: "Lettuce", amount: "1", unit: "head" },
    { name: "Basil", amount: "1", unit: "bunch" },
    { name: "Limes", amount: "2", unit: "whole" },
    { name: "Sliced beef shank", amount: "300", unit: "g" },
    { name: "Vietnamese ham (chả lụa)", amount: "300", unit: "g" },
  ],
  body: {
    steps: [
      "Par-boil beef bones and shank, rinse clean, then add to a large stock pot of water.",
      "Add lemongrass, fish sauce, salt, sugar, vegetable bouillon, and BBH paste to the pot.",
      "Add onion, apple, ginger slices, garlic, and shallots. Simmer for several hours.",
      "Remove the shank before it starts to fall apart; slice thinly for serving.",
      "For sate: heat oil in a pan, sauté garlic and shallots until fragrant. Add chili, chopped lemongrass, paprika, and optional shrimp paste. Cook until aromatic.",
      "Strain the broth, adjust seasoning to taste, and optionally stir in sate.",
      "Cook noodles, prepare vegetables and herbs, and slice meats.",
      "Assemble bowls: noodles first, then beef and ham slices, pour over hot broth, and top with herbs, sprouts, cabbage, and lime. Serve with extra sate if desired.",
    ],
  },
  prepTime: 45,
  cookTime: 240,
};
