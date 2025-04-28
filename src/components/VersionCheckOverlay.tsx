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
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Lighten the dark overlay
        color: "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999, // Ensure the overlay is above all other content
        padding: "40px 20px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <div
        style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "bold" }}
      >
        A new version of this page is available
      </div>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Refresh now to view the latest updates and features.
      </p>
      <button
        onClick={handleReload}
        style={{
          padding: "12px 30px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#0056b3")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#007bff")
        }
      >
        Refresh Page
      </button>
    </div>
  );
};

export default VersionCheckOverlay;
