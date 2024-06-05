import { containerVariants } from "@/variants/rootVariants";
import clsx from "clsx";
import { ReactComponentElement, ReactNode } from "react";

interface CProps {
  variant: containerVariants;
  className?: string;
  children: string | ReactComponentElement<any, any>[] | ReactNode;
}

const { GRID, PFLEXED, FLEX, FLEXED, FLEX_BTWN, FLEX_COL, FLEX_START, MIN_WIDTH, MAIN} = containerVariants;

let style = "";

const Container = ({ variant, className, children }: CProps) => {
  switch (variant) {
    case GRID:
      className = clsx(className, "normal");
      break;
    case PFLEXED:
      className = clsx(className, "pflexed");
      break;
    case FLEXED:
      className = clsx(className, "flexed");
      break;
    case FLEX:
      className = clsx(className, "flex");
      break;
    case FLEX_COL:
      className = clsx(className, "flex_col_center");
      break;
    case FLEX_START:
      className = clsx(className, "flex_col_start");
      break;
    case MIN_WIDTH:
      className = clsx(className, "min-width");
      break;
    case FLEX_BTWN:
      className = clsx(className, "flex-btwn");
      break;
    case MAIN:
      className = clsx(className, "md:w-[75%] w-[100%] pl-[20px] pr-[20px] ml-auto mr-auto");
      break;
    default:
      break;
  }

  return <main className={className}>{children}</main>;
};

export default Container;
