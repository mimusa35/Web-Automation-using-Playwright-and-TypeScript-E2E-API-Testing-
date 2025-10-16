// utils/helpers.ts
import * as fs from "fs";
import { parse } from "csv-parse/sync";

export type ProductRecord = {
  title: string;
  price: string;
};

export function readCSV(filePath: string): ProductRecord[] {
  const csvData = fs.readFileSync(filePath, "utf-8");
  return parse(csvData, { columns: true, skip_empty_lines: true }) as ProductRecord[];
}
