import Image from "next/image";
import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-[15%_85%] gap-6 items-center">
      {/* Left: Logo */}
      <div className="flex items-center justify-center">
        {experience.logoUrl && (
          <div className="w-24 flex items-center justify-center">
            <Image
              src={experience.logoUrl}
              alt={experience.company}
              height={300}
              width={400}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-center">
        <span className="text-xs text-zinc-500 mb-1">
          {experience.date}
        </span>

        <h3 className="text-mb leading-snug">
          {experience.title}
        </h3>

        <p className="text-sm text-zinc-700 mb-2">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </p>
      </div>
    </div>
  );
}
