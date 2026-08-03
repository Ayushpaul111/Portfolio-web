import { renderOgCard } from "@/lib/og-card";

// X/Twitter reads twitter:image, which the opengraph-image convention does not
// populate. Without this file, src/lib/seo.ts's twitter.images (the square
// avatar) is what gets shown. Same card, same size.

export { ogAlt as alt, ogSize as size } from "@/lib/og-card";

export const dynamic = "force-static";
export const contentType = "image/png";

export default async function Image() {
  return renderOgCard();
}
