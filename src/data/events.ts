import { Event } from "../types/event";

export const events: Event[] = [
  {
    title: "Google Code Retreat",
    description: "Google organised Code Retreat",
    host: "Google Dublin Office",
    date: new Date(Date.UTC(2025, 4, 25)),
    type: "Code Retreat",
    selected: true,
  },
  {
    title: "IrlCPC 2025",
    description: "Ireland's Collegiate Competitive Programming Contest",
    host: "UCC ACM Student Chapter",
    date: new Date(Date.UTC(2025, 3, 1)),
    type: "Programming Competition",
    selected: true,
  },
  {
    title: "HackIreland 2025",
    description: "Ireland's Biggest Hackathon",
    host: "HackIreland",
    date: new Date(Date.UTC(2025, 2, 24)),
    type: "Hackathon",
    selected: true,
  },
  {
    title: "Microsoft Azure Hackathon",
    description: "Hackathon featuring Microsoft Azure services",
    host: "Microsoft",
    date: new Date(Date.UTC(2025, 3, 14)),
    type: "Hackathon",
    selected: false,
  },
];
