"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { sendGAEvent } from "@next/third-parties/google";
import { Dispatch, SetStateAction, useState } from "react";
import { Loader2 } from "lucide-react";

function EmailDialog({
  open,
  setOpen,
  title,
  cancelText,
  continueText,
  href,
  gaEventText,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  cancelText: string;
  continueText: string;
  href: string;
  gaEventText: string;
}) {
  const supabase = createClient();
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addSubscriber = async () => {
    setError("");

    if (!form.email) {
      setError("Lütfen email adresinizi girin");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Geçerli bir email adresi girin");
      return;
    }

    setLoading(true);

    try {
      const { data: existingSubscriber } = await supabase
        .from("subscribers")
        .select("email")
        .eq("email", form.email)
        .single();
      if (existingSubscriber) {
        handleDownload();
        setOpen(false);
        setLoading(false);
        return;
      }

      const { error: insertError } = await supabase.from("subscribers").insert({
        email: form.email,
        name: form.name || null,
        title,
      });

      if (insertError) {
        console.error("Supabase error:", insertError);
        setError("Bir hata oluştu. Lütfen tekrar deneyin.");
        setLoading(false);
        return;
      }

      handleDownload();
      setOpen(false);

      setForm({ name: "", email: "" });
    } catch (error) {
      console.error("Error adding subscriber:", error);
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/${href}`;
    link.download = href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    sendGAEvent("event", gaEventText, {
      email: form.email,
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center mb-2">
            Ücretsiz İndir
          </AlertDialogTitle>
          {/* <AlertDialogDescription className="text-center text-base">
            Almanya Vize Rehberi'ni indirmek için email adresinizi girin.
            <br />
            <span className="text-xs text-muted-foreground mt-2 block">
              ✨ 2,300+ kişi indirdi | Spam göndermiyoruz
            </span>
          </AlertDialogDescription> */}
        </AlertDialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Adınız <span className="text-muted-foreground">(opsiyonel)</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Adınız"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              disabled={loading}
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="ornek@email.com"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              disabled={loading}
              required
              className="h-11"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
        </div>

        <AlertDialogFooter className="gap-2 sm:gap-0">
          <AlertDialogCancel
            onClick={() => {
              setOpen(false);
              setError("");
              setForm({ name: "", email: "" });
            }}
            disabled={loading}
          >
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              addSubscriber();
            }}
            disabled={loading || !form.email}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                İndiriliyor...
              </>
            ) : (
              <>{continueText}</>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EmailDialog;
