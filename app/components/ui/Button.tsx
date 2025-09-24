// components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white ${props.className}`}
    >
      {children}
    </button>
  );
};
