import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "OLY",
    slug: "oly",
    description: "A second-hand reselling mobile app for Koreans living overseas",
    detailedDescription: "My Korean friend Euro found ",
    problem: "",
    solution: "",
    challenges: "",
    nextSteps: "",
    techStack: ["ReactNative", "Expo", "PostgreSQL"],
    startTime: new Date(Date.UTC(2025, 5, 20)),
    deploymentLink: "https://oly.com",
    sourceCodeLink: "",
    tags: ["ReactNative", "Expo", "PostgreSQL", "Mobile app", "Ecommerce"],
    selected: true,
  },
  {
    title: "MiaoNance",
    slug: "miaoance",
    description: "A smart online notebook for crypto investors",
    detailedDescription:
      "MiaoNance is a personalized financial research platform that combines note-taking with real-time crypto market data. The idea came from watching my mother struggle to track her crypto investments and research across scattered documents and websites.",
    problem:
      "Crypto investors face information overload and lack organized tools to track their research, decisions, and portfolio performance. My mother was using slides, bookmarks, and handwritten notes - it was chaotic and inefficient.",
    solution:
      "Built a platform where users can create notes linked to their specific selection of cryptocurrencies, with embedded real-time price data, charts. The interface prioritizes simplicity while providing features like ....",
    challenges:
      "The main challenge was balancing feature richness with simplicity. I had to learn about crypto APIs, implement real-time data streaming, and design an intuitive interface that wouldn't overwhelm non-technical users.",
    nextSteps:
      "Planning to add portfolio tracking and alerting, AI-driven automated summary and insights based on user notes. Also considering mobile app development.",
    techStack: ["React", "Next.js", "PostgreSQL"],
    startTime: new Date(Date.UTC(2025, 5, 30)),
    deploymentLink: "https://MiaoNance.com/",
    sourceCodeLink: "https://github.com/ZichengLiang/MiaoNance",
    tags: ["Notebook", "Crypto","Fintech"],
    selected: true,
  },
  {
    title: "BeatBot",
    slug: "beatbot",
    description: "An AI-agentic music generation platform",
    detailedDescription:
      "BeatBot is an AI-agentic music composition platform that uses multiple AI agents working together to understand the user intention and create music tracks.",
    problem:
      "Existing music generation models often involves training large models which can be computationally expensive and time-consuming. With the power of AI agents, we are exploring the potential of LLMs for music generation.",
    solution:
      "Implemented an agentic workflow using LangGraph where multiple specialised AI agents collaborate to generate music tracks. The output is in ABC notation which is pure text, we integrated into a real-time renderer to allow the user to preview and edit the generated music, which is a more human-centered approach for human-computer collaboration.",
    challenges:
      "There are a lot of challenges in this project, but the biggest one is: agentic AI music generation is a new field with limited research and resources available, we have to come up with creative solutions.\n\nPlease refer to the article The Evolution of Our Agent Architecture for more details.\n\n I never deployed a web app before, so I had to learn how to deploy a web app too.\n\n Please refer to the article From Localhost to Cloud Deployment for more details.",
    techStack: ["Flask", "React", "LangGraph", "Docker", "AWS ECR/ECS"],
    startTime: new Date(Date.UTC(2025, 0, 26)),
    endTime: new Date(Date.UTC(2025, 3, 15)),
    deploymentLink: "https://beat-bot-deployment.vercel.app/",
    sourceCodeLink: "https://github.com/ZichengLiang/BeatBot_Deployment",
    tags: ["AI agents", "Music", "Web App", "IBM"],
    selected: true,
    contentPath: "beatbot.mdx",
    articles: [
      {
        id: "agent-architecture",
        title: "The Evolution of Our Agent Architecture",
        description: "Why is it better than simply asking ChatGPT?",
        slug: "agent-architecture"
      },
      {
        id: "deployment-journey", 
        title: "From Localhost to Cloud Deployment",
        description: "Lessons learned deploying AI applications to cloud platforms",
        slug: "deployment-journey"
      },
      {
        id: "music-generation-ai",
        title: "A Literature Review on AI Music Generation",
        description: "I read the papers, why not write a literature review?",
        slug: "music-generation-ai"
      }
    ],
  },
  {
    title: "AURA",
    slug: "aura",
    description: "A web app for work efficiency evaluation",
    detailedDescription:
      "AURA is a productivity analytics platform that uses computer vision and AI to help users understand and improve their work patterns. It analyzes focus levels, break patterns, and provides personalized productivity insights.",
    problem:
      "Remote workers and students struggle to maintain productivity and understand their work patterns. Traditional time-tracking tools only capture duration, not the quality of focus or optimal work conditions.",
    solution:
      "Built a comprehensive system using Azure Face API for attention detection, OpenAI for pattern analysis, and a clean dashboard for insights. The system respects privacy while providing valuable productivity metrics.",
    challenges:
      "Privacy concerns were paramount - had to ensure all facial recognition data was processed securely and not stored. Integrating multiple Azure services while maintaining performance was technically challenging.",
    nextSteps:
      "Adding team collaboration features and developing mobile companion app for productivity tracking on-the-go.",
    techStack: [
      "Next.js",
      "Prisma",
      "AzurePostgreSQL",
      "AzureOpenAI",
      "AzureFaceAPI",
    ],
    startTime: new Date(Date.UTC(2025, 3, 15)),
    endTime: new Date(Date.UTC(2025, 4, 18)),
    deploymentLink: "https://aura-one-navy.vercel.app/",
    sourceCodeLink: "https://github.com/eurobin39/AURA",
    tags: ["Microsoft Azure Hackathon", "Next.js", "Prisma", "PostgreSQL"],
    selected: false,
  },
  {
    title: "ConvoAI",
    slug: "convoai",
    description: "A web app for AI-powered conversations for English learners",
    detailedDescription:
      "ConvoAI provides personalized English conversation practice through AI-powered chatbots that adapt to different proficiency levels and learning goals.",
    problem:
      "English language learners often lack opportunities for natural conversation practice, especially outside of formal classroom settings. Existing language apps focus on vocabulary and grammar but don't provide realistic conversation scenarios.",
    solution:
      "Created an AI conversation partner that adapts to user skill level, provides contextual corrections, and creates engaging scenarios for practice. The AI maintains conversation flow while subtly correcting errors.",
    challenges:
      "This was a hackathon project with a 24-hour deadline, so the main challenge was rapid prototyping and feature prioritization. Had to quickly integrate OpenAI API and create a responsive interface.",
    nextSteps:
      "Adding voice conversation features, more conversation scenarios, and progress tracking capabilities.",
    techStack: ["Next.js", "OpenAI API"],
    startTime: new Date(Date.UTC(2025, 2, 26)),
    endTime: new Date(Date.UTC(2025, 2, 27)),
    sourceCodeLink: "https://github.com/favourhaya/group39",
    selected: false,
  },
];
