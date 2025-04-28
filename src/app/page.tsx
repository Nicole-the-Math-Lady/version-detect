"use client";
import React, { useEffect, useState } from "react";

const MyPage = () => {
  const [isNewVersion, setIsNewVersion] = useState(false);

  useEffect(() => {
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

    // Fetch the version immediately on mount
    fetchVersion();

    // Set an interval to call the API every 5 seconds
    const intervalId = setInterval(() => {
      fetchVersion();
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Build ID: {process.env.NEXT_PUBLIC_BUILD_ID}</h1>
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
          <button
            onClick={handleReload}
            style={{
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </div>
      )}
    </div>
  );
};

export default MyPage;
