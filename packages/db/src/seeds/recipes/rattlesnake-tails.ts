import { SeedRecipe } from "../utils/recipes";

export const rattlesnakeTails: SeedRecipe = {
  title: "Rattlesnake Tails",
  description:
    "Creative, smoky, and delicious hot dog bites seasoned with chili spices, smoked on the grill, and finished with a sweet BBQ glaze.",
  ingredients: [
    {
      name: "Hot dogs",
      amount: "16",
      unit: "count",
      notes: "spicy variety recommended",
    },
    { name: "Mustard", amount: "", unit: "", notes: "used as a binder" },
    {
      name: "Hickory Brown Sugar BBQ Sauce",
      amount: "",
      unit: "",
      notes: "for coating",
    },
    { name: "Smoked paprika", amount: "1", unit: "tbsp" },
    { name: "Onion powder", amount: "1", unit: "tbsp" },
    { name: "Garlic powder", amount: "1", unit: "tbsp" },
    {
      name: "Ground dried chili mix",
      amount: "2",
      unit: "tbsp",
      notes: "ancho, guajillo, and pasilla chili",
    },
  ],
  body: {
    steps: [
      "Preheat smoker to 275°F (135°C).",
      "Score hot dogs lengthwise from top to bottom, then side to side, to create the 'rattlesnake tail' look.",
      "Brush hot dogs with mustard to act as a binder. Coat completely in the seasoning mix.",
      "Place hot dogs on the smoker for about 20 minutes until the cuts open up.",
      "Remove and cut into thirds. Place in a cast iron skillet and cover with BBQ sauce.",
      "Return skillet to smoker for about 30 minutes at 300°F (150°C), until sauce thickens and tacks up.",
      "Remove, rest for a few minutes, then serve hot.",
    ],
  },
  prepTime: 15,
  cookTime: 50,
};
