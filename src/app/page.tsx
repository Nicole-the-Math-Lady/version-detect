"use client";
import React, { useEffect, useState } from "react";

const MyPage = () => {
  const [isNewVersion, setIsNewVersion] = useState(false);

  useEffect(() => {
    // Fetch the version from the API
    const fetchVersion = async () => {
      try {
        const response = await fetch("/api/version");
        const data: { success: boolean; version: string } =
          await response.json();

        // Compare the fetched version with the build ID
        if (data.version !== process.env.NEXT_PUBLIC_BUILD_ID) {
          setIsNewVersion(true);
        }
      } catch (error) {
        console.error("Failed to fetch version:", error);
      }
    };

    fetchVersion();
  }, []);

  return (
    <div>
      <h1>Build ID: {process.env.NEXT_PUBLIC_BUILD_ID}</h1>
      <p>hello</p>

      {isNewVersion && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            marginTop: "20px",
          }}
        >
          <p>A new version is available! Please reload the page to continue.</p>
        </div>
      )}
    </div>
  );
};

export default MyPage;
