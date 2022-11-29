"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function Counter() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => router.push("/home")}>Go home</button>
    </div>
  );
}
