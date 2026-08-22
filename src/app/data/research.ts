export interface ResearchItem {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  blurb: string;
}

export const RESEARCH: ResearchItem[] = [
  {
    title: 'Exhibition Review',
    subtitle: 'Rejecting Binaries: Imagining a different present and future',
    image: 'assets/exhibition_review_thumbnail.png',
    href: 'assets/exhibition_review.pdf',
    blurb: 'By Sana Burney. Download to read the full review.',
  },
  {
    title: 'MA Fine Art Contextual Report',
    subtitle: "Through an Artist's Lens",
    image: 'assets/contextual_report_thumbnail.png',
    href: 'https://pub-bd58b614b816454e99bc7f4c954a153a.r2.dev/contextual_report.pdf',
    blurb: 'Download to read the full report.',
  },
];
