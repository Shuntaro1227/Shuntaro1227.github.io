import Image from "next/image";
import { Award } from "@/data/awards";

export function AwardEntry({ award }: { award: Award }) {
    return (
        <div className="grid grid-cols-[15%_85%] gap-6 items-center">
            {/* Left: Logo */}
            <div className="flex items-center justify-center">
                {award.logoUrl && (
                    <div className="w-24 flex items-center justify-center">
                        <Image
                            src={award.logoUrl}
                            alt={award.title}
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
                    {award.date}
                </span>

                <h3 className="text-mb leading-snug">
                    {award.link ? (
                        <a
                            href={award.link}
                            className="hover:text-zinc-600 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {award.title}
                        </a>
                    ) : (
                        award.title
                    )}
                </h3>

                {award.description && (
                    <p className="text-sm text-zinc-700 mb-2">
                        {award.description}
                    </p>
                )}
            </div>
        </div>
    );
}
