"use client";
import React from "react";
import { RefreshCw } from "lucide-react";
import { useVersion } from "@/context/VersionContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const VersionCheckOverlay = () => {
  const { isNewVersion } = useVersion();

  const handleReload = () => {
    window.location.reload();
  };

  if (!isNewVersion) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        className="bg-white rounded-lg max-w-md w-full p-8 shadow-lg border border-gray-200"
      >
        <div className="flex flex-col items-center text-center gap-6">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
            <RefreshCw className="h-8 w-8 text-blue-500 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              New Version Available
            </h2>
            <p className="text-gray-600">
              We’ve made some improvements! Refresh now to experience the latest
              features and updates.
            </p>
          </div>

          <Button
            onClick={handleReload}
            className="w-full rounded-lg bg-[#0000FF] px-3.5 py-2 text-center text-sm font-bold text-[#ffffff] hover:bg-opacity-80"
          >
            <RefreshCw className="mr-2 h-5 w-5" /> Update Now
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VersionCheckOverlay;
