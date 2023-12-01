"use client";

import Link from "next/link";
import { Page } from "timvir/core";
import "timvir/styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Page toc={[]} location={{ asPath: "", push() {} }} Link={Link}>
      {children}
    </Page>
  );
}
