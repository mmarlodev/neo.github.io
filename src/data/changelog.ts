export type ChangelogCategory =
  | "New Features"
  | "Improvements"
  | "Bug Fixes"
  | "Experiments"
  | "Announcements";

export interface ChangelogEntry {
  version: string;
  date: string; // ISO date, e.g. "2026-11-21"
  title: string;
  category: ChangelogCategory;
  description: string;
  items?: string[];
}

// Add real release entries here as Neo ships updates.
// Newest entries should be placed at the top of the array.
export const changelog: ChangelogEntry[] = [
  {
    version: "0.0.1",
    date: "2026-11-21",
    title: "Neo website launch",
    category: "Announcements",
    description:
      "The official Neo website is now live — product overview, downloads, and development updates in one place.",
  },
];
