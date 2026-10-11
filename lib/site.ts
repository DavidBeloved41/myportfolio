const productionSiteUrl = "https://david-atakpa.vercel.app";
const localSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteUrl = new URL(
  process.env.NODE_ENV === "production" ? productionSiteUrl : localSiteUrl,
);
export const contactEmail = "beloveddavid41@gmail.com";