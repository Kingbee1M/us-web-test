import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import type { ReactNode, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "border";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  scrollTo?: string;
  to?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showArrow?: boolean;
}

const Button = ({
  children,
  onClick,
  scrollTo,
  to,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  disabled = false,
  showArrow = false,
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    // Navigate if `to` is provided
    if (to) {
      navigate(to, { state: { scrollTo } });
      return;
    }

    // Scroll to element if `scrollTo` is provided
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      element?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Fallback to onClick
    onClick?.();
  };

  const baseClasses =
    "w-auto rounded transition-colors duration-200 focus:outline-none flex items-center gap-0.5";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary-orange hover:bg-hover-orange text-white",
    secondary: "bg-blue-shade text-white",
    tertiary: "bg-white text-blue-shade font-bold",
    border: "text-[#0046be] border-2 border-blue-500 bg-white border-solid",
  };

  const sizes: Record<ButtonSize, string> = {
    small: "py-1 px-3 text-sm",
    medium:
      "xs:py-2 xs:px-3 sm:p-2 lg:py-2.5 lg:px-4 lg:text-base md:text-sm md:px-2 md:py-2",
    large: "py-3 px-6 text-lg",
  };

  return (
    <button
      aria-label="navigate and scroll to the contact form"
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <span className="text-center w-full">{children}</span>
      {showArrow && <FaArrowRight className="ml-2" />}
    </button>
  );
};

export default Button;
