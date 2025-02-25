import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn function - Combines Tailwind CSS classes while handling conditional logic.
 * Uses clsx for conditional class merging and tailwind-merge for conflict resolution.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}






export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
