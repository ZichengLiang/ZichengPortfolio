import React from 'react';
import RoadSign from './RoadSign';
import Link from 'next/link';


export default function SideBar() {
    return (
        <header className="lg:sticky lg:top-0 flex max-h-screen w-[48%] flex-col justify-between py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Zicheng Liang</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Student</h2>
                <p className="mt-4 max-w-xs leading-normal">I want to build reliable, functional, and pretty apps.</p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {RoadSign("About")}
                        {RoadSign("Activities")}
                        {RoadSign("Projects")}
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social Media">
                <li className="mr-5 shrink-0 text-xs">
                    <a className="block hover:test-slate-200" href="https://github.com/ZichengLiang" target="blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                        <span className="sr-only">GitHub</span>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className="h-6 w-6" aria-hidden="true"></svg>
                    </a>
                </li>
            </ul>
        </header>
    )
}

