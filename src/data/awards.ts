export interface Award {
    date: string;
    title: string;
    description?: string;
    link?: string;
    logoUrl?: string;
}

export const awardsData: Award[] = [
    {
        date: "Sep. 2027 - Aug. 2029",
        title: "Funai Overseas Scholarship",
        description: "USD $50K/yr for two years ($36K/yr stipend + ~$14K/yr tuition + full medical insurance)",
        link: "https://funaifoundation.jp/",
        logoUrl: "/images/funai_logo.jpg",
    },
    {
        date: "Aug. 2025 - Sep. 2025",
        title: "The PNPL Competition, NeurIPS 2025",
        description: "2nd Place, Phoneme Classification Task (Standard Track, $1,000 Prize)",
        link: "https://neural-processing-lab.github.io/2025-libribrain-competition/",
        logoUrl: "/images/pnpl_logo.png",
    },
];
