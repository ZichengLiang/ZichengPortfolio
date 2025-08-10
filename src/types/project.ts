export interface ProjectArticle {
  id: string;
  title: string;
  description?: string;
  slug: string;
}

export interface Project {
  // Project title
  title: string;
  // URL slug for routing
  slug: string;
  // Short project description
  description: string;
  // Detailed project description
  detailedDescription?: string;
  // The problem this project solves
  problem?: string;
  // The solution approach
  solution?: string;
  // Challenges faced and learnings
  challenges?: string;
  // Next steps or future improvements
  nextSteps?: string;
  // Project tech stack
  techStack: string[];
  // Project deployment link
  deploymentLink?: string;
  // Project source code link
  sourceCodeLink?: string;
  // Project image
  image?: string;
  // Project start time
  startTime: Date;
  // Project end time
  endTime?: Date;
  // Project tags
  tags?: string[];
  // Selected flag
  selected: boolean;
  // MDX content path (relative to content directory)
  contentPath?: string;
  // Related articles/reports
  articles?: ProjectArticle[];
}
