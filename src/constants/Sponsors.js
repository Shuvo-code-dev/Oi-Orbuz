// Only include real sponsors with imageUrl - placeholders are handled in display components
export const diamondSponsors = [
  {
    id: 1,
    name: 'Tiny Gadgets',
    imageUrl: '/assets/sponsors/shadcnblocks.svg',
    url: 'https://www.tinygadgets.store/'
  },
  {
    id: 2,
    name: 'RupSova',
    imageUrl: '/assets/sponsors/shadcnstudio.svg',
    url: 'https://govaly.com.bd/shop/rupsova/'
  }
];

export const platinumSponsors = [
  {
    id: 1,
    name: 'Oi Jayga',
    imageUrl: '/assets/sponsors/tailark.svg',
    url: 'https://oijayga.space/'
  },
];

export const silverSponsors = [
  {
    id: 1,
    name: 'Domain Hunter',
    imageUrl: '/assets/sponsors/nextjsweekly.svg',
    url: 'https://domainhunter.xyz/'
  },

export const hasSponsors = diamondSponsors.length > 0 || platinumSponsors.length > 0 || silverSponsors.length > 0;
export const hasDiamondSponsors = diamondSponsors.length > 0;
export const hasPlatinumSponsors = platinumSponsors.length > 0;
export const hasSilverSponsors = silverSponsors.length > 0;
