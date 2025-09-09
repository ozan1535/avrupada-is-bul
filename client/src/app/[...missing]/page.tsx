import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - 404",
  description: `Aradığınız sayfa bulunamadı.`,
};

export default function CatchAll() {
  notFound();
}
