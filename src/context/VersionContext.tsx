// VersionContext.tsx
"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

import version from "../../public/version.json"; //TODO

interface VersionContextType {
  isNewVersion: boolean;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export const useVersion = () => {
  const context = useContext(VersionContext);
  if (context === undefined) {
    throw new Error("useVersion must be used within a VersionProvider");
  }
  return context;
};

interface VersionProviderProps {
  children: ReactNode;
}

export const VersionProvider: React.FC<VersionProviderProps> = ({
  children,
}) => {
  const [isNewVersion, setIsNewVersion] = useState(false);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch("/version.json");
        const data: { BUILD_ID: string } = await response.json();
        console.log("data", data);
        // Compare the fetched version with the build ID
        if (data.BUILD_ID !== version.BUILD_ID) {
          console.log("data.version", data.BUILD_ID);
          console.log("version.BUILD_ID", version.BUILD_ID);
          setIsNewVersion(true);
        }
      } catch (error) {
        console.error("Failed to fetch version:", error);
      }
    };

    // Fetch the version initially and check every 5 seconds
    fetchVersion();
    const intervalId = setInterval(fetchVersion, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <VersionContext.Provider value={{ isNewVersion }}>
      {children}
    </VersionContext.Provider>
  );
};
