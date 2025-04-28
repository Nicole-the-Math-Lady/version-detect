"use client";
import React from "react";
import { useVersion } from "@/context/VersionContext";

const VersionCheckOverlay = () => {
  const { isNewVersion } = useVersion();

  const handleReload = () => {
    window.location.reload();
  };

  if (!isNewVersion) return null; // Don't show the overlay if no new version is detected

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Full-screen dark overlay
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999, // Ensure the overlay is above all other content
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>A new version is available! Please reload the page to continue.</p>
      <button
        onClick={handleReload}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Reload
      </button>
    </div>
  );
};

export default VersionCheckOverlay;
