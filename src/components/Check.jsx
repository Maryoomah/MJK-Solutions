import { Check } from "lucide-react";

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="w-5 h-5 text-green-500 mt-1 font-extrabold" />
      <span>{children}</span>
    </li>
  );
}
export default CheckItem;
