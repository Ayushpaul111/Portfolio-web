import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

/**
 * Shared artwork for the site's social cards, rendered by both
 * src/app/opengraph-image.tsx and src/app/twitter-image.tsx.
 *
 * Fonts are read from disk rather than fetched via
 * `new URL("./_fonts/x.ttf", import.meta.url)`: webpack rewrites that to a bare
 * "/_next/static/media/..." public path, which fetch() rejects with
 * ERR_INVALID_URL in a production build. Both routes are force-static, so these
 * reads only ever happen at build time.
 */

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogAlt = `${DATA.name} - ${DATA.description}`;

const FONT_DIR = path.join(process.cwd(), "src", "app", "_fonts");

// Satori cannot read next/font's woff2 output, so Inter is vendored as static
// TTFs. Only 400/700 are loaded, so no weight is ever nearest-matched to a face
// that isn't there.
export async function renderOgCard() {
  return new ImageResponse(<OgCard />, {
    ...ogSize,
    fonts: [
      {
        name: "Inter",
        data: fs.readFileSync(path.join(FONT_DIR, "Inter-Regular.ttf")),
        weight: 400,
        style: "normal",
      },
      {
        name: "Inter",
        data: fs.readFileSync(path.join(FONT_DIR, "Inter-Bold.ttf")),
        weight: 700,
        style: "normal",
      },
    ],
  });
}

// Mirrors the .dark tokens in src/app/globals.css — the site's theme is
// strictly monochrome, so the card is too.
const BACKGROUND = "#08090A";
const FOREGROUND = "#FAFAFA";
const MUTED = "#A3A3A3";
const BORDER = "#262626";
const FAINT = "#6E7681";

const TECH = ["React", "Next.js", "TypeScript", "Node.js"];

export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: BACKGROUND,
        fontFamily: "Inter",
      }}
    >
      {/* Top accent strip */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "8px",
          backgroundImage: `linear-gradient(90deg, ${FOREGROUND} 0%, ${FAINT} 45%, ${BACKGROUND} 100%)`,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "72px",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: FOREGROUND,
            }}
          />
          <div
            style={{
              marginLeft: "16px",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "4px",
              color: MUTED,
            }}
          >
            PORTFOLIO
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: "48px",
            fontSize: "96px",
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1.05,
            color: FOREGROUND,
          }}
        >
          {DATA.name}
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: "24px",
            maxWidth: "760px",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: 1.35,
            color: MUTED,
          }}
        >
          {DATA.description}
        </div>

        <div style={{ display: "flex", flexGrow: 1 }} />

        {/* Divider */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "1px",
            backgroundColor: BORDER,
          }}
        />

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "36px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "9999px",
              border: `1px solid ${BORDER}`,
              backgroundColor: "#111214",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "1px",
              color: FOREGROUND,
            }}
          >
            {DATA.initials}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "24px",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 700, color: FOREGROUND }}>
              {DATA.name}
            </div>
            <div style={{ marginTop: "4px", fontSize: "24px", color: MUTED }}>
              ayushpaul.dev
            </div>
          </div>

          <div style={{ display: "flex", flexGrow: 1 }} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "22px",
              color: FAINT,
            }}
          >
            {TECH.map((tech, i) => (
              <div key={tech} style={{ display: "flex" }}>
                {i > 0 && <div style={{ margin: "0 12px", color: BORDER }}>·</div>}
                <div style={{ display: "flex" }}>{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
