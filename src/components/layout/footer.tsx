import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-brown/10 bg-soft-peach/30 py-8 text-center">
      <p className="flex items-center justify-center gap-2 text-sm text-warm-brown/60">
        Made with <Heart className="h-4 w-4 fill-soft-coral text-soft-coral" /> by
        Thuy Dang
      </p>
      <p className="mt-2 text-xs text-warm-brown/40">
        © {currentYear} Dang Bich Thuy. All rights reserved.
      </p>
    </footer>
  );
}
