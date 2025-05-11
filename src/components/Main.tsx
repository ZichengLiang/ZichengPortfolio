import React from "react";
import { bio } from "../data/bios";

export default function Main() {
  return (
    <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
      <section id="about">
        <p>
          Welcome to my website, here I’m not trying to impress with flashy stacks or big claims. Instead, I want this space to reflect how I think, how I work, and how I learn.
        </p>
        <br />
        <p>
          Much of what I share here begins with a question or a moment of friction—and takes shape through isolating problems, testing ideas, and learning from the missteps along the way.
        </p>
        <br />
        <p>
          For example, you'll find how I approached building an agentic music generation workflow — what worked, what didn’t, and how I refined it over time. Or how I designed MiaoNance, a smart notebook that weaves together personal research and live crypto market data, inspired by the needs of investors like my mother.
        </p>
        <br/>
        <p>
         My hope is that, as you explore this site, you’ll get a sense of how I work—with care, adaptability, and a steady sense of ownership over the things I build. 
        </p>
      </section>
      <br/>
      <section id="activities">
        <p>Activities...</p>
      </section>
      <section id="projects">
        <p>Selected projects...</p>
      </section>
    </main>
  );
}
