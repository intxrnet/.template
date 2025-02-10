import type { NextConfig } from "next";
import { fetchCloudData } from "./assets";

const nextConfig: NextConfig = {
  /* config options here */

  onBuild: async () => {
    try {
      await fetchCloudData();
    } catch (error) {
      console.error("Failed to fetch cloud data:", error);
      // Optionally throw error to fail build
      // throw error;
    }
  },
};

export default nextConfig;
