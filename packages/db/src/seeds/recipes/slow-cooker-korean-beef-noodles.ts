import { SeedRecipe } from "../utils/recipes";

export const slowCookerKoreanBeefNoodles: SeedRecipe = {
  title: "Slow Cooker Korean Beef Noodles",
  description:
    "Tender slow-cooked ox cheek in a rich Korean-inspired sauce with udon noodles, sesame seeds, and fresh coriander.",
  ingredients: [
    { name: "Onion", amount: "1", unit: "", notes: "diced" },
    { name: "Garlic ginger paste", amount: "1", unit: "tbsp" },
    { name: "Tomato puree", amount: "1", unit: "tbsp" },
    { name: "Dark soy sauce", amount: "2", unit: "tbsp" },
    { name: "Rice vinegar", amount: "2", unit: "tbsp" },
    { name: "Soft brown sugar", amount: "1", unit: "tbsp" },
    { name: "Gochujang", amount: "2", unit: "tbsp" },
    { name: "Beef stock", amount: "100", unit: "ml" },
    { name: "Ox cheek", amount: "1", unit: "" },
    {
      name: "Udon noodles",
      amount: "4",
      unit: "pouches",
      notes: "ready to wok",
    },
    {
      name: "Fresh cilantro",
      amount: "",
      unit: "",
      notes: "handful, chopped",
    },
    { name: "Black sesame seeds", amount: "1", unit: "tbsp" },
  ],
  body: {
    steps: [
      "Transfer all ingredients except ox cheek into the slow cooker pot and stir well.",
      "Place the ox cheek on top, glaze with the sauce, cover with lid, and cook on low for 8 hours.",
      "Shred the beef once cooked.",
      "Before serving, add udon noodles, sprinkle with black sesame seeds, and garnish with fresh cilantro.",
    ],
  },
  prepTime: 15,
  cookTime: 480,
};
