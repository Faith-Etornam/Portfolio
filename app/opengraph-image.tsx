/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Faith Etornam - Backend Engineer";

// 1. CHANGE THIS: Double the dimensions
export const size = {
  width: 2400,
  height: 1260,
};

export const contentType = "image/png";

export default async function Image() {
  const profilePicUrl = "https://portfolio-ashen-psi.vercel.app/profile.jpg";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0f172a",
        // 2. CHANGE THIS: Double the padding to match new scale
        padding: "40px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // 3. CHANGE THIS: Use specific fonts/weights.
            // Note: System fonts can be slightly blurry in OG images without a custom font file.
            fontSize: 60,
            fontWeight: 900,
            color: "white",
            marginBottom: 20,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            fontFamily: '"Inter", sans-serif', // Explicit font stack
          }}
        >
          Faith Etornam
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#94a3b8",
            marginBottom: 40,
            fontWeight: 500,
            fontFamily: "sans-serif",
          }}
        >
          Backend Engineer & Full Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "16px 40px",
            fontSize: 24,
            fontWeight: 600,
            borderRadius: 12,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          View Portfolio
        </div>
      </div>

      {/* 4. CRITICAL CHECK: Ensure your profile.jpg is at least 500x500px on your computer! */}
      <img
        src={profilePicUrl}
        alt="Faith Etornam Profile"
        width="640"
        height="640"
        style={{
          borderRadius: "50%",
          border: "8px solid rgba(255,255,255,0.1)",
          objectFit: "cover",
          imageRendering: "smooth",
        }}
      />
    </div>,
    {
      ...size,
      // 5. ADD THIS: High quality emoji support
      emoji: "twemoji",
    },
  );
}
