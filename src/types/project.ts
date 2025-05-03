export interface Project {
  // Project title
  title: string;
  // Project description
  description: string;
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
}
