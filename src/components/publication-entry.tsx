import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Publication } from "@/data/publication";
import { aboutMe } from "@/data/aboutme";

function formatAuthors(authors: string, nameToBold: string): React.ReactNode {
  const namesToBold = [nameToBold];
  if (aboutMe.altName) {
    namesToBold.push(aboutMe.altName);
  }

  for (const name of namesToBold) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedName})`, 'g');

    if (regex.test(authors)) {
      const parts = authors.split(new RegExp(`(${escapedName})`));
      return (
        <>
          {parts.map((part, index) =>
            part === name ? (
              <strong key={index} className="font-bold">{part}</strong>
            ) : (
              <span key={index}>{part}</span>
            )
          )}
        </>
      );
    }
  }

  return authors;
}

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {publication.imageUrl && (
        <div className="w-full sm:w-[40%] relative rounded-lg">
          <Image
            src={publication.imageUrl}
            alt={publication.title}
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-lg transition-all duration-300 p-2"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-4 items-center mb-2">
          {publication.conference && (
            <div className="group flex px-2 py-1 rounded-md items-center shadow border border-rose-100 relative overflow-hidden hover:rotate-1 transition-all duration-300">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              <p className="text-xs text-amber-700 font-medium relative">
                {publication.conference} {publication.year}
              </p>
            </div>
          )}
        </div>
        <h3 className="text-md mb-3">{publication.title}</h3>
        <p className="text-sm text-zinc-600 mb-4">
          {formatAuthors(publication.authors, aboutMe.name)}
        </p>
        <div className="flex flex-row items-center gap-2">
          {publication.paperUrl && (
            <>
              <a
                href={publication.paperUrl}
                className="text-sm text-zinc-600 hover:text-blue-600 hover:underline transition-all duration-300"
              >
                Paper
              </a>
              {(publication.codeUrl || publication.projectPageUrl) && <span className="text-sm text-zinc-400">|</span>}
            </>
          )}
          {publication.codeUrl && (
            <>
              <a
                href={publication.codeUrl}
                className="text-sm text-zinc-600 hover:text-blue-600 hover:underline transition-all duration-300"
              >
                Code
              </a>
              {publication.projectPageUrl && <span className="text-sm text-zinc-400">|</span>}
            </>
          )}
          {publication.projectPageUrl && (
            <>
              <a
                href={publication.projectPageUrl}
                className="text-sm text-zinc-600 hover:text-blue-600 hover:underline transition-all duration-300"
              >
                Project Page
              </a>
              {publication.bibtex && <span className="text-sm text-zinc-400">|</span>}
            </>
          )}
          {publication.bibtex && (
            <a
              href={publication.bibtex}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">BibTeX</span>
            </a>
          )}
        </div>
        {publication.tldr && (
          <p className="text-sm italic text-zinc-600 mt-4">
            {publication.tldr}
          </p>
        )}
      </div>
    </div>
  );
}
