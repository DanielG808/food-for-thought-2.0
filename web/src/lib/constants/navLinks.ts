export const navLinks = (userId: string) => [
  {
    path: `/recipes?user=${userId}`,
    name: "My Recipes",
  },
  {
    path: "/account",
    name: "My Account",
  },
];
