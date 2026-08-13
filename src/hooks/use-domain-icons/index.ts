import { useEffect, useState } from "react";
import { getDomains } from "@/services";

const useDomainIcons = () => {
  const [domainIcons, setDomainIcons] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const domains = (await getDomains()) || [];
        setDomainIcons(
          Object.fromEntries(
            domains
              .filter((domain) => domain.title && domain.icon)
              .map((domain) => [domain.title as string, domain.icon as string])
          )
        );
      } catch (error: any) {
        console.error({ error });
      }
    };

    fetchDomains();
  }, []);

  return domainIcons;
};

export default useDomainIcons;
