"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import PageTransition from "./PageTransition";
import StairTransition from "./StairTransition";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
