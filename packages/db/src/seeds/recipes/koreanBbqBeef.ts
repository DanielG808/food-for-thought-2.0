import { SeedRecipe } from "../utils/recipes";

export const koreanBbqBeef: SeedRecipe = {
  title: "Slow Cooker Korean BBQ Beef",
  description:
    "Lean skirt steak slow-cooked with gochujang, soy, mirin, and honey; finished with oyster sauce and toasted sesame oil.",
  ingredients: [
    {
      name: "Skirt steak",
      amount: "1360",
      unit: "g",
      notes: "≈48 oz, exterior fat trimmed lean",
    },
    { name: "Soy sauce", amount: "5", unit: "tbsp" },
    { name: "Gochujang", amount: "3", unit: "tbsp" },
    { name: "Mirin", amount: "3", unit: "tbsp" },
    { name: "Honey", amount: "2", unit: "tbsp" },
    { name: "Garlic purée", amount: "2", unit: "tbsp" },
    { name: "Ginger purée", amount: "1", unit: "tbsp" },
    { name: "Black pepper", amount: "to", unit: "taste" },

    // Finish after cooking
    {
      name: "Oyster sauce",
      amount: "4",
      unit: "tbsp",
      notes: "add after cooking",
    },
    {
      name: "Toasted sesame oil",
      amount: "2",
      unit: "tbsp",
      notes: "add after cooking",
    },
  ],
  body: {
    steps: [
      "Place steak in slow cooker with soy sauce, gochujang, mirin, honey, garlic, ginger, and black pepper.",
      "Cook on Low about 6 hours (or until tender).",
      "Shred or slice the beef. Stir in oyster sauce and toasted sesame oil after cooking for best flavor.",
      "Serve with rice and sliced scallions or as meal prep portions.",
    ],
  },
  prepTime: 15,
  cookTime: 360,
};
