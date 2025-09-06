import ShareButton from "./share-button";

type RecipePageHeaderProps = {
  title: string;
  description: string;
};

export default function RecipePageHeader({
  title,
  description,
}: RecipePageHeaderProps) {
  return (
    <header className="flex justify-between">
      <div className="flex flex-col w-[600px]">
        <h1 className="whitespace-nowrap flex flex-col text-3xl underline">
          {title}
        </h1>
        <h2 className="mt-4 text-lg text-foreground/55">{description}</h2>
      </div>
      <ShareButton />
    </header>
  );
}
