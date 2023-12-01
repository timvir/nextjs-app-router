"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Page } from "timvir/core";
import "timvir/styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const asPath = usePathname();

  return (
    <Page
      toc={[
        {
          label: "Home",
          path: "/docs",
        },
        {
          label: "Components",
          path: "/docs/components",
        },
      ]}
      location={{ asPath, push() {} }}
      Link={Link}
    >
      {children}
    </Page>
  );
}
