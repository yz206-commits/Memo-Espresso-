// The sections shown at the top of the site. Add, remove, or rename here.
export const sections = [
  {
    slug: 'physical-ai',
    name: 'Physical AI',
    description: 'Robots, autonomous machines, and AI that works in the real world.',
  },
  {
    slug: 'startup-valuation',
    name: 'Startup Valuation',
    description: 'How early-stage companies are priced, and what drives the numbers.',
  },
  {
    slug: 'industry-trends',
    name: 'Industry Trends',
    description: 'Shifts in technology and markets worth paying attention to.',
  },
];

export const sectionName = (slug: string) =>
  sections.find((s) => s.slug === slug)?.name ?? slug;
