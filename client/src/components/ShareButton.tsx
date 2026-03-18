import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonProps {
  variant?: "default" | "dark";
  className?: string;
}

export default function ShareButton({ variant = "default", className = "" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
      } catch {
        // user cancelled — do nothing
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ description: "Link copied to clipboard!" });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ description: "Could not copy link", variant: "destructive" });
    }
  };

  const colorClass =
    variant === "dark"
      ? "text-white/50 hover:text-white"
      : "text-muted-foreground hover:text-[#C4541C]";

  return (
    <button
      onClick={handleShare}
      data-testid="button-share"
      className={`ml-auto flex items-center gap-1.5 text-sm font-medium transition-colors ${colorClass} ${className}`}
      aria-label="Share this page"
    >
      {copied ? (
        <Check size={14} className="text-green-500" />
      ) : (
        <Share2 size={14} />
      )}
      <span>{copied ? "Copied!" : "Share"}</span>
    </button>
  );
}
