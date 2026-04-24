"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Building2, MapPin, Phone, Mail, Globe, Loader2 } from "lucide-react";
import { euCountries, euLanguages, workingSchedules } from "@/lib/helpers";
import { Badge } from "@/components/ui/badge";
import { IJobDetailResponse } from "@/app/[id]/types";

export default function JobDetailSheet() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams.get("jobId");

  const [jobDetails, setJobDetails] = useState<
    ReturnType<typeof Object.values<IJobDetailResponse["jvProfiles"]>>[0] | null
  >(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!jobId) {
      setJobDetails(null);
      return;
    }
    setLoading(true);
    fetch(`/api/job/${jobId}`)
      .then((r) => r.json())
      .then((data: IJobDetailResponse) => {
        if ("errorMessage" in data) return;
        setJobDetails(Object.values(data.jvProfiles)[0]);
      })
      .finally(() => setLoading(false));
  }, [jobId]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // jobId'yi URL'den temizle, diğer param'ları koru
      const params = new URLSearchParams(searchParams.toString());
      params.delete("jobId");
      const newUrl = params.toString()
        ? `?${params.toString()}`
        : location.pathname;
      router.push(newUrl, { scroll: false });
    }
  };

  const country = jobDetails
    ? euCountries.find(
        (c) =>
          c.filterName.toLowerCase() ===
          jobDetails.locations[0].countryCode.toLowerCase()
      )?.name
    : null;

  const applyUrl =
    jobDetails?.applicationInstructions?.[0]?.match(/href="([^"]+)"/)?.[1];

  return (
    <Sheet open={!!jobId} onOpenChange={handleOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:w-[520px] sm:max-w-[520px] overflow-y-auto p-0"
      >
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="animate-spin text-primary-color w-8 h-8" />
          </div>
        ) : jobDetails ? (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-[#1d293d]">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold text-primary-color text-left leading-snug">
                  {jobDetails.title}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Building2
                    size={16}
                    className="shrink-0 text-muted-foreground"
                  />
                  <span className="break-all">{jobDetails.employer?.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="shrink-0" />
                  <span>
                    {country}
                    {jobDetails.locations[0].cityName
                      ? ` - ${jobDetails.locations[0].cityName}`
                      : ""}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {jobDetails.positionScheduleCodes.map((code) => {
                    const label = workingSchedules.find(
                      (s) => s.filterName === code
                    )?.name;
                    return label ? (
                      <Badge key={code} variant="secondary">
                        {label}
                      </Badge>
                    ) : null;
                  })}
                  {jobDetails.positionLanguages.map((lang) => {
                    const label = euLanguages.find(
                      (l) => l.filterName === lang.languageCode
                    )?.name;
                    return label ? (
                      <Badge key={lang.languageCode} variant="outline">
                        🌐 {label}
                      </Badge>
                    ) : null;
                  })}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Açıklama */}
              <section>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                  İş Tanımı & Aranan Nitelikler
                </h3>
                <div
                  className="prose prose-sm dark:prose-invert max-w-none text-sm"
                  dangerouslySetInnerHTML={{ __html: jobDetails.description }}
                />
              </section>

              {/* İletişim */}
              <section className="border-t pt-4 space-y-2">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                  İletİşİm
                </h3>
                {(() => {
                  const comms = jobDetails.personContacts[0]?.communications;
                  const tel = comms?.telephoneNumbers?.[0];
                  const email = comms?.emails?.[0]?.uri;
                  return (
                    <>
                      {tel && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone size={14} className="text-muted-foreground" />
                          <span>{`${tel.countryDialing} ${tel.areaDialing} ${tel.dialNumber}`}</span>
                        </div>
                      )}
                      {email && (
                        <div className="flex items-center gap-2 text-sm">
                          <Mail size={14} className="text-muted-foreground" />
                          <a
                            href={`mailto:${email}`}
                            className="text-primary-color underline"
                          >
                            {email}
                          </a>
                        </div>
                      )}
                      {jobDetails.employer?.website && (
                        <div className="flex items-center gap-2 text-sm">
                          <Globe size={14} className="text-muted-foreground" />
                          <a
                            href={
                              jobDetails.employer.website.startsWith("http")
                                ? jobDetails.employer.website
                                : `http://${jobDetails.employer.website}`
                            }
                            target="_blank"
                            className="text-primary-color underline"
                          >
                            {jobDetails.employer.website}
                          </a>
                        </div>
                      )}
                    </>
                  );
                })()}
              </section>
            </div>

            {/* Sticky Footer CTA */}
            {applyUrl && (
              <div className="p-4 border-t bg-white dark:bg-[#1d293d] shrink-0">
                <a
                  href={applyUrl}
                  target="_blank"
                  className="block w-full text-center bg-primary-color hover:bg-[#084d91] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Şimdi Başvur →
                </a>
              </div>
            )}
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
