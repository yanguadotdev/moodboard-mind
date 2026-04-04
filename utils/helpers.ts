import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getURL() {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // production domain
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatic URL from vercel
    "http://localhost:3000/";

  // Make sure you have the correct protocol
  url = url.startsWith("http") ? url : `https://${url}`;
  // Make sure it ends in /
  url = url.endsWith("/") ? url : `${url}/`;

  return url;
}
