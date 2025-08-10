# Zicheng Liang Portfolio - Repository Summary

## Overview
This is a modern personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The site showcases Zicheng's projects, activities, and professional experience with a focus on demonstrating problem-solving approach and technical storytelling.

## Architecture & Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router (Pages Router implementation)
- **React 19** - Latest React version with modern hooks and features
- **TypeScript** - Type-safe development with strict typing
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **MDX Integration** - Rich markdown content with @next/mdx and next-mdx-remote

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── EventCard.tsx   # Activity/event display cards
│   ├── Main.tsx        # Homepage main content area
│   ├── ProjectCard.tsx # Project showcase cards with hover effects
│   ├── RoadSign.tsx    # Navigation anchor links with smooth scrolling
│   └── SideBar.tsx     # Left navigation sidebar with social links
├── data/               # Static data sources
│   ├── events.ts       # Activities and events data
│   └── projects.ts     # Project portfolio data with detailed case studies
├── lib/                # Utility functions
│   └── mdx.ts          # MDX content processing utilities
├── pages/              # Next.js routing structure
│   ├── _app.tsx        # App configuration
│   ├── cv.tsx          # CV/Resume PDF viewer
│   ├── index.tsx       # Homepage layout
│   ├── projects.tsx    # Project archive page
│   ├── projects/[slug].tsx # Dynamic project detail pages
│   └── projects/[slug]/[articleSlug].tsx # Article pages for project deep-dives
├── styles/             
│   └── globals.css     # Global styles with smooth scroll behavior
└── types/              # TypeScript interfaces
    ├── event.ts        # Event data structure
    └── project.ts      # Project data structure with case study fields

content/                # MDX content files
├── articles/           # Article content organized by project
│   └── beatbot/       # BeatBot project articles
│       ├── agent-architecture.mdx
│       ├── deployment-journey.mdx
│       └── music-generation-ai.mdx
└── projects/          # Project-level MDX content
    └── beatbot.mdx    # BeatBot main project content
```

## Key Features Implemented

### 1. **Dynamic Project Detail Pages with MDX Support**
- **Route Structure**: `/projects/[slug]` for individual project pages
- **Static Generation**: Pre-rendered at build time using `getStaticProps` and `getStaticPaths`
- **Hybrid Content System**: Projects can use either structured data or rich MDX content
  - Traditional structured fields (problem, solution, challenges, etc.)
  - Rich MDX content for detailed technical documentation
  - Combined approach with both structured data AND MDX enhancement
- **Two-Column Layout**: Main content (3/4 width) + articles sidebar (1/4 width)
- **Comprehensive Content**: Each project includes:
  - Problem statement and context
  - Solution approach and technical decisions
  - Tech stack visualization (moved to main content area)
  - MDX content section (if available)
  - Challenges faced and lessons learned
  - Next steps and future improvements
  - Timeline with start/end dates
  - Links to live demos and source code

### 2. **Professional Card Design System**
- **Modern Glassmorphic Design**: Semi-transparent backgrounds with subtle gradients
- **Consistent Heights**: Flexbox layout ensures uniform card heights in grid
- **Interactive Animations**: Smooth hover effects with color transitions and shadow glows
- **Smart Content Management**: 
  - Tech stack tags with overflow handling ("+X more" for long lists)
  - Text truncation with line-clamp utilities
  - Footer content automatically pushed to bottom

### 3. **Enhanced Navigation System**
- **Anchor Link Navigation**: Sidebar navigation with smooth scrolling to page sections
- **Visual Feedback**: Animated indicators that expand on hover
- **Proper Mapping**: Display text correctly mapped to section IDs
- **Accessibility**: Focus states and keyboard navigation support

### 4. **Article System for Deep Technical Content**
- **Route Structure**: `/projects/[slug]/[articleSlug]` for detailed technical articles
- **MDX-Powered**: Rich markdown content with code syntax highlighting and embedded components
- **Organized Content**: Articles grouped by project for logical navigation
- **Professional Layout**: Clean, readable design optimized for technical writing
- **Navigation Features**:
  - Breadcrumb navigation (Projects → Project → Article)
  - Back-to-project links
  - Related article suggestions
  - Scroll-to-top functionality
- **Project Context**: Each article shows its parent project information and tech stack
- **Content Examples**: BeatBot project includes three comprehensive articles:
  - Multi-Agent Architecture Design (technical deep-dive)
  - From Local to Cloud: Deployment Challenges (DevOps journey)
  - The Science of AI Music Generation (theoretical foundations)

### 5. **Responsive Layout Architecture**
- **Desktop-First Design**: Optimized for large screens with responsive breakpoints
- **Grid System**: CSS Grid for project/event cards with consistent spacing
- **Sidebar Layout**: Fixed sidebar with scrollable main content area
- **Mobile Considerations**: Responsive navigation and card layouts

## Data Management

### Project Data Structure
Each project contains:
```typescript
interface ProjectArticle {
  id: string;                      // Unique article identifier
  title: string;                   // Article title
  description?: string;            // Article description/summary
  slug: string;                    // URL-friendly article identifier
}

