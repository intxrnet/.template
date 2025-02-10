import * as fs from "fs";
import * as path from "path";

export interface PackageInfo {
  name: string;
  description: string;
}

export async function getPackageInfo(): Promise<PackageInfo> {
  const packagePath = path.join(process.cwd(), "package.json");
  try {
    const rawContent = fs.readFileSync(packagePath, "utf-8");
    const packageJson = JSON.parse(rawContent);
    return {
      name: packageJson.name,
      description: packageJson.description || "No description available",
    };
  } catch (error) {
    console.error("Error reading package.json:", error);
    return {
      name: "Unknown",
      description: "Error reading package info",
    };
  }
}
