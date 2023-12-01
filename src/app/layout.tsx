"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Page } from "timvir/core";
import "timvir/styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const asPath = usePathname();

  return (
    <html lang="en">
      <body>
        <Page
          toc={[
            {
              label: "Home",
              path: "/",
            },
            {
              label: "Components",
              path: "/components",
              children: [
                {
                  label: "Foo",
                  path: "/components/Foo",
                },
                {
                  label: "Bar",
                  path: "/components/Bar",
                },
                {
                  label: "Baz",
                  path: "/components/Baz",
                },
              ],
            },
          ]}
          location={{ asPath, push() {} }}
          Link={Link}
        >
          {children}
        </Page>
      </body>
    </html>
  );
}
