/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
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
        justifyContent: "space-between",
        backgroundColor: "#0f172a", 
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
            fontSize: 64,
            fontWeight: 900,
            color: "white",
            marginBottom: 20,
            letterSpacing: "-0.05em",
            lineHeight: 1.1,
          }}
        >
          Faith Etornam
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#94a3b8", 
            marginBottom: 40,
            fontWeight: 500,
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

      
      <img
        src={profilePicUrl}
        alt="Faith Etornam Profile"
        width="320"
        height="320"
        style={{
          borderRadius: "50%",
          border: "8px solid rgba(255,255,255,0.1)",
          objectFit: "cover",
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
