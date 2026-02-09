/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const alt = "Faith Etornam - Backend Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";

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
        justifyContent: "center",
        backgroundColor: "#0f172a",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start", 
          maxWidth: "600px", 
        }}
      >
        <div
          style={{
            fontSize: 70, 
            fontWeight: 900,
            color: "white",
            marginBottom: 10,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            fontFamily: '"Inter", sans-serif',
            textShadow: "0 4px 4px rgba(0,0,0,0.4)",
          }}
        >
          Faith Etornam
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#cbd5e1",
            marginBottom: 40,
            fontWeight: 600,
            fontFamily: "sans-serif",
            lineHeight: 1.3,
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
            fontSize: 26,
            fontWeight: 700,
            borderRadius: 12,
            boxShadow: "0 6px 12px -2px rgba(0, 0, 0, 0.4)",
          }}
        >
          View Portfolio
        </div>
      </div>

      {/* IMAGE SIDE */}
      <img
        src={profilePicUrl}
        alt="Faith Etornam Profile"
        width="500"
        height="500"
        style={{
          borderRadius: "50%",
          border: "8px solid rgba(255,255,255,0.15)",
          objectFit: "cover",
          boxShadow: "0 10px 20px rgba(0,0,0,0.5)", 
        }}
      />
    </div>,
    {
      ...size,
      emoji: "twemoji",
    },
  );
}
