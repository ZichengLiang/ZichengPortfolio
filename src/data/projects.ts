import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "MiaoNance",
    description: "A smart notebook for crypto investors (like my mom)",
    techStack: ["React", "Next.js"],
    startTime: new Date(Date.UTC(2025, 5, 30)),
    deploymentLink: "https://MiaoNance.com/",
    sourceCodeLink: "https://github.com/ZichengLiang/MiaoNance",
    tags: ["Notebook"],
    selected: true,
  },
  {
    title: "BeatBot",
    description: "An AI-agentic music generation web app",
    techStack: ["Flask", "React", "LangGraph", "Docker", "AWS ECR/ECS"],
    startTime: new Date(Date.UTC(2025, 1, 26)),
    endTime: new Date(Date.UTC(2025, 4, 15)),
    deploymentLink: "https://beat-bot-deployment.vercel.app/",
    sourceCodeLink: "https://github.com/ZichengLiang/BeatBot_Deployment",
    tags: ["AI agents", "Music", "Web App", "IBM"],
    selected: true,
  },
  {
    title: "AURA",
    description: "A web app for work efficiency evaluation",
    techStack: ["Next.js", "Prisma", "AzurePostgreSQL", "AzureOpenAI", "AzureFaceAPI"],
    startTime: new Date(Date.UTC(2025, 3, 15)),
    endTime: new Date(Date.UTC(2025, 4, 18)),
    deploymentLink: "https://aura-one-navy.vercel.app/",
    sourceCodeLink: "https://github.com/eurobin39/AURA",
    tags: ["Microsoft Azure Hackathon", "Next.js", "Prisma", "PostgreSQL", ],
    selected: false,
  },
  {
    title: "ConvoAI",
    description: "A web app for AI-powered conversations for English learners",
    techStack: ["Next.js", "OpenAI API"],
    startTime: new Date(Date.UTC(2025, 2, 26)),
    endTime: new Date(Date.UTC(2025, 2, 27)),
    sourceCodeLink: "https://github.com/favourhaya/group39",
    selected: false,
  }
];