interface Project {
  title: string;                   // Project name
  slug: string;                    // URL-friendly identifier
  description: string;             // Brief summary
  detailedDescription?: string;    // Comprehensive overview
  problem?: string;                // Problem being solved
  solution?: string;               // Approach taken
  challenges?: string;             // Obstacles and learnings
  nextSteps?: string;             // Future improvements
  techStack: string[];            // Technologies used
  deploymentLink?: string;        // Live demo URL
  sourceCodeLink?: string;        // GitHub repository
  startTime: Date;                // Project start date
  endTime?: Date;                 // Completion date
  tags?: string[];                // Categorization tags
  selected: boolean;              // Homepage display flag
  contentPath?: string;           // MDX content path (relative to content directory)
  articles?: ProjectArticle[];    // Related articles/reports
}
```

### Current Projects
1. **OLY** - Second-hand reselling platform for Koreans living overseas
2. **MiaoNance** - Crypto investment research platform
3. **BeatBot** - AI-powered music generation with multi-agent workflow (with 3 technical articles)
4. **AURA** - Productivity analytics using computer vision
5. **ConvoAI** - English learning conversation partner

### Article Content Management
Articles are stored as MDX files and organized by project:
- **Location**: `/content/articles/[project-slug]/[article-slug].mdx`
- **Processing**: Handled by `src/lib/mdx.ts` utilities
- **Rendering**: Uses `next-mdx-remote` for server-side compilation
- **Features**: Support for code blocks, embedded components, and rich formatting

### Event Data Structure
Activities and professional events with host information, dates, and categorization.

## Development Commands

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

### Build Output
- **Static Generation**: All project detail pages and articles pre-rendered at build time
- **Article Pages**: 3 BeatBot articles automatically included in static generation
- **Optimized Assets**: Images, CSS, and JavaScript properly bundled
- **Performance**: First Load JS ~97kB for both project and article pages

## Recent Improvements & Fixes

### MDX Article System Implementation (Latest)
- **Article Pages**: Created dynamic routing for `/projects/[slug]/[articleSlug]`
- **Rich Content**: Implemented MDX support for technical writing with code syntax highlighting
- **Content Organization**: Set up structured content directory with articles grouped by project
- **Navigation System**: Added breadcrumb navigation, back links, and related article suggestions
- **Sample Content**: Created 3 comprehensive technical articles for BeatBot project
- **Layout Design**: Professional article layout with project context and scroll-to-top functionality

### Project Detail Page Enhancements
- **Hybrid Content System**: Projects can now use both structured data AND rich MDX content
- **Two-Column Layout**: Redesigned with main content (3/4) + articles sidebar (1/4)
- **Tech Stack Integration**: Moved tech stack display to main content area for better flow
- **Article Integration**: Sidebar shows related articles with interactive links and preview text
- **Scroll Navigation**: Replaced footer "return" buttons with floating scroll-to-top button

### Code Quality and Performance
- **Unused Code Cleanup**: Removed unnecessary React imports (React 17+ JSX transform)
- **Dependency Optimization**: Removed deprecated @tailwindcss/line-clamp plugin
- **Build Optimization**: All article pages pre-rendered at build time for optimal performance
- **Type Safety**: Enhanced TypeScript interfaces for article system

### Previous Improvements
- Fixed anchor link mapping between sidebar navigation and page sections
- Implemented smooth scrolling behavior with CSS scroll-behavior
- Added visual feedback with animated navigation indicators
- Redesigned ProjectCard and EventCard with modern glassmorphic styling
- Fixed height inconsistency issues in grid layouts using flexbox
- Added sophisticated hover effects with gradients and shadows
- Resolved Date serialization issues in getStaticProps

## Design Philosophy

The portfolio emphasizes **process over results**, showcasing:
- **Problem-solving approach**: How challenges are identified and addressed
- **Technical decision-making**: Why specific tools and approaches were chosen  
- **Learning mindset**: What was learned from setbacks and iterations
- **Professional communication**: Clear, concise technical storytelling

## Performance & SEO Considerations

- **Static Site Generation**: Fast loading times with pre-rendered content
- **Optimized Images**: Next.js automatic image optimization
- **Clean URLs**: SEO-friendly routing structure
- **Meta Tags**: Proper page titles and descriptions (ready for implementation)
- **Accessibility**: ARIA labels, keyboard navigation, and focus management

## Future Enhancement Opportunities

1. **Article Expansion**: Add more technical articles to other projects (MiaoNance, AURA, ConvoAI)
2. **Content Features**: 
   - Article search and filtering functionality
   - Article categories and tags system
   - Reading time estimates
   - Article series/sequencing
3. **SEO Optimization**: Implement structured data and meta tags for articles
4. **Performance**: Add lazy loading and bundle optimization
5. **Analytics**: Integrate visitor tracking and performance monitoring
6. **Interactivity**: Add contact forms and project filtering
7. **Visual Assets**: Include project screenshots, demo videos, and technical diagrams in articles
8. **Content Management**: Consider headless CMS for easier article management

## Repository Status
- **Build Status**: ✅ Successfully compiling and generating static assets (13 total pages)
- **Type Safety**: ✅ Full TypeScript coverage with strict typing
- **Code Quality**: ✅ ESLint configured and passing, unused code cleaned up
- **Responsive Design**: ✅ Mobile and desktop layouts functional
- **Navigation**: ✅ All routes working with proper linking (including article routing)
- **Content**: ✅ Comprehensive project case studies, activity listings, and technical articles
- **MDX System**: ✅ Full article system operational with 3 sample technical articles
- **Performance**: ✅ Optimized builds with proper static generation

This portfolio effectively demonstrates both technical capabilities and professional communication skills, serving as a comprehensive showcase of Zicheng's development expertise and problem-solving approach. The new article system adds significant depth for technical storytelling and detailed case studies.