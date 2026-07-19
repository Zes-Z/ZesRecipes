// Site Configuration
// Centralize all settings here, do not hardcode in components.

import type { email } from "astro:schema";

export const siteConfig = {
  // Site title — displayed in nav, footer, and page titles
  title: 'Zes Recipes',

  // Site description — used in meta tags and hero section
  description: '今天你想吃些什么?',

  // Author name — used in footer and meta author tag
  author: 'Zes',

  // Site URL — set before deployment (e.g., https://example.com)
  // Used for RSS feed and SEO
  site: 'https://zes-z.github.io/ZesRecipes',

  // HTML lang attribute — affects SEO and accessibility
  lang: 'en',

  // Navigation links — displayed in capsule nav bar
  nav: [
    { title: 'Home', href: '/ZesRecipes/' },
    { title: 'About', href: '/ZesRecipes/about' },
    { title: 'Tags', href: '/ZesRecipes/tags' },
  ],

  // Social links — leave empty to hide
  social: {
    github: 'https://github.com/Zes-Z',
    email: 'zzs234@yeah.net',

  },

  // Feature toggles
  features: {
    readingProgress: true,  // Show reading progress bar on post pages
    backToTop: true,        // Show back to top button
    callout: true,          // Show callout components in blog posts
    lightbox: true,         // Enable image lightbox on click
    rss: true,              // Enable RSS feed
    search: true,           // Enable client-side search (Fuse.js)
  },
};

export type SiteConfig = typeof siteConfig;
