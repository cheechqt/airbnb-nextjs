import { useEffect, useState } from "react";
import { debounce } from "./debounce";

interface Size {
  width: number;
  height: number;
}

export const useWindowSize = (): Size => {
  const isSSR = typeof window !== undefined;

  const [size, setSize] = useState<Size>({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", debounce(handleResize));

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
