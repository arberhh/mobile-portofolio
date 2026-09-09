import { useEffect, useState } from "react";
import { Platform, useWindowDimensions } from "react-native";
import { WEB_WIDE_BREAKPOINT } from "@/constants";
import useSystemThemeSync from "./use-system-theme-sync";

function useAsync<T>(fetcher: () => Promise<T>, initialValue: T) {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function run() {
      try {
        setData(await fetcher());
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    run();
  }, [fetcher]);

  return { data, loading, error };
}

function useIsWideWeb() {
  const { width } = useWindowDimensions();
  return Platform.OS === "web" && width >= WEB_WIDE_BREAKPOINT;
}

export { useAsync, useSystemThemeSync, useIsWideWeb };
