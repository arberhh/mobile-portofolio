import { useEffect, useState } from "react";
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

export { useAsync, useSystemThemeSync };
