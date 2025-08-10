import { Event } from "../types/event";

export const events: Event[] = [
  {
    title: "Google Code Retreat",
    description: "Google organised Code Retreat",
    host: "Google Dublin Office",
    date: new Date(Date.UTC(2025, 3, 25)),
    type: "Code Retreat",
    selected: true,
  },
  {
    title: "IrlCPC 2025",
    description: "Ireland's Collegiate Competitive Programming Contest",
    host: "UCC ACM Student Chapter",
    date: new Date(Date.UTC(2025, 2, 1)),
    type: "Programming Competition",
    selected: true,
  },
  {
    title: "Microsoft Azure Hackathon",
    description: "Hackathon featuring Microsoft Azure services",
    host: "Microsoft",
    date: new Date(Date.UTC(2025, 2, 14)),
    type: "Hackathon",
    selected: true,
  },
  {
    title: "HackIreland 2025",
    description: "Ireland's Biggest Hackathon",
    host: "HackIreland",
    date: new Date(Date.UTC(2025, 1, 24)),
    type: "Hackathon",
    selected: true,
  },
  {
    title: "HackTrinity",
    description: "Hackathon featuring the application of AI in legal services",
    host: "Trinity College Dublin",
    date: new Date(Date.UTC(2024, 9, 11)),
    type: "Hackathon",
    selected: true,
  },
];
