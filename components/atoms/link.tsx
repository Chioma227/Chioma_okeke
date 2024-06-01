"use client"
import Link from "next/link";
import { ReactComponentElement, ReactNode, useState, useEffect } from "react";

interface Lprops {
  href: string;
  children: string | ReactComponentElement<any, any>[] | ReactNode;
  className: string;
}


const AnchorLink = ({ children, className, href }: Lprops) => {

  // const [isActive, setIsActive] = useState<boolean>(false)

  // useEffect(() => {

  // },[isActive])

  return <Link href={href} className={className}>{children}</Link>;
};

export default AnchorLink;
