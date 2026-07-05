import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

type WhatsAppButtonProps = Omit<ComponentProps<typeof Button>, "asChild"> & {
  message?: string;
};

/** Tombol yang membuka WhatsApp dengan pesan yang sudah terisi. */
export function WhatsAppButton({ message, children, ...props }: WhatsAppButtonProps) {
  return (
    <Button asChild {...props}>
      <a href={waLink(message)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}
