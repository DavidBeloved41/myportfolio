const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteUrl = new URL(configuredSiteUrl);
export const contactEmail = "beloveddavid41@gmail.com";