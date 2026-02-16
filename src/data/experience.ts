export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  logoUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jan. 2025 - Present",
    title: "ML Engineer",
    company: "Suntory Global Innovation Center Limited, Japan",
    companyUrl: "https://www.suntory.co.jp/sic/",
    logoUrl: "/images/suntory_icon.png",
  },
  {
    date: "Aug. 2025 - Sep. 2025",
    title: "Research Intern",
    company: "Academia Sinica, Taiwan",
    companyUrl: "https://www.sinica.edu.tw/en/default",
    logoUrl: "/images/sinica_icon.png",
  },
  {
    date: "May 2022 - Oct. 2024",
    title: "Research Intern",
    company: "NTT DATA INSTITUTE OF MANAGEMENT CONSULTING, Inc., Japan",
    companyUrl: "https://google.com",
    logoUrl: "/images/nttdata_icon.png",
  },
];
