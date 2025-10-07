import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = `${DATA.name} - Full Stack Developer`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "60px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {DATA.name}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              marginBottom: "30px",
              maxWidth: "800px",
            }}
          >
            Full Stack Developer
          </p>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              display: "flex",
              gap: "20px",
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
