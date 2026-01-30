function Button({ text, variant = "primary" }) {
  const baseStyle =
    "px-6 py-3 text-lg rounded-lg cursor-pointer transition-all";

  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary:
      "bg-transparent border border-white text-white hover:bg-white hover:text-green-900",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {text}
    </button>
  );
}

export default Button;
