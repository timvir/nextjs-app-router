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
          children: [
            {
              label: "Foo",
              path: "/docs/components/Foo",
            },
            {
              label: "Bar",
              path: "/docs/components/Bar",
            },
            {
              label: "Baz",
              path: "/docs/components/Baz",
            },
          ]
        },
      ]}
      location={{ asPath, push() {} }}
      Link={Link}
    >
      {children}
    </Page>
  );
}
