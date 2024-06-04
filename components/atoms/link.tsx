"use client"
import Link from "next/link";
import { ReactComponentElement, ReactNode,  } from "react";

interface Lprops {
  href: string;
  children: string | ReactComponentElement<any, any>[] | ReactNode;
  className: string;
}


const AnchorLink = ({ children, className, href }: Lprops) => {

  return <Link href={href} className={className}>{children}</Link>;
};

export default AnchorLink;
