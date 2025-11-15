export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME as string;

export const APP_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://preview.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : "http://localhost:3000";
