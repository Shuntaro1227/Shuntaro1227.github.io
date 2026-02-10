export interface Publication {
  year: string;
  conference?: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  projectPageUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "ICASSP",
    title: "PENGUIN: General Vital Sign Reconstruction from PPG with Flow Matching State Space Model",
    authors: "Shuntaro Suzuki, Shuitsu Koyama, Shinnosuke Hirano, Shunya Nagashima",
    paperUrl: "https://arxiv.org/abs/2602.03858",
    codeUrl: "https://github.com/Neurogica/PENGUIN",
    imageUrl: "/images/PENGUIN.png",
  },
  {
    year: "2026",
    conference: "ICASSP",
    title: "A Decomposition-based State Space Model for Multivariate Time-Series Forecasting",
    authors: "Shunya Nagashima, Shuntaro Suzuki, Shuitsu Koyama, Shinnosuke Hirano",
    paperUrl: "https://arxiv.org/abs/2602.05389",
    codeUrl: "https://github.com/Neurogica/DecompSSM",
    imageUrl: "/images/DecompSSM.png",
  },
  {
    year: "2026",
    conference: "ICASSP",
    title: "Condition-Invariant fMRI Decoding of Speech Intelligibility with Deep State Space Model",
    authors: "Ching-Chih Sung*, Shuntaro Suzuki*, Francis Pingfan Chien, Komei Sugiura, Yu Tsao (*Equal contribution)",
    paperUrl: "https://arxiv.org/abs/2511.01868",
    imageUrl: "/images/fMRI_intellig.png",
  },
  {
    year: "2025",
    conference: "Preprint",
    title: "Cortical-SSM: A Deep State Space Model for EEG and ECoG Motor Imagery Decoding",
    authors: "Shuntaro Suzuki, Shunya Nagashima, Masayuki Hirata, Komei Sugiura",
    paperUrl: "https://arxiv.org/abs/2510.15371",
    imageUrl: "/images/CorticalSSM.png",
  },
  {
    year: "2024",
    conference: "Frontiers in Neuroergonomics",
    title: "Pretraining alpha rhythm enhancement by neurofeedback facilitates short-term perceptual learning and improves visual acuity by facilitated consolidation",
    authors: "Ming Chang, Shuntaro Suzuki, Takahiro Kurose, Takuya Ibaraki",
    paperUrl: "https://www.frontiersin.org/journals/neuroergonomics/articles/10.3389/fnrgo.2024.1399578/full",
    imageUrl: "/images/alpha_rhythm.png",
  },
];
