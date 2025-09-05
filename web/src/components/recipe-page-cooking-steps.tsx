type RecipePageCookingSteps = {
  steps: string[];
};

export default function RecipePageCookingSteps({
  steps,
}: RecipePageCookingSteps) {
  return (
    <div className="my-10">
      <h3 className="text-lg">Cooking steps:</h3>
      <ul className="m-4 list-decimal text-foreground/85">
        {steps.map((step, i) => (
          <li key={`${step}-${i}`}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
