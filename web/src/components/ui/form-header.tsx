type FormHeaderProps = {
  text: string;
};

export default function FormHeader({ text }: FormHeaderProps) {
  return <h1 className="text-lg text-foreground/45 font-medium">{text}</h1>;
}
