import { useState } from "react";
import { setCookie } from "../utils/cookies";
import { Modes } from "../consts";
import { cn } from "../utils/cn";

export type ModeProps = {
  mode?: Modes;
  size?: number;
};

export function ModesToggle({
  mode: modeProps = Modes.LIGHT,
  size = 18,
}: ModeProps) {
  const [mode, setMode] = useState<Modes>(modeProps);

  return (
    <button
      className={cn(
        "flex",
        "items-center",
        "flex-1",
        "gap-2",
        "px-3",
        "rounded-lg",
        "h-9",
        "bg-black/5",
        "dark:bg-white/5",
        "transition-[background]",
        "duration-1000",
      )}
      onClick={() => {
        console.log("on click called....");
        setMode((mode) => {
          const newMode = mode === Modes.LIGHT ? Modes.DARK : Modes.LIGHT;
          setCookie("mode", newMode);
          document.documentElement.classList.remove(mode);
          document.documentElement.classList.add(newMode);

          return newMode;
        });
      }}
    >
      {mode === "dark" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.25 18.709c0-.42.336-.76.75-.76h4c.414 0 .75.34.75.76s-.336.76-.75.76h-4a.755.755 0 0 1-.75-.76m.667 2.532c0-.42.335-.76.75-.76h2.666c.415 0 .75.34.75.76a.754.754 0 0 1-.75.759h-2.666a.755.755 0 0 1-.75-.76"
            clipRule="evenodd"
          ></path>
          <path
            fill="currentColor"
            d="m7.41 13.828l1.105 1.053c.31.295.485.707.485 1.137c0 .647.518 1.172 1.157 1.172h3.686c.639 0 1.157-.525 1.157-1.172c0-.43.176-.842.485-1.137l1.104-1.053c1.542-1.48 2.402-3.425 2.41-5.446L19 8.297C19 4.842 15.866 2 12 2S5 4.842 5 8.297v.085c.009 2.021.87 3.966 2.41 5.446"
          ></path>
        </svg>
      )}

      {mode === "light" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m7.41 13.828l1.105 1.053c.31.295.485.707.485 1.137c0 .647.518 1.172 1.157 1.172h3.686c.639 0 1.157-.525 1.157-1.172c0-.43.176-.842.485-1.137l1.104-1.053c1.542-1.48 2.402-3.425 2.41-5.446L19 8.297C19 4.842 15.866 2 12 2S5 4.842 5 8.297v.085c.009 2.021.87 3.966 2.41 5.446"
            opacity=".5"
          ></path>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.25 18.709c0-.42.336-.76.75-.76h4c.414 0 .75.34.75.76s-.336.76-.75.76h-4a.755.755 0 0 1-.75-.76m.667 2.531c0-.42.335-.76.75-.76h2.666c.415 0 .75.34.75.76s-.335.76-.75.76h-2.666a.755.755 0 0 1-.75-.76"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
}
