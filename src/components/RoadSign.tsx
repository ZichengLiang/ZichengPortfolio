import React from "react";
import Link from "next/link";

export default function RoadSign(sign: string) {
  // Map display text to actual section IDs
  const getSectionId = (text: string) => {
    switch (text) {
      case "About":
        return "about";
      case "Selected Projects":
        return "projects";
      case "Activities":
        return "activities";
      default:
        return text.toLowerCase().replace(/\s+/g, "-");
    }
  };

  const sectionId = getSectionId(sign);

  return (
    <div>
      <Link 
        className="group flex py-3 items-center hover:text-slate-200 transition-colors duration-200 cursor-pointer" 
        href={`#${sectionId}`}
        scroll={true}
      >
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {sign}
        </span>
      </Link>
    </div>
  );
}
