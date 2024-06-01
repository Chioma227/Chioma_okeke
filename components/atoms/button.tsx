import clsx from "clsx";
import { ReactComponentElement } from "react";
import {  eventNoArg } from "@/types/events.types";
import { ButtonVariant } from "@/variants/rootVariants";

interface BProps {
  className?: string;
  onClick?: eventNoArg;
  variant: ButtonVariant;
  children: string | ReactComponentElement<any, any>[];
}

let style = "text-white";
const { DEFAULT } = ButtonVariant;

const Button = ({ variant, children, className, onClick }: BProps) => {
  switch (variant) {
    case DEFAULT:
      className = clsx(style, className, "button");
      break;
    default:
      break;
  }
  return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
