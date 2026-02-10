export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  orcidUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Shuntaro Suzuki",
  title: "Master's Student",
  institution: "Keio University, Japan",
  // Note that links work in the description
  description:
    "I am a master’s student at Keio University in Japan, advised by <\a href=https://komeisugiura.jp/index_en.html>Prof. Komei Sugiura</a>. \nI received my bachelor’s degree in Information and Computer Science from Keio University. \n\nMy research interests include brain–computer interfaces and representation learning for physiological and neural signals.",
  email: "shuntaro20021227@keio.jp",
  imageUrl: "/images/profile.png",
  googleScholarUrl: "https://scholar.google.com/citations?hl=ja&user=XcOzgnsAAAAJ",
  githubUsername: "Shuntaro1227",
  linkedinUsername: "shuntaro-suzuki-88005b3b0/",
  twitterUsername: "ShuntaroSzk",
  cvUrl: "/cv.pdf",
  orcidUrl: "https://orcid.org/0009-0008-5564-3835",
  institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
