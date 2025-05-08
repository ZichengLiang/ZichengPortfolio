import React from "react";
import {bio} from "../data/bios"

export default function Main() {
  return (
    <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
      <section id="about">
        {bio}
      </section>
      <section id="activities">
        <p>
          Activities...
        </p>
      </section>
      <section id="projects">
        <p>
          Selected projects...
          </p>
        </section>
    </main>
  );
}
