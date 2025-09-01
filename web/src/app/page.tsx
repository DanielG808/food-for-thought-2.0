import PageContentWrapper from "@/components/page-content-wrapper";
import { getAllRecipes } from "@/lib/api/recipes";

export default async function Home() {
  const recipes = await getAllRecipes();

  console.log(recipes);

  return <PageContentWrapper>Home Page</PageContentWrapper>;
}
