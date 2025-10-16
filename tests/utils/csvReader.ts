import * as fs from "fs";
import * as path from "path";

export function readCSV(filePath: string): { title: string; price: string }[] {
  const fullPath = path.resolve(filePath);
  const content = fs.readFileSync(fullPath, "utf-8");
  const lines = content.trim().split("\n");
  const headers = lines[0].split(",");
  const rows = lines.slice(1).map(line => {
    const values = line.split(",");
    const row: any = {};
    headers.forEach((h, i) => (row[h.trim()] = values[i].trim()));
    return row as { title: string; price: string };
  });
  return rows;
}
