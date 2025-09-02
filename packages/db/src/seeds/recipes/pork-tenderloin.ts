import { SeedRecipe } from "../utils/recipes";

export const porkTenderloin: SeedRecipe = {
  title: "Oven-Baked Pork Tenderloin",
  description:
    "Juicy oven-baked pork tenderloin coated with a flavorful spice rub, topped with butter, and finished with pan juices.",
  ingredients: [
    {
      name: "Pork tenderloins",
      amount: "2",
      unit: "",
      notes: "about 1 lb each",
    },
    { name: "Brown sugar", amount: "2", unit: "tbsp" },
    { name: "Smoked paprika", amount: "1", unit: "tsp" },
    { name: "Garlic powder", amount: "1", unit: "tsp" },
    { name: "Onion powder", amount: "1", unit: "tsp" },
    { name: "Chili powder", amount: "1", unit: "tsp" },
    { name: "Italian seasoning", amount: "1", unit: "tsp" },
    { name: "Salt", amount: "1", unit: "tsp" },
    { name: "Black pepper", amount: "0.25", unit: "tsp", notes: "or to taste" },
    { name: "Butter", amount: "0.25", unit: "cup", notes: "cut into pats" },
    {
      name: "Chopped parsley",
      amount: "",
      unit: "",
      notes: "optional, to taste",
    },
  ],
  body: {
    steps: [
      "Preheat your oven to 400°F and move the rack to the middle position.",
      "Prep the tenderloins by cutting off any excess fat and the silver skin. Pat the tenderloins dry with paper towel.",
      "In a small bowl, mix together brown sugar, smoked paprika, garlic powder, onion powder, chili powder, Italian seasoning, salt, and pepper. Coat the tenderloins all over with the spice rub.",
      "Place the pork tenderloins in a 9×13 (or similar size) baking dish and place the butter pats on top.",
      "Bake, uncovered, for about 25 minutes or until the pork reaches an internal temperature of 145°F. Let it rest for 5–10 minutes before slicing into medallions.",
      "Pour the pan juices over the pork and sprinkle with chopped parsley if desired.",
    ],
  },
  prepTime: 10,
  cookTime: 25,
};
