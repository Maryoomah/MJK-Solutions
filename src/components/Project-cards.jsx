import { Link } from "react-router-dom";

 function ProjectCard({
  slug,
  title,
  summary,
  type, // "Web Development" | "Instructional Design" | etc
  tags = [],
  image, // optional: "/images/project.png" or imported image
}) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg transition hover:-translate-y-1 hover:bg-white/15"
    >
      {/* Image / placeholder */}
      <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-black/20">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-44 items-center justify-center text-sm text-white/60">
            Project preview
          </div>
        )}
      </div>

      {/* Type pill */}
      {type ? (
        <span className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/80">
          {type}
        </span>
      ) : null}

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>

      {/* Summary */}
      <p className="mt-2 text-sm leading-relaxed text-white/80">{summary}</p>

      {/* Tags */}
      {tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {/* CTA */}
      <div className="mt-6 text-sm font-semibold text-green-200">
        View case study <span className="transition group-hover:translate-x-1 inline-block">→</span>
      </div>
    </Link>
  );
}
export default ProjectCard