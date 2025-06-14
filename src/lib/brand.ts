/**
 * Masterpet Brand Guidelines
 * 
 * This file contains the brand colors, typography, and other brand assets
 * that should be used consistently throughout the application.
 */

// Brand Colors
export const BRAND_COLORS = {
  // Primary Colors
  primary: "#00008D", // Navy blue - for texts, logo dropshadow, borders, cat mascot
  secondary: "#CAF857", // Light green - for backgrounds, logo backgrounds, posters
  white: "#FFFFFF", // White - for logo fill, illustrative elements, text box
  background: "#D9EEFC", // Light blue - main background color

  // Additional Colors for Mascots and Illustrations
  mascotPink: "#FF9BBF", // Pink for mascots
  mascotPurple: "#9F7AEA", // Purple for mascots
  mascotYellow: "#FFD166", // Yellow for mascots
  mascotBrown: "#8B572A", // Brown for mascots
  
  // Water and Backgrounds
  waterBlue: "#63B3ED", // Light blue for water elements
  skyBlue: "#90CDF4", // Sky blue for backgrounds
  cloudWhite: "#F7FAFC", // Off-white for clouds
}

// Typography
export const TYPOGRAPHY = {
  // Primary Typeface - Gliker
  primary: {
    fontFamily: "var(--font-gliker)",
    className: "font-gliker",
    weights: {
      bold: 700,
      regular: 400,
    },
    usage: {
      bold: "Main headings, titles, and emphasis on billboards & posters, Website, Social Media and marketing materials",
      regular: "Subheadings, calls to action (CTA), and secondary text elements",
    }
  },
  
  // Secondary Typeface - Fractul
  secondary: {
    fontFamily: "var(--font-fractul)",
    className: "font-fractul",
    weights: {
      bold: 700,
      regular: 400,
    },
    usage: {
      regular: "Main body copy, descriptions, and paragraphs. Use for longer blocks of text to maintain readability and clarity.",
      bold: "Highlights within the body copy for emphasis.",
    }
  }
}

// Mascot Guidelines
export const MASCOT_GUIDELINES = {
  bodyColors: "Vibrant second shades of pink, yellow, brown, green, or purple for a playful feel.",
  highlights: "Darker shades add depth and liveliness.",
  style: "Sparkles and clouds match mascots' simple lines.",
  background: "Use white clouds for a soft, friendly backdrop."
}

// Logo Guidelines
export const LOGO_GUIDELINES = {
  wordmark: {
    description: "Mostly white fill with blue outline; can also be used with primary green fill.",
    path: "/brand/logo/masterpet-logo-full.svg",
  },
  logomark: {
    description: "White fill with blue dropshadow.",
    background: "Mainly primary green (#CAF857).",
    path: "/brand/logo/masterpet-logo.svg",
    usage: "App icons, website headers, business cards, social media profiles, and marketing materials."
  }
} 