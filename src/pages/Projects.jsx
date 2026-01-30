import Footer from "../components/footer";
import ProjectCard from "../components/Project-cards";
import Button from "../components/Button";

 function Projects() {
  // Later you can move this into a separate file e.g. src/data/projects.js
  const projects = [
    {
      slug: "website-redesign",
      title: "Website Redesign",
      type: "Web Development",
      summary:
        "A modern, responsive business website built to improve credibility and increase client inquiries.",
      tags: ["React", "Tailwind", "Vite"],
      image:  "/images/food website.jpg"
    },
    {
      slug: "conversion-landing-page",
      title: "High-Converting Landing Page",
      type: "Web Development",
      summary:
        "A focused landing page designed for clarity, speed, and conversion-driven user journeys.",
      tags: ["React", "Tailwind", "Performance"],
      image: "./images/food website.jpg",
    },
    {
      slug: "staff-onboarding-training",
      title: "Staff Onboarding Training Program",
      type: "Instructional Design",
      summary:
        "A structured onboarding program designed for better performance.",
      tags: ["ADDIE", "Backward Design", "Assessment"],
      image: "/images/onboarding.png",
    },
    {
      slug: "course-design-blueprint",
      title: "Course Design Blueprint",
      type: "Instructional Design",
      summary:
        "A complete course plan with objectives, learning materials, and evaluation strategy.",
      tags: ["Needs Analysis", "Evaluation", "SAM"],
      image: "./images/course.jpg",
    },
       {
      slug: "website-redesign",
      title: "Website Redesign",
      type: "Web Development",
      summary:
        "A modern, responsive business website built to improve credibility and increase client inquiries.",
      tags: ["React", "Tailwind", "Vite"],
      image:  "/images/food website.jpg"
    },
       {
      slug: "staff-onboarding-training",
      title: "Staff Onboarding Training Program",
      type: "Instructional Design",
      summary:
        "A structured onboarding program designed for better performance.",
      tags: ["ADDIE", "Backward Design", "Assessment"],
      image: "/images/onboarding.png",
    },
    
  ];

  return (
    <main className="min-h-screen bg-green-900 text-white">

      {/* HERO*/}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl shadow-2xl px-8 py-12 md:px-14 md:py-16 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
            Projects
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            View Some of Our Project
          </h1>

          <p className="mt-5 mx-auto max-w-2xl text-white/80 leading-relaxed">
            A snapshot of projects across Web Development and Instructional
            Design, built with clarity, structure, and outcomes in mind.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button text="Book a Call" />
            <Button text="View Services" variant="secondary" />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Project Highlights
            </h2>
           
          </div>

          {/* filter  (static for now) */}
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2 border border-white/10">
              All
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10 text-white/80">
              Web
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10 text-white/80">
              Instructional Design
            </span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.slug} data-aos="fade-up">
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
export default Projects