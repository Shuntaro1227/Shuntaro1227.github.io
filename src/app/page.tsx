import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { experienceData } from "@/data/experience";
import { awardsData } from "@/data/awards";
import { TabbedSection } from "@/components/tabbed-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-xl mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-3 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-8 md:col-start-4 space-y-12">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section className="max-w-2xl">
                <p
                  className="text-mb leading-relaxed text-zinc-700 whitespace-pre-line [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* News section */}
            {newsData.length > 0 && (
              <section>
                <h2 className="text-l mb-12 tracking-wide uppercase">
                  News
                </h2>
                <div className="space-y-12">
                  {newsData.map((news, index) => (
                    <div key={index}>
                      <NewsEntry news={news} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tabbed sections: Publications / Awards / Experience */}
            <TabbedSection
              publicationData={publicationData}
              awardsData={awardsData}
              experienceData={experienceData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
