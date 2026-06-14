"use client";

import { useState } from "react";
import { PublicationEntry } from "@/components/publication-entry";
import { ExperienceEntry } from "@/components/experience-entry";
import { AwardEntry } from "@/components/award-entry";
import type { Publication } from "@/data/publication";
import type { Experience } from "@/data/experience";
import type { Award } from "@/data/awards";

type Tab = "publications" | "awards" | "experience";

interface TabbedSectionProps {
  publicationData: Publication[];
  awardsData: Award[];
  experienceData: Experience[];
}

export function TabbedSection({
  publicationData,
  awardsData,
  experienceData,
}: TabbedSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>("publications");

  const tabs: { id: Tab; label: string }[] = [
    { id: "publications", label: "Publications" },
    { id: "awards", label: "Awards" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <div>
      {/* Tab Headers */}
      <div className="hidden md:block sticky top-0 z-20 h-24 -mb-24 bg-[#FFFEF8] pointer-events-none" />
      <div className="sticky top-0 md:top-24 z-30 bg-[#FFFEF8] flex gap-2 mb-8 py-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 rounded-full text-sm tracking-wide uppercase transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-zinc-500 text-white font-medium"
                : "text-zinc-500 hover:bg-zinc-500 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "publications" && publicationData.length > 0 && (
        <div className="space-y-6">
          {publicationData.map((publication, index) => (
            <div key={index}>
              <PublicationEntry publication={publication} />
              {index < publicationData.length - 1 && (
                <div className="h-px bg-zinc-200 my-4" />
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === "awards" && awardsData.length > 0 && (
        <div className="space-y-12">
          {awardsData.map((award, index) => (
            <AwardEntry key={index} award={award} />
          ))}
        </div>
      )}

      {activeTab === "experience" && experienceData.length > 0 && (
        <div className="space-y-12">
          {experienceData.map((experience, index) => (
            <ExperienceEntry key={index} experience={experience} />
          ))}
        </div>
      )}
    </div>
  );
}
