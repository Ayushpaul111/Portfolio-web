"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the Link type
interface Link {
  title: string;
  link: string;
  description?: string;
  category?: string;
  image?: string;
}

// Define the API response type
interface ApiResponse {
  success: boolean;
  data?: Link[];
  error?: string;
}

interface LinksContextType {
  linksData: Link[];
  loading: boolean;
  error: string | null;
  refetchLinks: () => Promise<void>;
}

const LinksContext = createContext<LinksContextType | undefined>(undefined);

interface LinksProviderProps {
  children: ReactNode;
}

export const LinksProvider = ({ children }: LinksProviderProps) => {
  const [linksData, setLinksData] = useState<Link[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_SHEET_URLS;

  const fetchLinks = async () => {
    try {
      // Check if API_URL is defined
      if (!API_URL) {
        throw new Error("API URL is not configured");
      }

      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      if (data.success && Array.isArray(data.data)) {
        setLinksData(data.data);
      } else {
        setError(data.error || "Invalid data format received");
      }
    } catch (err) {
      console.error("Failed to fetch links:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(`Failed to load links: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const value: LinksContextType = {
    linksData,
    loading,
    error,
    refetchLinks: fetchLinks,
  };

  return (
    <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
  );
};

export const useLinks = () => {
  const context = useContext(LinksContext);
  if (context === undefined) {
    throw new Error("useLinks must be used within a LinksProvider");
  }
  return context;
};
