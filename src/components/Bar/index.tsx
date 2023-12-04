import * as React from "react";

export function Bar() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      BAR {count}{" "}
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}
