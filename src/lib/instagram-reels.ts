/** Public Reels from @masterpet_official, in showcase order. */
export const INSTAGRAM_REELS = [
  { shortcode: "DCtJNhuSCo6", title: "Grooming Session" },
  { shortcode: "DD1ydq5THax", title: "Grooming Session" },
  { shortcode: "DNqIUYtz-hl", title: "Grooming Session" },
  { shortcode: "DBqmj47xqsX", title: "Grooming Session" },
  { shortcode: "DCYNSNERFQA", title: "Grooming Session" },
] as const;

export const instagramReelPermalink = (shortcode: string) =>
  `https://www.instagram.com/reel/${shortcode}/`;

export const instagramReelEmbedUrl = (shortcode: string) =>
  `https://www.instagram.com/reel/${shortcode}/embed/`;
