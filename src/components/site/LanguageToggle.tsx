import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      className={`group inline-flex items-center gap-1.5 h-7 pl-2 pr-2.5 rounded-full border border-hairline bg-surface text-[11px] font-mono font-medium tracking-wide text-muted-foreground hover:text-foreground hover:border-brand/40 hover:bg-surface-elevated transition-all ${className}`}
      aria-label={lang === "en" ? "Switch to French" : "Switch to English"}
    >
      <Globe size={13} className="text-brand" />
      <span className="uppercase">{lang}</span>
    </button>
  );
}
