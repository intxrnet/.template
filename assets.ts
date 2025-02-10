import * as fs from "fs";
import * as path from "path";
import * as https from "https";

export async function fetchCloudData(): Promise<void> {
  // Get project name from current directory
  const projectName = require("./package.json").name;

  // Create directory if it doesn't exist
  const contentDir = path.join(process.cwd(), "src", "app", "components");
  fs.mkdirSync(contentDir, { recursive: true });

  // Fetch data from API
  const url = `https://www.intxr.net/api/clouddata/${projectName}`;

  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            // Parse and format JSON data
            const jsonData = JSON.stringify(JSON.parse(data), null, 2);

            // Write to content.json
            const filePath = path.join(contentDir, "content.json");
            fs.writeFileSync(filePath, jsonData);

            console.log("Successfully fetched and saved data to content.json");
            resolve();
          } catch (error) {
            console.error("Error processing data:", error);
            reject(error);
          }
        });
      })
      .on("error", (error) => {
        console.error("Error fetching data:", error);
        reject(error);
      });
  });
}

// Allow running directly or as a module
if (require.main === module) {
  fetchCloudData().catch(console.error);
}
