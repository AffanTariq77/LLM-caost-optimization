import React from "react";
import { AlertCircle } from "lucide-react";

const Problem = () => {
  const issues = [
    {
      icon: "📝",
      title: "Long or inflated prompts waste thousands of tokens per query.",
    },
    {
      icon: "🔀",
      title: "Inefficient routing sends simple requests into high cost models.",
    },
    {
      icon: "📦",
      title: "Context bloat and redundant inputs blow up usage logs.",
    },
    {
      icon: "👁️",
      title: "Lack of observability means you don't know where the money goes.",
    },
  ];

  return (
    <section className="py-10 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#192841" }}
          >
            The Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Deploying large language models disruptively drives cost upward when precision and control are missing, and most of that spend is avoidable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-[#F3F9FF] border border-border/40 rounded-lg hover:shadow-sky-blue transition-all duration-300"
            >
              <div className="text-2xl flex-shrink-0">{issue.icon}</div>
              <p className="text-lg text-muted-foreground">{issue.title}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#F3F9FF] border border-border/40 p-8 rounded-lg mt-10 max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            If your monthly LLM invoice is growing while performance stays flat, you're not alone.
          </p>
        </div>

        <p className="text-lg font-semibold text-center mt-6" style={{ color: "#192841" }}>
          Many teams overspend by 40 to 80 percent because of preventable inefficiencies.
        </p>
      </div>
    </section>
  );
};

export default Problem;
