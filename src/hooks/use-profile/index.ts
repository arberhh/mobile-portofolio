import { useEffect, useState } from "react";
import { getProfile } from "@/services";

function useProfile() {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  return { user, loading, error };
}

export default useProfile;
