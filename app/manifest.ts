import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OMNIA — Digital services for business",
    short_name: "OMNIA",
    description: "Websites and digital systems for businesses in Georgia.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F2F3",
    theme_color: "#021F94",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}