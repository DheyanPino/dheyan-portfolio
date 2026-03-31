import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success" | "yellow";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "bg-indigo-500 text-white hover:bg-indigo-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    yellow: "bg-yellow-400 text-indigo-800 hover:bg-yellow-300",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-2xl",
  };

  return (
    <button
      className={cn(
        "font-extrabold rounded-3xl transition duration-300 transform border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8)] active:shadow-none active:translate-x-1 active:translate-y-1 disabled:bg-gray-400 disabled:shadow-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
