import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-200 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-black font-bold">
                    Hello～ I'm Zicheng Liang😺
                    <br/>
                    Welcome to my space
                </h1>
                <div className="mx-auto flex max-w-2xl">
                    <p className="text-l text-black mt-4">
                        I didn’t begin in computer science—I started in history, drawn by questions more than answers. When I first learned to code, it felt like solving puzzles: make things faster, more efficient. I trained for algorithm competitions and chased performance. But through real-world projects, I’ve been learning that the best code doesn’t just run fast—it listens, adapts, and serves the people.
                        <br />
                        Curiosity is what drives me. I like understanding how things work under the hood—breaking down problems, spotting patterns, finding the structure beneath the mess. In an AI music project, that meant diving into both agentic workflows and the patterns in music theory. In a crypto tool I built for my mom, it meant designing a system that translated complex data into something accurate and intuitive.
                        <br />
                        At Trinity College Dublin, where I study Computer Science, I’ve worked across the stack—from assembly and system architecture to full-stack deployment. But what I value most isn’t any single technology. It’s the habit of thinking rigorously, listening deeply, and building thoughtfully. I often come back to Vitruvius’s triad—firmitas (robustness), utilitas (functionality), and venustas (beauty)—and how it still shapes what good design can be.
                        <br />
                        As I’ve grown, I’ve met many brilliant minds, and I know I’m not always the brightest in the room. There’s still so much I don’t know. But I take pride in being reflective, analytical, and curious. I care about the why as much as the how, and I’m always learning how to build with more clarity, purpose, and care.
                    </p>
                </div>
                <a href="/projects" className="text-blue-500"> Look at my portfolio</a>

            </main>
        </>
    );
}