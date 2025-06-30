import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const files = [
  {
    name: "Socket.io",
    body: "Socket.IO is a library that enables real-time bidirectional event-based communication between web clients and servers.",
  },
  {
    name: "Next.js",
    body: "Next.js is a React framework that provides features like server-side rendering, static site generation, and API routes for building full-stack web applications.",
  },
  {
    name: "Vercel",
    body: "Vercel is a cloud platform for static sites and serverless functions that fits perfectly with your workflow and enables frontend teams to do their best work.",
  },
  {
    name: "Git",
    body: "Git is a distributed version control system that tracks changes in source code during software development and enables collaboration among developers.",
  },
  {
    name: "Render",
    body: "Render is a cloud platform that provides hosting for web applications, databases, and static sites with automatic deployments from Git repositories.",
  },
  {
    name: "Mongodb",
    body: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents instead of traditional table-based relational database structures.",
  },
  {
    name: "Typescript",
    body: "TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions for better development experience.",
  },
];

const Technology = () => {
  return (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-white">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
  );
};

export default Technology;
