"use client";

import Body from "../../../../components/Foo/docs/index.mdx";

export default function Page(props: any) {
  return (
    <main>
      Component {props.params.component}
      <Body />
    </main>
  );
}
