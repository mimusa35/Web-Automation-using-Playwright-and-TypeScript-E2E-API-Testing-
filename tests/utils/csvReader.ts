import * as fs from "fs";
import { parse } from "csv-parse/sync";

export function readCSV(filePath: string) {
  const csvData = fs.readFileSync(filePath, "utf-8");
  return parse(csvData, { columns: true, skip_empty_lines: true });
}
