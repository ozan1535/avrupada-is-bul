import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://uluslararasi-kariyer.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://uluslararasi-kariyer.com/araclar",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/araclar/almanya-chancen-karte-puan-hesaplama",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/araclar/avusturya-red-white-red-kart-puan-hesaplama",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/blog/avrupada-calismak-icin-en-cok-tercih-edilen-10-ulke",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/blog/avrupada-en-cok-talep-goren-meslekler",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/blog/avrupada-is-ararken-dikkat-etmeniz-gereken-7-onemli-adim",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/blog/avrupada-kariyer-yapmanin-puf-noktalari",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/blog/yurtdisinda-calismak-icin-hangi-diller-avantaj-sagliyor",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://uluslararasi-kariyer.com/yurtdisi-is-ilanlari",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://uluslararasi-kariyer.com/gizlilik-politikasi",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://uluslararasi-kariyer.com/kullanim-sartlari",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
